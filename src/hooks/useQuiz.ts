import { useState, useCallback } from 'react';
import type { QuizQuestion } from '@/types/kannada';

interface QuizState {
  questions: QuizQuestion[];
  currentIndex: number;
  answers: Record<string, string>; // questionId -> selectedOptionId
  isComplete: boolean;
}

export function useQuiz(questions: QuizQuestion[]) {
  const [state, setState] = useState<QuizState>({
    questions,
    currentIndex: 0,
    answers: {},
    isComplete: false,
  });

  const currentQuestion = state.questions[state.currentIndex] ?? null;

  const answerQuestion = useCallback((questionId: string, optionId: string) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: optionId },
    }));
  }, []);

  const nextQuestion = useCallback(() => {
    setState(prev => {
      const next = prev.currentIndex + 1;
      return {
        ...prev,
        currentIndex: next,
        isComplete: next >= prev.questions.length,
      };
    });
  }, []);

  const restart = useCallback(() => {
    setState({ questions, currentIndex: 0, answers: {}, isComplete: false });
  }, [questions]);

  const score = (() => {
    const answered = Object.entries(state.answers);
    if (answered.length === 0) return 0;
    const correct = answered.filter(([qId, optId]) => {
      const q = state.questions.find(q => q.id === qId);
      return q?.correctOptionId === optId;
    }).length;
    return Math.round((correct / state.questions.length) * 100);
  })();

  const correctCount = Object.entries(state.answers).filter(([qId, optId]) => {
    const q = state.questions.find(q => q.id === qId);
    return q?.correctOptionId === optId;
  }).length;

  return {
    currentQuestion,
    currentIndex: state.currentIndex,
    totalQuestions: state.questions.length,
    answers: state.answers,
    isComplete: state.isComplete,
    score,
    correctCount,
    answerQuestion,
    nextQuestion,
    restart,
  };
}
