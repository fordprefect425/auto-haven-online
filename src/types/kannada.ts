export type LetterType = 'vowel' | 'consonant';
export type LearningStage = 1 | 2 | 3 | 4;
export type LetterPosition = 'initial' | 'medial' | 'final';
export type QuestionType =
  | 'letter-to-romanization'
  | 'romanization-to-letter'
  | 'letter-in-word'
  | 'word-to-meaning'
  | 'fill-in-blank';

export interface AnchorWord {
  kannada: string;
  romanization: string;
  meaning: string;
  targetLetterIndex: number; // grapheme index (not char index)
  position: LetterPosition;
  imageEmoji: string;
}

export interface ExampleWord {
  kannada: string;
  romanization: string;
  meaning: string;
}

export interface KannadaLetter {
  id: string;
  kannada: string;
  romanization: string;
  pronunciationHint: string;
  type: LetterType;
  groupId: string;
  groupName: string;
  orderInGroup: number;
  anchorWords: AnchorWord[]; // 3 real words showing the letter in context
  exampleWords: ExampleWord[];
  matras?: string[]; // vowel diacritic combinations (for consonants)
}

export interface KannadaLetterGroup {
  id: string;
  name: string;
  nameKannada: string;
  description: string;
  stageOrder: number;
  letterIds: string[];
}

export interface KannadaWord {
  id: string;
  kannada: string;
  romanization: string;
  meaning: string;
  letterIds: string[];
  groupIds: string[];
  difficulty: 1 | 2 | 3;
  imageEmoji?: string;
}

export interface WordBreakdown {
  kannada: string;
  romanization: string;
  meaning: string;
}

export interface KannadaSentence {
  id: string;
  kannada: string;
  romanization: string;
  meaning: string;
  wordBreakdown: WordBreakdown[];
  usedWordIds: string[];
  difficulty: 1 | 2 | 3;
}

export interface KannadaParagraph {
  id: string;
  title: string;
  theme: string;
  kannada: string;
  romanization: string;
  meaning: string;
  sentenceIds: string[];
  difficulty: 1 | 2 | 3;
}

export interface LetterReviewRecord {
  letterId: string;
  correctStreak: number;
  nextReviewDate: string; // "YYYY-MM-DD"
  lastReviewedDate: string;
}

export interface QuizScore {
  quizId: string;
  score: number; // 0–100
  attemptedAt: string;
  correctCount: number;
  totalCount: number;
}

export interface UserProgress {
  userId: string;
  currentStage: LearningStage;
  completedLetterIds: string[];
  masteredLetterIds: string[];
  letterReviewRecords: LetterReviewRecord[];
  completedWordIds: string[];
  completedSentenceIds: string[];
  completedParagraphIds: string[];
  quizScores: QuizScore[];
  xpTotal: number;
  streakDays: number;
  lastActivityDate: string;
  unlockedGroupIds: string[];
}

export interface QuizOption {
  id: string;
  display: string;
  isKannada: boolean;
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  prompt: string;
  promptKannada?: string;
  isPromptKannada: boolean;
  options: QuizOption[];
  correctOptionId: string;
  relatedLetterId?: string;
  relatedWordId?: string;
  xpReward: number;
}

export interface Quiz {
  id: string;
  title: string;
  groupId?: string;
  stage: LearningStage;
  questions: QuizQuestion[];
}
