import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import type { KannadaParagraph } from '@/types/kannada';

interface ParagraphCardProps {
  paragraph: KannadaParagraph;
  isCompleted?: boolean;
  onComplete?: () => void;
}

export function ParagraphCard({ paragraph, isCompleted, onComplete }: ParagraphCardProps) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [showRomanization, setShowRomanization] = useState(false);

  const handleComplete = () => {
    setShowTranslation(true);
    onComplete?.();
  };

  return (
    <Card className={isCompleted ? 'border-saffron-300' : ''}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 lang="kn" className="font-kannada text-xl font-bold">{paragraph.title}</h3>
            <span className="text-xs text-muted-foreground">{paragraph.theme}</span>
          </div>
          {isCompleted && <CheckCircle size={20} className="text-saffron-500" />}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Kannada paragraph */}
        <p lang="kn" className="font-kannada text-2xl leading-loose font-medium">
          {paragraph.kannada}
        </p>

        {/* Toggles */}
        <div className="flex gap-2 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowRomanization(v => !v)}
          >
            {showRomanization ? 'Hide' : 'Show'} Romanization
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowTranslation(v => !v)}
          >
            {showTranslation ? 'Hide' : 'Show'} Translation
          </Button>
          {!isCompleted && (
            <Button size="sm" onClick={handleComplete} className="bg-saffron-500 hover:bg-saffron-600 text-white">
              Mark Complete
            </Button>
          )}
        </div>

        {showRomanization && (
          <div className="p-3 bg-clay-50 rounded-lg">
            <p className="text-sm italic text-muted-foreground">{paragraph.romanization}</p>
          </div>
        )}

        {showTranslation && (
          <div className="p-3 bg-teal-50 rounded-lg border border-teal-100">
            <p className="text-sm text-teal-800">{paragraph.meaning}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
