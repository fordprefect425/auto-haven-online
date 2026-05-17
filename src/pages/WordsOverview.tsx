import { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { WordCard } from '@/components/WordCard';
import { useProgress } from '@/contexts/ProgressContext';
import { words } from '@/data/words';
import { Lock } from 'lucide-react';

const difficultyLabels: Record<number, string> = { 1: 'Beginner', 2: 'Intermediate', 3: 'Advanced' };

export default function WordsOverview() {
  const { progress, markWordCompleted, isLetterCompleted } = useProgress();
  const [filter, setFilter] = useState<1 | 2 | 3>(1);

  const isUnlocked = progress.currentStage >= 2;
  const filteredWords = words.filter(w => w.difficulty === filter);

  return (
    <div>
      <TopBar title="Words" showBack={false} />

      {!isUnlocked ? (
        <div className="flex flex-col items-center justify-center gap-4 p-8 mt-12">
          <Lock size={48} className="text-muted-foreground" />
          <h2 className="text-xl font-semibold">Words Locked</h2>
          <p className="text-muted-foreground text-center text-sm">
            Learn at least 10 letters to unlock word reading.
          </p>
          <p className="text-sm text-saffron-600 font-medium">
            {progress.completedLetterIds.length}/10 letters learned
          </p>
        </div>
      ) : (
        <div className="px-4 pt-4 pb-6 space-y-4">
          <p className="text-sm text-muted-foreground">
            Read each word and pick its correct romanization.
          </p>

          {/* Difficulty filter */}
          <div className="flex gap-2">
            {([1, 2, 3] as const).map(d => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  filter === d
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {difficultyLabels[d]}
              </button>
            ))}
          </div>

          {/* Word grid */}
          <div className="space-y-3">
            {filteredWords.map(word => (
              <WordCard
                key={word.id}
                word={word}
                isCompleted={progress.completedWordIds.includes(word.id)}
                onCorrect={() => {
                  if (!progress.completedWordIds.includes(word.id)) {
                    markWordCompleted(word.id);
                  }
                }}
              />
            ))}
          </div>

          {filteredWords.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No words at this level yet.</p>
          )}
        </div>
      )}
    </div>
  );
}
