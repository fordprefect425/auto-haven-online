import { useState } from 'react';
import { toast } from 'sonner';
import { QuizCard } from './QuizCard';
import { generateLetterToRomanizationQuestion } from '@/data/quizzes';
import { useProgress } from '@/contexts/ProgressContext';
import { letters, getLetterById } from '@/data/letters';
import { letterGroups } from '@/data/letterGroups';

interface MiniQuizProps {
  letterId: string;
  onComplete: (correct: boolean) => void;
}

// Build a distractor pool from the letter's own phonetic group.
// If the group has fewer than 4 letters (need 1 target + 3 distractors),
// expand to adjacent groups in stageOrder until we have enough.
function buildSameGroupPool(letterId: string): string[] {
  const letter = getLetterById(letterId);
  if (!letter) return letters.slice(0, 12).map(l => l.id);

  const targetGroup = letterGroups.find(g => g.id === letter.groupId);
  const targetOrder = targetGroup?.stageOrder ?? 0;

  // Sort groups by phonetic distance (same group first, then adjacent groups)
  const ordered = letterGroups.slice().sort((a, b) =>
    Math.abs(a.stageOrder - targetOrder) - Math.abs(b.stageOrder - targetOrder)
  );

  const pool: string[] = [];
  for (const g of ordered) {
    for (const id of g.letterIds) {
      if (!pool.includes(id)) pool.push(id);
    }
    if (pool.length >= 6) break;
  }
  return pool;
}

export function MiniQuiz({ letterId, onComplete }: MiniQuizProps) {
  const { addXP, recordReview } = useProgress();
  const [answered, setAnswered] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);

  // Distractors come from the same phonetic group as the target letter,
  // expanding to neighbours only if the group is too small.
  const pool = buildSameGroupPool(letterId);
  const question = generateLetterToRomanizationQuestion(letterId, pool);

  const handleAnswer = (_qId: string, _optId: string, correct: boolean) => {
    setAnswered(true);
    setWasCorrect(correct);
    recordReview(letterId, correct);

    if (correct) {
      addXP(10);
      toast.success('Correct! +10 XP', { duration: 1500 });
    } else {
      toast.error('Not quite — try again', { duration: 1500 });
    }

    setTimeout(() => onComplete(correct), 1400);
  };

  if (answered) {
    return (
      <div className={`p-4 rounded-xl text-center font-semibold ${
        wasCorrect ? 'bg-teal-50 text-teal-700' : 'bg-red-50 text-red-700'
      }`}>
        {wasCorrect ? '✓ Correct!' : '✗ Try again to mark this letter learned'}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-muted-foreground">Quick Check</p>
      <QuizCard question={question} onAnswer={handleAnswer} advanceDelay={0} />
    </div>
  );
}
