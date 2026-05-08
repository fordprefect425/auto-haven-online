import type { BrandAnchor } from '@/types/kannada';

interface BrandAnchorDisplayProps {
  brandAnchor: BrandAnchor;
  onTapHighlighted?: () => void;
}

function splitGraphemes(text: string): string[] {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new (Intl as any).Segmenter('kn', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(text), (s: any) => s.segment);
  }
  return [...text];
}

export function BrandAnchorDisplay({ brandAnchor, onTapHighlighted }: BrandAnchorDisplayProps) {
  const graphemes = splitGraphemes(brandAnchor.kannada);
  const targetIdx = brandAnchor.targetLetterIndex;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-0 font-kannada text-5xl font-bold tracking-wide flex-wrap justify-center">
        {graphemes.map((g, i) => {
          const isTarget = i === targetIdx;
          return isTarget ? (
            <button
              key={i}
              onClick={onTapHighlighted}
              lang="kn"
              aria-label="Tap the highlighted letter"
              className="brand-highlight cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              {g}
            </button>
          ) : (
            <span key={i} lang="kn" className="text-foreground/80">
              {g}
            </span>
          );
        })}
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="text-2xl">{brandAnchor.imageEmoji}</span>
        <div>
          <span className="font-bold text-foreground">{brandAnchor.brandName}</span>
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center max-w-xs px-2">
        {brandAnchor.context}
      </p>
    </div>
  );
}
