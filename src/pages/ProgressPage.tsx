import { TopBar } from '@/components/TopBar';
import { ProgressBar } from '@/components/ProgressBar';
import { XPBadge } from '@/components/XPBadge';
import { StreakCounter } from '@/components/StreakCounter';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useProgress } from '@/contexts/ProgressContext';
import { letterGroups } from '@/data/letterGroups';
import { words } from '@/data/words';
import { sentences } from '@/data/sentences';
import { paragraphs } from '@/data/paragraphs';
import { LockKeyholeOpen } from 'lucide-react';

// Rough estimate: knowing N letters enables reading ~X% of common Kannada text
function estimateReadability(completedLetterIds: string[]): number {
  const total = 50;
  const pct = Math.min(completedLetterIds.length / total, 1);
  // Non-linear: first 20 letters cover ~60% of text frequency
  return Math.round(pct < 0.4 ? pct * 150 : 60 + (pct - 0.4) * 66);
}

export default function ProgressPage() {
  const { progress, unlockAll } = useProgress();
  const allLetterIds = letterGroups.flatMap(g => g.letterIds);
  const readabilityPct = estimateReadability(progress.completedLetterIds);

  const stages = [
    { label: 'Alphabets', done: progress.completedLetterIds.length, total: allLetterIds.length },
    { label: 'Words', done: progress.completedWordIds.length, total: words.length },
    { label: 'Sentences', done: progress.completedSentenceIds.length, total: sentences.length },
    { label: 'Paragraphs', done: progress.completedParagraphIds.length, total: paragraphs.length },
  ];

  const totalQuizzes = progress.quizScores.length;
  const avgScore = totalQuizzes > 0
    ? Math.round(progress.quizScores.reduce((s, q) => s + q.score, 0) / totalQuizzes)
    : 0;

  return (
    <div>
      <TopBar title="Progress" showBack={false} />
      <div className="px-4 pt-4 pb-10 space-y-5">

        {/* XP + Streak */}
        <Card>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StreakCounter days={progress.streakDays} />
              <div>
                <p className="font-semibold text-sm">{progress.streakDays} day streak</p>
                <p className="text-xs text-muted-foreground">Keep going!</p>
              </div>
            </div>
            <XPBadge xp={progress.xpTotal} size="md" />
          </CardContent>
        </Card>

        {/* Readability estimate */}
        <Card className="bg-saffron-50 border-saffron-200">
          <CardContent className="p-4 text-center space-y-1">
            <p className="text-4xl font-bold text-saffron-600">{Math.min(readabilityPct, 100)}%</p>
            <p className="text-sm font-semibold">of common Kannada text you can now read</p>
            <p className="text-xs text-muted-foreground">
              Estimated based on letter frequency in everyday Kannada
            </p>
          </CardContent>
        </Card>

        {/* Stage progress */}
        <Card>
          <CardHeader className="pb-2 pt-4 px-4">
            <h2 className="font-semibold text-sm">Learning Stages</h2>
          </CardHeader>
          <CardContent className="px-4 pb-4 space-y-4">
            {stages.map(({ label, done, total }) => (
              <ProgressBar
                key={label}
                value={total > 0 ? Math.round((done / total) * 100) : 0}
                label={`${label} (${done}/${total})`}
                color="saffron"
              />
            ))}
          </CardContent>
        </Card>

        {/* Per-group letter progress */}
        <Card>
          <CardHeader className="pb-2 pt-4 px-4">
            <h2 className="font-semibold text-sm">Letter Groups</h2>
          </CardHeader>
          <CardContent className="px-4 pb-4 space-y-3">
            {letterGroups.map(group => {
              const done = group.letterIds.filter(id => progress.completedLetterIds.includes(id)).length;
              const pct = Math.round((done / group.letterIds.length) * 100);
              const isUnlocked = progress.unlockedGroupIds.includes(group.id);
              return (
                <ProgressBar
                  key={group.id}
                  value={isUnlocked ? pct : 0}
                  label={`${group.name} (${isUnlocked ? done : '?'}/${group.letterIds.length})`}
                  color={isUnlocked ? 'saffron' : 'teal'}
                />
              );
            })}
          </CardContent>
        </Card>

        {/* Quiz stats */}
        {totalQuizzes > 0 && (
          <Card>
            <CardContent className="p-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">{totalQuizzes}</p>
                <p className="text-xs text-muted-foreground">Quizzes taken</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{avgScore}%</p>
                <p className="text-xs text-muted-foreground">Avg score</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{progress.masteredLetterIds.length}</p>
                <p className="text-xs text-muted-foreground">Mastered</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Admin bypass — unlock all groups and stages */}
        <div className="pt-2 border-t border-dashed border-border">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-muted-foreground hover:text-foreground gap-2 text-xs"
            onClick={unlockAll}
          >
            <LockKeyholeOpen size={14} />
            Unlock all content
          </Button>
        </div>

      </div>
    </div>
  );
}
