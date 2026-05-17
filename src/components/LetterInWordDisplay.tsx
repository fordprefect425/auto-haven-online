import type { AnchorWord } from '@/types/kannada';
import { Volume2 } from 'lucide-react';
import { useTTS } from '@/hooks/useTTS';

interface LetterInWordDisplayProps {
  anchorWord: AnchorWord;
  onTapHighlighted?: () => void;
}

function splitGraphemes(text: string): string[] {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new (Intl as any).Segmenter('kn', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(text), (s: any) => s.segment);
  }
  // Fallback: split by character (less accurate for complex clusters)
  return [...text];
}

export function LetterInWordDisplay({ anchorWord, onTapHighlighted }: LetterInWordDisplayProps) {
  const graphemes = splitGraphemes(anchorWord.kannada);
  const targetIdx = anchorWord.targetLetterIndex;
  const { speak, supported: ttsSupported } = useTTS();

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Word with highlighted letter */}
      <div className="flex items-center gap-0 font-kannada text-5xl font-bold tracking-wide">
        {graphemes.map((g, i) => {
          const isTarget = i === targetIdx;
          if (!isTarget) {
            return <span key={i} lang="kn" className="text-foreground/70">{g}</span>;
          }
          // When a handler is provided, render an interactive button.
          // When it's omitted (e.g. brand anchor is the primary tap target on this page),
          // render a visually-highlighted but non-interactive span so we don't ask the
          // user to do the same gesture twice.
          if (onTapHighlighted) {
            return (
              <button
                key={i}
                onClick={onTapHighlighted}
                lang="kn"
                aria-label={`This is the letter that makes the "${anchorWord.romanization.split('')[0]}" sound`}
                className="letter-highlight cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {g}
              </button>
            );
          }
          return (
            <span key={i} lang="kn" className="letter-highlight rounded">
              {g}
            </span>
          );
        })}
      </div>

      {/* Word info + speaker */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="text-2xl">{anchorWord.imageEmoji}</span>
        <div>
          <span className="font-medium text-foreground">{anchorWord.romanization}</span>
          <span className="mx-1">·</span>
          <span>{anchorWord.meaning}</span>
        </div>
        {ttsSupported && (
          <button
            onClick={() => speak(anchorWord.kannada)}
            aria-label={`Hear "${anchorWord.romanization}"`}
            className="ml-1 p-1.5 rounded-full hover:bg-saffron-100 transition-colors"
          >
            <Volume2 size={16} className="text-saffron-600" />
          </button>
        )}
      </div>

      {/* Position label */}
      <span className="text-xs uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded">
        {anchorWord.position} position
      </span>
    </div>
  );
}
