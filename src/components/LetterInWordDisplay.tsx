import type { AnchorWord } from '@/types/kannada';

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

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Word with highlighted letter */}
      <div className="flex items-center gap-0 font-kannada text-5xl font-bold tracking-wide">
        {graphemes.map((g, i) => {
          const isTarget = i === targetIdx;
          return isTarget ? (
            <button
              key={i}
              onClick={onTapHighlighted}
              lang="kn"
              aria-label={`This is the letter that makes the "${anchorWord.romanization.split('')[0]}" sound`}
              className="letter-highlight cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              {g}
            </button>
          ) : (
            <span key={i} lang="kn" className="text-foreground/70">
              {g}
            </span>
          );
        })}
      </div>

      {/* Word info */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="text-2xl">{anchorWord.imageEmoji}</span>
        <div>
          <span className="font-medium text-foreground">{anchorWord.romanization}</span>
          <span className="mx-1">·</span>
          <span>{anchorWord.meaning}</span>
        </div>
      </div>

      {/* Position label */}
      <span className="text-xs uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded">
        {anchorWord.position} position
      </span>
    </div>
  );
}
