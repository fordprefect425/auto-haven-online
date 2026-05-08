import { useState } from 'react';
import { toast } from 'sonner';
import { QuizCard } from './QuizCard';
import { generateLetterToRomanizationQuestion, generateRomanizationToLetterQuestion } from '@/data/quizzes';
import { useProgress } from '@/contexts/ProgressContext';
import { letters } from '@/data/letters';
import { Button } from '@/components/ui/button';

interface MiniQuizProps {
  letterId: string;
  onComplete: (correct: boolean) => void;
}

export function MiniQuiz({ letterId, onComplete }: MiniQuizProps) {
  const { addXP, recordReview } = useProgress();
  const [answered, setAnswered] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);

  const allIds = letters.slice(0, 12).map(l => l.id);
  const question = generateLetterToRomanizationQuestion(letterId, allIds);

  const handleAnswer = (_qId: string, _optId: string, correct: boolean) => {
    setAnswered(true);
    setWasCorrect(correct);
    recordReview(letterId, correct);

    if (correct) {
      addXP(10);
      toast.success('Correct! +10 XP', { duration: 1500 });
    } else {
      toast.error('Not quite — keep going!', { duration: 1500 });
    }

    setTimeout(() => onComplete(correct), 1400);
  };

  if (answered) {
    return (
      <div className={`p-4 rounded-xl text-center font-semibold ${
        wasCorrect ? 'bg-teal-50 text-teal-700' : 'bg-red-50 text-red-700'
      }`}>
        {wasCorrect ? '✓ Correct!' : '✗ Keep practicing'}
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
