import { useNavigate } from 'react-router-dom';
import { TopBar } from '@/components/TopBar';
import { LetterGroupCard } from '@/components/LetterGroupCard';
import { useProgress } from '@/contexts/ProgressContext';
import { letterGroups } from '@/data/letterGroups';

export default function AlphabetsOverview() {
  const navigate = useNavigate();
  const { isGroupUnlocked, getGroupProgress } = useProgress();

  return (
    <div>
      <TopBar title="Alphabets" showBack={false} />
      <div className="px-4 pt-4 pb-6 space-y-3">
        <p className="text-sm text-muted-foreground mb-4">
          Kannada has 50 letters arranged in phonetic groups. Each group shares a place of articulation in your mouth.
        </p>
        {letterGroups.map(group => (
          <LetterGroupCard
            key={group.id}
            group={group}
            isUnlocked={isGroupUnlocked(group.id)}
            progress={getGroupProgress(group.letterIds)}
            onClick={() => navigate(`/learn/alphabets/${group.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
