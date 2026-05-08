import { useParams, useNavigate } from 'react-router-dom';
import { TopBar } from '@/components/TopBar';
import { LetterCard } from '@/components/LetterCard';
import { ProgressBar } from '@/components/ProgressBar';
import { Button } from '@/components/ui/button';
import { useProgress } from '@/contexts/ProgressContext';
import { getGroupById } from '@/data/letterGroups';
import { getLettersByGroup } from '@/data/letters';

export default function AlphabetGroupDetail() {
  const { groupId } = useParams<{ groupId: string }>();
  const navigate = useNavigate();
  const { isLetterCompleted, isLetterMastered, isGroupUnlocked, getGroupProgress } = useProgress();

  const group = getGroupById(groupId ?? '');
  const groupLetters = getLettersByGroup(groupId ?? '');

  if (!group) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Group not found.
      </div>
    );
  }

  const unlocked = isGroupUnlocked(group.id);
  const progress = getGroupProgress(group.letterIds);

  return (
    <div>
      <TopBar title={group.name} />
      <div className="px-4 pt-4 pb-6 space-y-6">
        {/* Group header */}
        <div>
          <p lang="kn" className="font-kannada text-2xl font-bold text-muted-foreground">
            {group.nameKannada}
          </p>
          <p className="text-sm text-muted-foreground mt-1">{group.description}</p>
          <div className="mt-3">
            <ProgressBar value={progress} label="Group progress" color="saffron" />
          </div>
        </div>

        {/* Letters grid */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
            Letters in this group
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {groupLetters.map(letter => (
              <div key={letter.id} className="flex justify-center">
                <LetterCard
                  letter={letter}
                  isCompleted={isLetterCompleted(letter.id)}
                  isMastered={isLetterMastered(letter.id)}
                  isLocked={!unlocked}
                  size="md"
                  onClick={() => navigate(`/learn/letter/${letter.id}`)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quiz this group CTA */}
        {unlocked && (
          <Button
            variant="outline"
            className="w-full border-saffron-300 text-saffron-600 hover:bg-saffron-50"
            onClick={() => navigate(`/quiz/group-${group.id}`)}
          >
            Quiz this group →
          </Button>
        )}
      </div>
    </div>
  );
}
