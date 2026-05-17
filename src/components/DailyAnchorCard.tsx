import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { letters } from '@/data/letters';
import { Sparkles } from 'lucide-react';

// Letters with strong, recognizable photo anchors — used to seed the
// "Try this letter" hero card so first-time visitors immediately see the hook.
const FEATURED_IDS = ['ka', 'ma', 'na', 'va', 'ba', 'ja', 'pa', 'ra'];

function pickFeaturedLetter() {
  const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const id = FEATURED_IDS[dayIndex % FEATURED_IDS.length];
  return letters.find(l => l.id === id && l.brandAnchor?.photoUrl);
}

export function DailyAnchorCard() {
  const navigate = useNavigate();
  const letter = useMemo(pickFeaturedLetter, []);
  if (!letter?.brandAnchor) return null;

  const anchor = letter.brandAnchor;

  return (
    <div className="px-4 mb-6">
      <Card
        className="overflow-hidden cursor-pointer border-saffron-300 hover:border-saffron-400 transition-colors"
        onClick={() => navigate(`/learn/letter/${letter.id}`)}
      >
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <img
            src={anchor.photoUrl}
            alt={anchor.photoAlt ?? anchor.brandName}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute top-2 left-3 flex items-center gap-1 bg-saffron-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
            <Sparkles size={11} />
            Try this letter
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white">
            <p className="text-xs opacity-90 mb-1">{anchor.brandName}</p>
            <p lang="kn" className="font-kannada text-3xl font-bold leading-tight">
              {anchor.kannada}
            </p>
          </div>
        </div>
        <CardContent className="p-3 text-center">
          <p className="text-xs text-muted-foreground">
            Tap to learn the letter <span lang="kn" className="font-kannada font-bold text-foreground">{letter.kannada}</span>
            <span className="mx-1">·</span>
            <span className="font-semibold text-foreground">{letter.romanization}</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
