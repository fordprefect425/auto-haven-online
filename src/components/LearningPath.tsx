import { useNavigate } from 'react-router-dom';
import { StageGate } from './StageGate';
import { useProgress } from '@/contexts/ProgressContext';
import { letterGroups } from '@/data/letterGroups';
import { words } from '@/data/words';
import { sentences } from '@/data/sentences';
import type { LearningStage } from '@/types/kannada';

export function LearningPath() {
  const navigate = useNavigate();
  const { progress } = useProgress();

  const allLetterIds = letterGroups.flatMap(g => g.letterIds);
  const stage1Progress = allLetterIds.length > 0
    ? Math.round((progress.completedLetterIds.length / allLetterIds.length) * 100)
    : 0;
  const stage2Progress = words.length > 0
    ? Math.round((progress.completedWordIds.length / words.length) * 100)
    : 0;
  const stage3Progress = sentences.length > 0
    ? Math.round((progress.completedSentenceIds.length / sentences.length) * 100)
    : 0;
  const stage4Progress = 0; // simplified

  const stageRoutes: Record<LearningStage, string> = {
    1: '/learn/alphabets',
    2: '/learn/words',
    3: '/learn/sentences',
    4: '/learn/paragraphs',
  };

  const isUnlocked = (stage: LearningStage) => progress.currentStage >= stage;

  return (
    <div className="px-4">
      <h2 className="font-semibold text-base mb-4">Your Learning Path</h2>
      {([1, 2, 3, 4] as LearningStage[]).map(stage => (
        <StageGate
          key={stage}
          stage={stage}
          isUnlocked={isUnlocked(stage)}
          isActive={progress.currentStage === stage}
          progress={[stage1Progress, stage2Progress, stage3Progress, stage4Progress][stage - 1]}
          onEnter={() => navigate(stageRoutes[stage])}
        />
      ))}
    </div>
  );
}
