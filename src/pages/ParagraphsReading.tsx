import { TopBar } from '@/components/TopBar';
import { ParagraphCard } from '@/components/ParagraphCard';
import { useProgress } from '@/contexts/ProgressContext';
import { paragraphs } from '@/data/paragraphs';
import { Lock } from 'lucide-react';
import { toast } from 'sonner';

export default function ParagraphsReading() {
  const { progress, markParagraphCompleted, addXP } = useProgress();
  const isUnlocked = progress.currentStage >= 4;

  const handleComplete = (paragraphId: string) => {
    if (!progress.completedParagraphIds.includes(paragraphId)) {
      markParagraphCompleted(paragraphId);
      addXP(25);
      toast.success('+25 XP — paragraph completed!', { duration: 1500 });
    }
  };

  return (
    <div>
      <TopBar title="Paragraphs" showBack={false} />

      {!isUnlocked ? (
        <div className="flex flex-col items-center justify-center gap-4 p-8 mt-12">
          <Lock size={48} className="text-muted-foreground" />
          <h2 className="text-xl font-semibold">Paragraphs Locked</h2>
          <p className="text-muted-foreground text-center text-sm">
            Complete at least 5 sentences to unlock paragraph reading.
          </p>
          <p className="text-sm text-saffron-600 font-medium">
            {progress.completedSentenceIds.length}/5 sentences completed
          </p>
        </div>
      ) : (
        <div className="px-4 pt-4 pb-6 space-y-4">
          <p className="text-sm text-muted-foreground">
            Read the full paragraph in Kannada. Show romanization or translation anytime.
          </p>
          {paragraphs.map(paragraph => (
            <ParagraphCard
              key={paragraph.id}
              paragraph={paragraph}
              isCompleted={progress.completedParagraphIds.includes(paragraph.id)}
              onComplete={() => handleComplete(paragraph.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
