import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BrandAnchorDisplay } from '@/components/BrandAnchorDisplay';
import { letters } from '@/data/letters';
import { ChevronRight, BookOpen } from 'lucide-react';

const ONBOARDED_KEY = 'kannada-onboarded';

export function markOnboarded() {
  try {
    localStorage.setItem(ONBOARDED_KEY, 'true');
  } catch {
    // ignore quota / private-mode errors
  }
}

export function hasOnboarded(): boolean {
  try {
    if (localStorage.getItem(ONBOARDED_KEY) === 'true') return true;
    // Existing users who already have progress skip onboarding automatically
    const raw = localStorage.getItem('kannada-app-progress');
    if (raw) {
      const p = JSON.parse(raw);
      if (p?.completedLetterIds?.length > 0 || p?.xpTotal > 0) {
        localStorage.setItem(ONBOARDED_KEY, 'true');
        return true;
      }
    }
    return false;
  } catch {
    return false;
  }
}

export default function Onboarding() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const demoLetter = letters.find(l => l.id === 'ka');
  const totalSlides = 3;

  const handleNext = () => {
    if (slide < totalSlides - 1) {
      setSlide(s => s + 1);
    } else {
      markOnboarded();
      navigate('/', { replace: true });
    }
  };

  const handleSkip = () => {
    markOnboarded();
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-gradient-to-b from-saffron-50 to-background">
      <header className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <BookOpen size={20} className="text-saffron-600" />
          <span lang="kn" className="font-kannada font-bold text-lg">ಕನ್ನಡ ಓದು</span>
        </div>
        <button
          onClick={handleSkip}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          Skip
        </button>
      </header>

      <div className="flex-1 flex flex-col px-6 pt-4 pb-8">
        {/* Slide dots */}
        <div className="flex justify-center gap-1.5 mb-8">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === slide ? 'w-8 bg-saffron-500' : 'w-1.5 bg-saffron-200'
              }`}
            />
          ))}
        </div>

        {/* Slide content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto w-full">
          {slide === 0 && (
            <div className="space-y-5 animate-bounce-in">
              <span className="text-6xl">🗣️</span>
              <h1 lang="kn" className="font-kannada text-3xl font-bold leading-tight">
                ಕನ್ನಡ ಮಾತಾಡ್ತೀರಾ?
                <br />
                ಆದರೆ ಓದೋಕೆ ಬರಲ್ವಾ?
              </h1>
              <p className="text-muted-foreground">
                You speak Kannada fluently — you just never learned to read it.
                You're not alone. And it's easier than you think.
              </p>
            </div>
          )}

          {slide === 1 && demoLetter?.brandAnchor && (
            <div className="space-y-5 animate-bounce-in w-full">
              <h2 className="text-xl font-bold">You already know this</h2>
              <p className="text-sm text-muted-foreground">
                Every KSRTC bus has this on its side. Tap the glowing letter:
              </p>
              <div className="bg-white rounded-2xl p-4 border-2 border-saffron-200 shadow-sm">
                <BrandAnchorDisplay
                  brandAnchor={demoLetter.brandAnchor}
                  onTapHighlighted={() => setRevealed(true)}
                />
                {revealed && (
                  <div className="mt-4 pt-4 border-t border-saffron-100 animate-bounce-in">
                    <p className="text-xs text-muted-foreground mb-1">This letter is</p>
                    <p lang="kn" className="font-kannada text-5xl font-bold text-saffron-600">
                      {demoLetter.kannada}
                    </p>
                    <p className="text-lg font-bold mt-1">"{demoLetter.romanization}"</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      The same letter starts "Karnataka", "kamala", "kelasa"…
                    </p>
                  </div>
                )}
              </div>
              {!revealed && (
                <p className="text-xs text-saffron-700 font-medium">
                  ↑ Tap the glowing letter
                </p>
              )}
            </div>
          )}

          {slide === 2 && (
            <div className="space-y-5 animate-bounce-in">
              <span className="text-6xl">🎯</span>
              <h2 className="text-2xl font-bold">50 letters. That's it.</h2>
              <p className="text-muted-foreground">
                Kannada is spelled exactly how it sounds. Learn the 50 letters
                and you can read <span className="font-semibold text-foreground">anything</span> —
                bus boards, shop signs, milk packets, newspaper headlines.
              </p>
              <div className="bg-saffron-50 border border-saffron-200 rounded-xl p-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-wide text-saffron-700 mb-1">
                  How this app works
                </p>
                <p className="text-sm">
                  Each letter is taught using a brand or sign you already see every day.
                  No flashcards. No abstract drills.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <Button
          onClick={handleNext}
          disabled={slide === 1 && !revealed}
          className="w-full bg-saffron-500 hover:bg-saffron-600 text-white h-12 text-base"
        >
          {slide < totalSlides - 1 ? (
            <>
              Next <ChevronRight size={18} className="ml-1" />
            </>
          ) : (
            "Let's go →"
          )}
        </Button>
      </div>
    </div>
  );
}
