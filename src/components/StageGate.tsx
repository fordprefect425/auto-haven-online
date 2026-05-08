import { Lock, BookOpen, Type, FileText, BookMarked, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ProgressBar } from './ProgressBar';
import type { LearningStage } from '@/types/kannada';

interface StageGateProps {
  stage: LearningStage;
  isUnlocked: boolean;
  isActive: boolean;
  progress: number; // 0–100
  onEnter: () => void;
}

const stageConfig: Record<LearningStage, { title: string; description: string; Icon: React.ElementType; unlockHint: string }> = {
  1: { title: 'Alphabets', description: 'Learn all 50 Kannada letters', Icon: BookOpen, unlockHint: '' },
  2: { title: 'Words', description: 'Read simple everyday words', Icon: Type, unlockHint: 'Complete 10 letters to unlock' },
  3: { title: 'Sentences', description: 'Read complete sentences', Icon: FileText, unlockHint: 'Complete 10 words to unlock' },
  4: { title: 'Paragraphs', description: 'Read full paragraphs', Icon: BookMarked, unlockHint: 'Complete 5 sentences to unlock' },
};

export function StageGate({ stage, isUnlocked, isActive, progress, onEnter }: StageGateProps) {
  const { title, description, Icon, unlockHint } = stageConfig[stage];

  return (
    <div className="flex gap-3 items-start">
      {/* Stage node */}
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
          isUnlocked
            ? isActive
              ? 'bg-primary text-primary-foreground ring-4 ring-saffron-200'
              : 'bg-saffron-100 text-saffron-700'
            : 'bg-muted text-muted-foreground'
        }`}>
          {isUnlocked ? stage : <Lock size={16} />}
        </div>
        {stage < 4 && <div className="w-0.5 h-8 bg-border mt-1" />}
      </div>

      {/* Card */}
      <Card
        onClick={isUnlocked ? onEnter : undefined}
        role={isUnlocked ? 'button' : undefined}
        tabIndex={isUnlocked ? 0 : undefined}
        onKeyDown={isUnlocked ? (e) => { if (e.key === 'Enter' || e.key === ' ') onEnter(); } : undefined}
        className={`flex-1 mb-6 transition-all ${
          isUnlocked ? 'cursor-pointer hover:shadow-md' : 'opacity-50'
        } ${isActive ? 'border-saffron-400' : ''}`}
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Icon size={20} className={isUnlocked ? 'text-saffron-500' : 'text-muted-foreground'} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{title}</h3>
                {isUnlocked && <ChevronRight size={16} className="text-muted-foreground" />}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
            </div>
          </div>

          {isUnlocked ? (
            <div className="mt-3">
              <ProgressBar value={progress} showPercent color="saffron" />
            </div>
          ) : (
            <p className="text-xs text-muted-foreground mt-2">{unlockHint}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
