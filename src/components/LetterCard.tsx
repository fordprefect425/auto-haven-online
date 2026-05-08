import { CheckCircle, Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { KannadaLetter } from '@/types/kannada';

interface LetterCardProps {
  letter: KannadaLetter;
  isCompleted?: boolean;
  isMastered?: boolean;
  isLocked?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: { card: 'w-16 h-16', letter: 'text-3xl', roman: 'text-[10px]' },
  md: { card: 'w-24 h-24', letter: 'text-5xl', roman: 'text-xs' },
  lg: { card: 'w-32 h-32', letter: 'text-7xl', roman: 'text-sm' },
};

export function LetterCard({ letter, isCompleted, isMastered, isLocked, onClick, size = 'md' }: LetterCardProps) {
  const sz = sizeClasses[size];

  return (
    <Card
      onClick={!isLocked ? onClick : undefined}
      role={onClick && !isLocked ? 'button' : undefined}
      tabIndex={onClick && !isLocked ? 0 : undefined}
      onKeyDown={onClick && !isLocked ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
      aria-label={isLocked ? `${letter.romanization} — locked` : `Letter ${letter.romanization}`}
      className={`relative flex flex-col items-center justify-center gap-1 transition-all select-none ${sz.card} ${
        isLocked
          ? 'opacity-40 cursor-not-allowed bg-muted'
          : onClick
          ? 'cursor-pointer hover:shadow-md hover:scale-105 active:scale-95'
          : ''
      } ${isMastered ? 'border-teal-400 bg-teal-50' : isCompleted ? 'border-saffron-300 bg-saffron-50' : ''}`}
    >
      {isLocked ? (
        <Lock size={24} className="text-muted-foreground" />
      ) : (
        <>
          <span lang="kn" className={`font-kannada font-bold leading-none ${sz.letter}`}>
            {letter.kannada}
          </span>
          <span className={`text-muted-foreground font-medium ${sz.roman}`}>
            {letter.romanization}
          </span>
        </>
      )}

      {(isCompleted || isMastered) && !isLocked && (
        <div className="absolute top-1 right-1">
          <CheckCircle
            size={size === 'sm' ? 12 : 16}
            className={isMastered ? 'text-teal-500' : 'text-saffron-500'}
            fill="currentColor"
          />
        </div>
      )}
    </Card>
  );
}
