import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import type { UserProgress, LearningStage, QuizScore, LetterReviewRecord } from '@/types/kannada';
import { letterGroups, getNextGroupId } from '@/data/letterGroups';
import { letters } from '@/data/letters';

const STORAGE_KEY = 'kannada-app-progress';

function generateId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function makeInitialProgress(): UserProgress {
  return {
    userId: generateId(),
    currentStage: 1,
    completedLetterIds: [],
    masteredLetterIds: [],
    letterReviewRecords: [],
    completedWordIds: [],
    completedSentenceIds: [],
    completedParagraphIds: [],
    quizScores: [],
    xpTotal: 0,
    streakDays: 0,
    lastActivityDate: '',
    unlockedGroupIds: ['vowels-basic', 'vowels-extended-1'],
  };
}

type Action =
  | { type: 'MARK_LETTER_COMPLETED'; letterId: string }
  | { type: 'MARK_LETTER_MASTERED'; letterId: string }
  | { type: 'RECORD_REVIEW'; record: LetterReviewRecord }
  | { type: 'MARK_WORD_COMPLETED'; wordId: string }
  | { type: 'MARK_SENTENCE_COMPLETED'; sentenceId: string }
  | { type: 'MARK_PARAGRAPH_COMPLETED'; paragraphId: string }
  | { type: 'RECORD_QUIZ_SCORE'; score: QuizScore }
  | { type: 'ADD_XP'; amount: number }
  | { type: 'UPDATE_STREAK' }
  | { type: 'UNLOCK_GROUP'; groupId: string }
  | { type: 'SET_STAGE'; stage: LearningStage }
  | { type: 'UNLOCK_ALL'; allGroupIds: string[] };

function srsIntervalDays(correctStreak: number): number {
  if (correctStreak <= 0) return 0;
  if (correctStreak === 1) return 1;
  if (correctStreak === 2) return 3;
  return 7;
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}


// Phonetic groups that are NOT vowels — used for the Stage 2 unlock rule
const CONSONANT_GROUP_IDS = ['velar', 'palatal', 'retroflex', 'dental', 'labial', 'semivowel-sibilant'];

function isAnyConsonantGroupComplete(completedLetterIds: string[]): boolean {
  return letterGroups.some(g =>
    CONSONANT_GROUP_IDS.includes(g.id) &&
    g.letterIds.every(id => completedLetterIds.includes(id))
  );
}

function findGroupOfLetter(letterId: string): string | undefined {
  return letters.find(l => l.id === letterId)?.groupId;
}

