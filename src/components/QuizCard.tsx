import { useEffect, useState } from 'react';
import type { QuizQuestion } from '@/types/kannada';
import { QuizOption } from './QuizOption';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (questionId: string, optionId: string, correct: boolean) => void;
  advanceDelay?: number;
}

type OptionState = 'idle' | 'selected-correct' | 'selected-wrong' | 'revealed-correct';

export function QuizCard({ question, onAnswer, advanceDelay = 1200 }: QuizCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [states, setStates] = useState<Record<string, OptionState>>(
    Object.fromEntries(question.options.map(o => [o.id, 'idle']))
  );

  // Reset when question changes
  useEffect(() => {
    setSelected(null);
    setStates(Object.fromEntries(question.options.map(o => [o.id, 'idle'])));
  }, [question.id]);

  const handleSelect = (optionId: string) => {
    if (selected) return;
    setSelected(optionId);

    const isCorrect = optionId === question.correctOptionId;
    const newStates: Record<string, OptionState> = {};
    for (const opt of question.options) {
      if (opt.id === optionId) {
        newStates[opt.id] = isCorrect ? 'selected-correct' : 'selected-wrong';
      } else if (opt.id === question.correctOptionId) {
        newStates[opt.id] = 'revealed-correct';
      } else {
        newStates[opt.id] = 'idle';
      }
    }
    setStates(newStates);

    setTimeout(() => {
      onAnswer(question.id, optionId, isCorrect);
    }, advanceDelay);
  };

  const isAnswered = selected !== null;

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Prompt */}
      <div className="flex flex-col items-center gap-2 py-4">
        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
          {question.type === 'letter-to-romanization' && 'What sound does this make?'}
          {question.type === 'romanization-to-letter' && 'Which letter is this?'}
          {question.type === 'word-to-meaning' && 'What does this word mean?'}
          {question.type === 'fill-in-blank' && 'Fill in the missing letter'}
        </p>
        <p
          lang={question.isPromptKannada ? 'kn' : undefined}
          className={`font-bold text-center ${
            question.isPromptKannada ? 'font-kannada text-7xl' : 'text-3xl'
          }`}
        >
          {question.prompt}
        </p>
        {question.promptKannada && (
          <p lang="kn" className="font-kannada text-2xl text-muted-foreground">
            {question.promptKannada}
          </p>
        )}
      </div>

      {/* Options 2×2 grid */}
      <div className="grid grid-cols-2 gap-3">
        {question.options.map(option => (
          <QuizOption
            key={option.id}
            option={option}
            state={states[option.id]}
            onClick={() => handleSelect(option.id)}
            disabled={isAnswered}
          />
        ))}
      </div>
    </div>
  );
}
