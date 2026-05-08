import type { Quiz, QuizQuestion, QuizOption, LearningStage } from '@/types/kannada';
import { letters, getLettersByGroup } from './letters';
import { words } from './words';

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors(correctId: string, pool: { id: string; display: string; isKannada: boolean }[], count = 3) {
  return shuffleArray(pool.filter(p => p.id !== correctId)).slice(0, count);
}

export function generateLetterToRomanizationQuestion(letterId: string, allLetterIds: string[]): QuizQuestion {
  const letter = letters.find(l => l.id === letterId)!;
  const pool = allLetterIds
    .filter(id => id !== letterId)
    .map(id => {
      const l = letters.find(ll => ll.id === id)!;
      return { id: `opt-${id}`, display: l.romanization, isKannada: false };
    });

  const correctOpt: QuizOption = { id: `opt-${letterId}`, display: letter.romanization, isKannada: false };
  const distractors = pickDistractors(correctOpt.id, pool);
  const options = shuffleArray([correctOpt, ...distractors]);

  return {
    id: `q-ltr-${letterId}-${Date.now()}-${Math.random()}`,
    type: 'letter-to-romanization',
    prompt: letter.kannada,
    isPromptKannada: true,
    options,
    correctOptionId: correctOpt.id,
    relatedLetterId: letterId,
    xpReward: 10,
  };
}

export function generateRomanizationToLetterQuestion(letterId: string, allLetterIds: string[]): QuizQuestion {
  const letter = letters.find(l => l.id === letterId)!;
  const pool = allLetterIds
    .filter(id => id !== letterId)
    .map(id => {
      const l = letters.find(ll => ll.id === id)!;
      return { id: `opt-${id}`, display: l.kannada, isKannada: true };
    });

  const correctOpt: QuizOption = { id: `opt-${letterId}`, display: letter.kannada, isKannada: true };
  const distractors = pickDistractors(correctOpt.id, pool);
  const options = shuffleArray([correctOpt, ...distractors]);

  return {
    id: `q-rtl-${letterId}-${Date.now()}-${Math.random()}`,
    type: 'romanization-to-letter',
    prompt: `Which letter makes the sound "${letter.romanization}"?`,
    isPromptKannada: false,
    options,
    correctOptionId: correctOpt.id,
    relatedLetterId: letterId,
    xpReward: 10,
  };
}

export function generateWordToMeaningQuestion(wordId: string): QuizQuestion {
  const word = words.find(w => w.id === wordId)!;
  const distractorWords = shuffleArray(words.filter(w => w.id !== wordId)).slice(0, 3);

  const correctOpt: QuizOption = { id: `opt-${wordId}`, display: word.meaning, isKannada: false };
  const distractors: QuizOption[] = distractorWords.map(w => ({
    id: `opt-${w.id}`,
    display: w.meaning,
    isKannada: false,
  }));
  const options = shuffleArray([correctOpt, ...distractors]);

  return {
    id: `q-wtm-${wordId}-${Date.now()}`,
    type: 'word-to-meaning',
    prompt: word.kannada,
    isPromptKannada: true,
    options,
    correctOptionId: correctOpt.id,
    relatedWordId: wordId,
    xpReward: 15,
  };
}

export function generateQuizForGroup(groupId: string): Quiz {
  const groupLetters = getLettersByGroup(groupId);
  if (groupLetters.length === 0) return { id: `quiz-${groupId}`, title: 'Quiz', groupId, stage: 1, questions: [] };

  const allGroupLetterIds = groupLetters.map(l => l.id);

  // 2 questions per letter: letter→romanization + romanization→letter
  const questions: QuizQuestion[] = [];
  for (const letter of shuffleArray(groupLetters).slice(0, 5)) {
    questions.push(generateLetterToRomanizationQuestion(letter.id, allGroupLetterIds));
    questions.push(generateRomanizationToLetterQuestion(letter.id, allGroupLetterIds));
  }

  return {
    id: `quiz-group-${groupId}`,
    title: `${groupLetters[0].groupName} Quiz`,
    groupId,
    stage: 1,
    questions: shuffleArray(questions).slice(0, 8),
  };
}

export function generateReviewQuiz(letterIds: string[]): Quiz {
  if (letterIds.length === 0) return { id: 'quiz-review-empty', title: 'Review', stage: 1, questions: [] };

  const questions: QuizQuestion[] = [];
  const usableIds = letterIds.filter(id => letters.find(l => l.id === id));

  for (const id of usableIds) {
    questions.push(generateLetterToRomanizationQuestion(id, usableIds.length >= 4 ? usableIds : letters.slice(0, 10).map(l => l.id)));
    questions.push(generateRomanizationToLetterQuestion(id, usableIds.length >= 4 ? usableIds : letters.slice(0, 10).map(l => l.id)));
  }

  return {
    id: `quiz-review-${Date.now()}`,
    title: 'Daily Review',
    stage: 1,
    questions: shuffleArray(questions).slice(0, Math.min(10, questions.length)),
  };
}

export function generateInterleavedQuiz(groupIds: string[], stage: LearningStage): Quiz {
  const groupLetterIds = groupIds.flatMap(gid => getLettersByGroup(gid).map(l => l.id));
  const questions: QuizQuestion[] = [];

  for (const id of shuffleArray(groupLetterIds).slice(0, 6)) {
    questions.push(generateLetterToRomanizationQuestion(id, groupLetterIds));
  }
  // Add word questions for stage 2+
  if (stage >= 2) {
    for (const word of shuffleArray(words).slice(0, 4)) {
      questions.push(generateWordToMeaningQuestion(word.id));
    }
  }

  return {
    id: `quiz-interleaved-${Date.now()}`,
    title: 'Mixed Practice',
    stage,
    questions: shuffleArray(questions).slice(0, 10),
  };
}
