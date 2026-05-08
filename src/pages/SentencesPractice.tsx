import { TopBar } from '@/components/TopBar';
import { SentenceCard } from '@/components/SentenceCard';
import { useProgress } from '@/contexts/ProgressContext';
import { sentences } from '@/data/sentences';
import { Lock } from 'lucide-react';
import { toast } from 'sonner';

export default function SentencesPractice() {
  const { progress, markSentenceCompleted, addXP } = useProgress();
  const isUnlocked = progress.currentStage >= 3;

  const handleComplete = (sentenceId: string) => {
    if (!progress.completedSentenceIds.includes(sentenceId)) {
      markSentenceCompleted(sentenceId);
      addXP(15);
      toast.success('+15 XP — sentence completed!', { duration: 1500 });
    }
  };

  return (
    <div>
      <TopBar title="Sentences" showBack={false} />

      {!isUnlocked ? (
        <div className="flex flex-col items-center justify-center gap-4 p-8 mt-12">
          <Lock size={48} className="text-muted-foreground" />
          <h2 className="text-xl font-semibold">Sentences Locked</h2>
          <p className="text-muted-foreground text-center text-sm">
            Read at least 10 words to unlock sentence practice.
          </p>
          <p className="text-sm text-saffron-600 font-medium">
            {progress.completedWordIds.length}/10 words read
          </p>
        </div>
      ) : (
        <div className="px-4 pt-4 pb-6 space-y-4">
          <p className="text-sm text-muted-foreground">
            Tap any word in a sentence to see its meaning. Then reveal the full translation.
          </p>
          {sentences.map(sentence => (
            <SentenceCard
              key={sentence.id}
              sentence={sentence}
              isCompleted={progress.completedSentenceIds.includes(sentence.id)}
              onComplete={() => handleComplete(sentence.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