function reducer(state: UserProgress, action: Action): UserProgress {
  switch (action.type) {
    case 'MARK_LETTER_COMPLETED': {
      if (state.completedLetterIds.includes(action.letterId)) return state;
      const completed = [...state.completedLetterIds, action.letterId];

      // Auto-unlock next stage: Words requires >=10 letters AND at least one consonant group fully done
      let stage = state.currentStage;
      if (stage < 2 && completed.length >= 10 && isAnyConsonantGroupComplete(completed)) {
        stage = 2;
      }

      // Auto-unlock the next letter group if the current group is now fully complete
      let unlockedGroupIds = state.unlockedGroupIds;
      const currentGroupId = findGroupOfLetter(action.letterId);
      if (currentGroupId) {
        const currentGroup = letterGroups.find(g => g.id === currentGroupId);
        if (currentGroup && currentGroup.letterIds.every(id => completed.includes(id))) {
          const nextId = getNextGroupId(currentGroupId);
          if (nextId && !unlockedGroupIds.includes(nextId)) {
            unlockedGroupIds = [...unlockedGroupIds, nextId];
          }
        }
      }

      // Create SRS record if not exists
      const existing = state.letterReviewRecords.find(r => r.letterId === action.letterId);
      const records = existing
        ? state.letterReviewRecords
        : [...state.letterReviewRecords, {
            letterId: action.letterId,
            correctStreak: 0,
            nextReviewDate: addDays(todayStr(), 1),
            lastReviewedDate: todayStr(),
          }];

      return { ...state, completedLetterIds: completed, currentStage: stage, unlockedGroupIds, letterReviewRecords: records };
    }

    case 'MARK_LETTER_MASTERED': {
      if (state.masteredLetterIds.includes(action.letterId)) return state;
      return { ...state, masteredLetterIds: [...state.masteredLetterIds, action.letterId] };
    }

    case 'RECORD_REVIEW': {
      const records = state.letterReviewRecords.filter(r => r.letterId !== action.record.letterId);
      return { ...state, letterReviewRecords: [...records, action.record] };
    }

    case 'MARK_WORD_COMPLETED': {
      if (state.completedWordIds.includes(action.wordId)) return state;
      const words = [...state.completedWordIds, action.wordId];
      let stage = state.currentStage;
      if (stage < 3 && words.length >= 10) stage = 3;
      return { ...state, completedWordIds: words, currentStage: stage };
    }

    case 'MARK_SENTENCE_COMPLETED': {
      if (state.completedSentenceIds.includes(action.sentenceId)) return state;
      const sents = [...state.completedSentenceIds, action.sentenceId];
      let stage = state.currentStage;
      if (stage < 4 && sents.length >= 5) stage = 4;
      return { ...state, completedSentenceIds: sents, currentStage: stage };
    }

    case 'MARK_PARAGRAPH_COMPLETED': {
      if (state.completedParagraphIds.includes(action.paragraphId)) return state;
      return { ...state, completedParagraphIds: [...state.completedParagraphIds, action.paragraphId] };
    }

    case 'RECORD_QUIZ_SCORE':
      return { ...state, quizScores: [...state.quizScores, action.score] };

    case 'ADD_XP':
      return { ...state, xpTotal: state.xpTotal + action.amount };

    case 'UPDATE_STREAK': {
      const today = todayStr();
      if (state.lastActivityDate === today) return state;
      const last = state.lastActivityDate;
      let streak = state.streakDays;
      if (last) {
        const diffMs = new Date(today).getTime() - new Date(last).getTime();
        const diffDays = Math.round(diffMs / 86400000);
        streak = diffDays === 1 ? streak + 1 : 1;
      } else {
        streak = 1;
      }
      return { ...state, streakDays: streak, lastActivityDate: today };
    }

    case 'UNLOCK_GROUP': {
      if (state.unlockedGroupIds.includes(action.groupId)) return state;
      return { ...state, unlockedGroupIds: [...state.unlockedGroupIds, action.groupId] };
    }

    case 'SET_STAGE':
      return { ...state, currentStage: action.stage };

    case 'UNLOCK_ALL':
      return { ...state, currentStage: 4, unlockedGroupIds: action.allGroupIds };

    default:
      return state;
  }
}

