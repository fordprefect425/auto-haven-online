import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import type { KannadaSentence } from '@/types/kannada';

interface SentenceCardProps {
  sentence: KannadaSentence;
  isCompleted?: boolean;
  onComplete?: () => void;
}

export function SentenceCard({ sentence, isCompleted, onComplete }: SentenceCardProps) {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    onComplete?.();
  };

  return (
    <Card className={isCompleted ? 'border-saffron-300 bg-saffron-50' : ''}>
      <CardContent className="p-5 space-y-4">
        {/* Kannada sentence with word tooltips */}
        <div className="flex flex-wrap gap-1 items-baseline">
          {sentence.wordBreakdown.map((wb, i) => (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <span
                  lang="kn"
                  className="font-kannada text-3xl font-bold cursor-help border-b-2 border-dotted border-saffron-400 hover:border-saffron-600 transition-colors"
                >
                  {wb.kannada}
                </span>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p className="font-semibold">{wb.romanization}</p>
                <p className="text-xs text-muted-foreground">{wb.meaning}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        {/* Romanization */}
        <p className="text-sm text-muted-foreground italic">{sentence.romanization}</p>

        {/* Reveal button or meaning */}
        {revealed ? (
          <div className="flex items-start gap-2 p-3 bg-teal-50 rounded-lg">
            <CheckCircle size={16} className="text-teal-500 mt-0.5 shrink-0" />
            <p className="text-sm font-medium text-teal-800">{sentence.meaning}</p>
          </div>
        ) : (
          <button
            onClick={handleReveal}
            className="text-sm text-primary font-semibold hover:underline"
          >
            Show meaning →
          </button>
        )}

        {isCompleted && (
          <div className="flex items-center gap-1 text-xs text-saffron-600">
            <CheckCircle size={12} className="text-saffron-500" />
            Completed
          </div>
        )}
      </CardContent>
    </Card>
  );
}
