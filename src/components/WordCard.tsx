import { useMemo, useState } from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import type { KannadaWord } from '@/types/kannada';
import { words as allWords } from '@/data/words';

interface WordCardProps {
  word: KannadaWord;
  isCompleted?: boolean;
  /** Called when the user picks the correct romanization (first time). */
  onCorrect?: () => void;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildRomanizationOptions(word: KannadaWord): string[] {
  // Prefer distractors from the same difficulty (closer in length/shape).
  const sameDifficulty = allWords.filter(w => w.id !== word.id && w.difficulty === word.difficulty);
  const pool = sameDifficulty.length >= 2
    ? sameDifficulty
    : allWords.filter(w => w.id !== word.id);

  const distractors = shuffle(pool).slice(0, 2).map(w => w.romanization);
  return shuffle([word.romanization, ...distractors]);
}

/**
 * Active word check: user must pick the correct romanization from 3 options.
 * Replaces the previous tap-to-flip flashcard, which marked a word "completed"
 * on a single tap regardless of whether the user could actually read it.
 */
export function WordCard({ word, isCompleted, onCorrect }: WordCardProps) {
  // Only re-shuffle options when the word changes, not on every re-render
  // (otherwise the user's progress through the picker would visually reshuffle).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = useMemo(() => buildRomanizationOptions(word), [word.id]);
  const [picked, setPicked] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handlePick = (opt: string) => {
    if (revealed) return;
    setPicked(opt);
    if (opt === word.romanization) {
      setRevealed(true);
      onCorrect?.();
    }
  };

  const handleTryAgain = () => {
    setPicked(null);
  };

  return (
    <Card className={`p-4 ${isCompleted ? 'border-saffron-300 bg-saffron-50' : ''}`}>
      <div className="flex items-center gap-3 mb-4">
        {word.imageEmoji && <span className="text-3xl">{word.imageEmoji}</span>}
        <div className="flex-1">
          <span lang="kn" className="font-kannada text-3xl font-bold text-foreground">
            {word.kannada}
          </span>
        </div>
        {isCompleted && (
          <CheckCircle size={18} className="text-saffron-500 shrink-0" fill="currentColor" />
        )}
      </div>

      {!revealed ? (
        <>
          <p className="text-xs text-muted-foreground mb-2">How is this word read?</p>
          <div className="grid grid-cols-1 gap-2">
            {options.map(opt => {
              const isWrongPick = picked === opt && opt !== word.romanization;
              return (
                <button
                  key={opt}
                  onClick={() => handlePick(opt)}
                  disabled={revealed}
                  className={`text-left px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    isWrongPick
                      ? 'border-red-300 bg-red-50 text-red-700'
                      : 'border-border bg-card hover:bg-muted'
                  }`}
                  aria-label={`Pick ${opt}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {picked && picked !== word.romanization && (
            <div className="mt-3 flex items-center justify-between gap-2">
              <p className="text-xs text-red-600 font-medium">Not quite — read it again</p>
              <button
                onClick={handleTryAgain}
                className="text-xs font-semibold text-saffron-600 hover:underline"
              >
                Try again
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-lg bg-teal-50 border border-teal-200 p-3 flex items-center gap-3">
          {word.imageEmoji && <span className="text-2xl">{word.imageEmoji}</span>}
          <div>
            <p className="text-sm font-semibold text-teal-800">{word.romanization}</p>
            <p className="text-sm text-teal-700">{word.meaning}</p>
          </div>
        </div>
      )}
    </Card>
  );
}
