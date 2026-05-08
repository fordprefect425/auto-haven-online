import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import type { KannadaWord } from '@/types/kannada';

interface WordCardProps {
  word: KannadaWord;
  isCompleted?: boolean;
  onClick?: () => void;
}

export function WordCard({ word, isCompleted, onClick }: WordCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(prev => !prev);
    onClick?.();
  };

  return (
    <div
      className="flip-card h-36 w-full cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
      aria-label={`Word card: ${word.romanization} — tap to reveal meaning`}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''} h-full`}>
        {/* Front: Kannada word + emoji */}
        <div className="flip-card-front">
          <Card className={`h-full flex flex-col items-center justify-center gap-2 p-4 ${
            isCompleted ? 'border-saffron-300 bg-saffron-50' : ''
          }`}>
            {isCompleted && (
              <CheckCircle size={16} className="absolute top-2 right-2 text-saffron-500" fill="currentColor" />
            )}
            {word.imageEmoji && <span className="text-3xl">{word.imageEmoji}</span>}
            <span lang="kn" className="font-kannada text-4xl font-bold text-foreground">
              {word.kannada}
            </span>
            <span className="text-xs text-muted-foreground">tap to reveal</span>
          </Card>
        </div>

        {/* Back: romanization + meaning */}
        <div className="flip-card-back">
          <Card className="h-full flex flex-col items-center justify-center gap-2 p-4 bg-teal-50 border-teal-200">
            {word.imageEmoji && <span className="text-2xl">{word.imageEmoji}</span>}
            <p className="font-semibold text-teal-800">{word.romanization}</p>
            <p className="text-teal-600 font-medium text-center">{word.meaning}</p>
            <span lang="kn" className="font-kannada text-sm text-teal-400">{word.kannada}</span>
          </Card>
        </div>
      </div>
    </div>
  );
}
