import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LearningPath } from '@/components/LearningPath';
import { ReviewDueBanner } from '@/components/ReviewDueBanner';
import { StreakCounter } from '@/components/StreakCounter';
import { XPBadge } from '@/components/XPBadge';
import { useProgress } from '@/contexts/ProgressContext';
import { letterGroups } from '@/data/letterGroups';

export default function Dashboard() {
  const navigate = useNavigate();
  const { progress, getDueLetterIds } = useProgress();
  const dueCount = getDueLetterIds().length;

  // Find the first incomplete group to continue from
  const continueGroup = letterGroups.find(g =>
    progress.unlockedGroupIds.includes(g.id) &&
    !g.letterIds.every(id => progress.completedLetterIds.includes(id))
  );

  const continueRoute = continueGroup
    ? `/learn/alphabets/${continueGroup.id}`
    : progress.currentStage >= 2
    ? '/learn/words'
    : '/learn/alphabets';

  const totalLetters = letterGroups.flatMap(g => g.letterIds).length;

  return (
    <div className="pb-6">
      {/* Header */}
      <div className="px-4 pt-8 pb-6 bg-gradient-to-b from-saffron-50 to-background">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-muted-foreground text-sm font-medium">Welcome back</p>
            <h1 lang="kn" className="font-kannada text-4xl font-bold text-foreground">
              ನಮಸ್ಕಾರ
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Kannada is spelled exactly how it sounds — learn the 50 letters and you can read anything.
            </p>
          </div>
          <XPBadge xp={progress.xpTotal} size="sm" />
        </div>
        <div className="flex items-center gap-3 mt-3">
          <StreakCounter days={progress.streakDays} />
          <span className="text-sm text-muted-foreground">
            {progress.completedLetterIds.length}/{totalLetters} letters learned
          </span>
        </div>
      </div>

      {/* Review banner */}
      <ReviewDueBanner dueCount={dueCount} />

      {/* Continue card */}
      <div className="px-4 mb-6">
        <Card className="border-saffron-300 bg-gradient-to-r from-saffron-50 to-background">
          <CardContent className="p-4">
            <p className="text-xs font-semibold text-saffron-600 uppercase tracking-wide mb-1">
              Continue Learning
            </p>
            <p className="font-semibold text-foreground mb-3">
              {continueGroup
                ? `Next up: ${continueGroup.name}`
                : 'Start with the Basic Vowels'}
            </p>
            <Button
              onClick={() => navigate(continueRoute)}
              className="w-full bg-saffron-500 hover:bg-saffron-600 text-white"
            >
              Continue →
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick stats */}
      <div className="px-4 mb-6 grid grid-cols-3 gap-3">
        {[
          { label: 'Letters', value: progress.completedLetterIds.length },
          { label: 'Words', value: progress.completedWordIds.length },
          { label: 'Mastered', value: progress.masteredLetterIds.length },
        ].map(({ label, value }) => (
          <Card key={label}>
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-primary">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Learning path */}
      <LearningPath />
    </div>
  );
}
