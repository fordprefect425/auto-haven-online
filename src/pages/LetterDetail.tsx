import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TopBar } from '@/components/TopBar';
import { LetterInWordDisplay } from '@/components/LetterInWordDisplay';
import { MatraDisplay } from '@/components/MatraDisplay';
import { MiniQuiz } from '@/components/MiniQuiz';
import { Button } from '@/components/ui/button';
import { useProgress } from '@/contexts/ProgressContext';
import { getLetterById } from '@/data/letters';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function LetterDetail() {
  const { letterId } = useParams<{ letterId: string }>();
  const navigate = useNavigate();
  const { markLetterCompleted, addXP, isLetterCompleted } = useProgress();

  const letter = getLetterById(letterId ?? '');
  const [anchorIndex, setAnchorIndex] = useState(0);
  const [showIsolated, setShowIsolated] = useState(false);
  const [showMiniQuiz, setShowMiniQuiz] = useState(false);
  const [quizDone, setQuizDone] = useState(false);
  const [quizCorrect, setQuizCorrect] = useState(false);

  if (!letter) {
    return <div className="p-8 text-center text-muted-foreground">Letter not found.</div>;
  }

  const currentAnchor = letter.anchorWords[anchorIndex];
  const isCompleted = isLetterCompleted(letter.id);

  const handleTapHighlighted = () => {
    setShowIsolated(true);
  };

  const handleQuizComplete = (correct: boolean) => {
    setQuizCorrect(correct);
    setQuizDone(true);
    if (!isCompleted) {
      markLetterCompleted(letter.id);
      addXP(correct ? 20 : 5);
    }
  };

  return (
    <div>
      <TopBar title={`${letter.romanization} · ${letter.kannada}`} />
      <div className="px-4 pt-6 pb-10 space-y-8">

        {/* Step 1: See the letter in a word first */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              You already say this word
            </h2>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setAnchorIndex(i => Math.max(0, i - 1))}
                disabled={anchorIndex === 0}
                className="p-1 rounded disabled:opacity-30"
                aria-label="Previous example"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-xs text-muted-foreground">{anchorIndex + 1}/{letter.anchorWords.length}</span>
              <button
                onClick={() => setAnchorIndex(i => Math.min(letter.anchorWords.length - 1, i + 1))}
                disabled={anchorIndex === letter.anchorWords.length - 1}
                className="p-1 rounded disabled:opacity-30"
                aria-label="Next example"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="bg-saffron-50 rounded-2xl p-6 border border-saffron-100">
            <LetterInWordDisplay
              anchorWord={currentAnchor}
              onTapHighlighted={handleTapHighlighted}
            />
            {!showIsolated && (
              <p className="text-center text-xs text-saffron-600 mt-4 font-medium">
                ↑ Tap the highlighted letter to isolate it
              </p>
            )}
          </div>
        </section>

        {/* Step 2: Isolated letter */}
        {showIsolated && (
          <section className="space-y-3 animate-bounce-in">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              This is the letter
            </h2>
            <div className="flex flex-col items-center gap-4 py-6 bg-card rounded-2xl border">
              <span lang="kn" className="font-kannada font-bold text-[100px] leading-none text-foreground">
                {letter.kannada}
              </span>
              <div className="text-center space-y-1">
                <p className="text-2xl font-bold text-primary">{letter.romanization}</p>
                <p className="text-sm text-muted-foreground">{letter.pronunciationHint}</p>
              </div>
            </div>

            {/* Vowel combinations */}
            {letter.matras && letter.matras.length > 0 && (
              <MatraDisplay matras={letter.matras} baseRomanization={letter.romanization} />
            )}
          </section>
        )}

        {/* Step 3: Mini-quiz */}
        {showIsolated && !quizDone && (
          <section className="space-y-3">
            <div className="h-px bg-border" />
            {!showMiniQuiz ? (
              <Button
                onClick={() => setShowMiniQuiz(true)}
                className="w-full bg-saffron-500 hover:bg-saffron-600 text-white"
              >
                Test yourself →
              </Button>
            ) : (
              <MiniQuiz letterId={letter.id} onComplete={handleQuizComplete} />
            )}
          </section>
        )}

        {/* Step 4: After quiz */}
        {quizDone && (
          <section className="space-y-3 animate-bounce-in">
            <div className={`p-4 rounded-xl text-center ${quizCorrect ? 'bg-teal-50 border border-teal-200' : 'bg-clay-50 border border-clay-200'}`}>
              <p className="font-bold text-lg mb-1">{quizCorrect ? '🎉 Great job!' : '💪 Keep going!'}</p>
              <p className="text-sm text-muted-foreground">
                {quizCorrect
                  ? `+20 XP earned. Review scheduled for tomorrow.`
                  : `+5 XP earned. This letter will appear in tomorrow's review.`}
              </p>
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate(-1)}
            >
              ← Back to group
            </Button>
          </section>
        )}
      </div>
    </div>
  );
}