interface ProgressContextValue {
  progress: UserProgress;
  markLetterCompleted: (letterId: string) => void;
  markLetterMastered: (letterId: string) => void;
  recordReview: (letterId: string, correct: boolean) => void;
  markWordCompleted: (wordId: string) => void;
  markSentenceCompleted: (sentenceId: string) => void;
  markParagraphCompleted: (paragraphId: string) => void;
  recordQuizScore: (score: QuizScore) => void;
  addXP: (amount: number) => void;
  updateStreak: () => void;
  unlockGroup: (groupId: string) => void;
  unlockAll: () => void;
  isLetterCompleted: (letterId: string) => boolean;
  isLetterMastered: (letterId: string) => boolean;
  isGroupUnlocked: (groupId: string) => boolean;
  getGroupProgress: (letterIds: string[]) => number;
  getDueLetterIds: () => string[];
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, dispatch] = useReducer(reducer, null, () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const p = JSON.parse(stored) as UserProgress;
        // Migration: old 'vowels-extended' → split into two new groups
        if (p.unlockedGroupIds?.includes('vowels-extended')) {
          p.unlockedGroupIds = p.unlockedGroupIds
            .filter(id => id !== 'vowels-extended')
            .concat(['vowels-extended-1', 'vowels-extended-2']);
        }
        return p;
      }
    } catch {}
    return makeInitialProgress();
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markLetterCompleted = useCallback((letterId: string) => {
    dispatch({ type: 'MARK_LETTER_COMPLETED', letterId });
    dispatch({ type: 'UPDATE_STREAK' });
  }, []);

  const markLetterMastered = useCallback((letterId: string) => {
    dispatch({ type: 'MARK_LETTER_MASTERED', letterId });
  }, []);

  const recordReview = useCallback((letterId: string, correct: boolean) => {
    const existing = progress.letterReviewRecords.find(r => r.letterId === letterId);
    const currentStreak = correct ? (existing?.correctStreak ?? 0) + 1 : 0;
    const interval = srsIntervalDays(currentStreak);
    const today = todayStr();
    const record: LetterReviewRecord = {
      letterId,
      correctStreak: currentStreak,
      nextReviewDate: interval > 0 ? addDays(today, interval) : today,
      lastReviewedDate: today,
    };
    dispatch({ type: 'RECORD_REVIEW', record });
    if (currentStreak >= 3) dispatch({ type: 'MARK_LETTER_MASTERED', letterId });
    dispatch({ type: 'UPDATE_STREAK' });
  }, [progress.letterReviewRecords]);

  const markWordCompleted = useCallback((wordId: string) => {
    dispatch({ type: 'MARK_WORD_COMPLETED', wordId });
    dispatch({ type: 'UPDATE_STREAK' });
  }, []);

  const markSentenceCompleted = useCallback((sentenceId: string) => {
    dispatch({ type: 'MARK_SENTENCE_COMPLETED', sentenceId });
    dispatch({ type: 'UPDATE_STREAK' });
  }, []);

  const markParagraphCompleted = useCallback((paragraphId: string) => {
    dispatch({ type: 'MARK_PARAGRAPH_COMPLETED', paragraphId });
    dispatch({ type: 'UPDATE_STREAK' });
  }, []);

  const recordQuizScore = useCallback((score: QuizScore) => {
    dispatch({ type: 'RECORD_QUIZ_SCORE', score });
  }, []);

  const addXP = useCallback((amount: number) => {
    dispatch({ type: 'ADD_XP', amount });
  }, []);

  const updateStreak = useCallback(() => {
    dispatch({ type: 'UPDATE_STREAK' });
  }, []);

  const unlockGroup = useCallback((groupId: string) => {
    dispatch({ type: 'UNLOCK_GROUP', groupId });
  }, []);

  const unlockAll = useCallback(() => {
    dispatch({ type: 'UNLOCK_ALL', allGroupIds: letterGroups.map(g => g.id) });
  }, []);

  const isLetterCompleted = useCallback((letterId: string) =>
    progress.completedLetterIds.includes(letterId), [progress.completedLetterIds]);

  const isLetterMastered = useCallback((letterId: string) =>
    progress.masteredLetterIds.includes(letterId), [progress.masteredLetterIds]);

  const isGroupUnlocked = useCallback((groupId: string) =>
    progress.unlockedGroupIds.includes(groupId), [progress.unlockedGroupIds]);

  const getGroupProgress = useCallback((letterIds: string[]) => {
    if (letterIds.length === 0) return 0;
    const done = letterIds.filter(id => progress.completedLetterIds.includes(id)).length;
    return Math.round((done / letterIds.length) * 100);
  }, [progress.completedLetterIds]);

  const getDueLetterIds = useCallback(() => {
    const today = todayStr();
    return progress.letterReviewRecords
      .filter(r => r.nextReviewDate <= today && !progress.masteredLetterIds.includes(r.letterId))
      .map(r => r.letterId);
  }, [progress.letterReviewRecords, progress.masteredLetterIds]);

  return (
    <ProgressContext.Provider value={{
      progress,
      markLetterCompleted, markLetterMastered, recordReview,
      markWordCompleted, markSentenceCompleted, markParagraphCompleted,
      recordQuizScore, addXP, updateStreak, unlockGroup, unlockAll,
      isLetterCompleted, isLetterMastered, isGroupUnlocked,
      getGroupProgress, getDueLetterIds,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
