import type { BrandAnchor } from '@/types/kannada';
import { Volume2 } from 'lucide-react';
import { useTTS } from '@/hooks/useTTS';

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
  const { speak, supported: ttsSupported } = useTTS();

  const highlightedWord = (
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
  );

  return (
    <div className="flex flex-col items-center gap-3">
      {brandAnchor.photoUrl ? (
        <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <img
            src={brandAnchor.photoUrl}
            alt={brandAnchor.photoAlt ?? brandAnchor.brandName}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Highlighted Kannada word overlaid on photo */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 flex flex-col items-center gap-1">
            {highlightedWord}
          </div>
          {brandAnchor.photoCredit && (
            <p className="absolute top-1 right-2 text-[10px] text-white/60">
              © {brandAnchor.photoCredit}
            </p>
          )}
        </div>
      ) : (
        <>
          <span className="text-6xl">{brandAnchor.imageEmoji}</span>
          {highlightedWord}
        </>
      )}

      <div className="flex items-center gap-2 text-sm">
        {!brandAnchor.photoUrl && <span className="text-2xl">{brandAnchor.imageEmoji}</span>}
        <span className="font-bold text-foreground">{brandAnchor.brandName}</span>
        {ttsSupported && (
          <button
            onClick={() => speak(brandAnchor.kannada)}
            aria-label={`Hear "${brandAnchor.brandName}"`}
            className="p-1.5 rounded-full hover:bg-saffron-100 transition-colors"
          >
            <Volume2 size={16} className="text-saffron-600" />
          </button>
        )}
      </div>

      <p className="text-xs text-muted-foreground text-center max-w-xs px-2">
        {brandAnchor.context}
      </p>
    </div>
  );
}
