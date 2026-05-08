import { Lock, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ProgressBar } from './ProgressBar';
import type { KannadaLetterGroup } from '@/types/kannada';

interface LetterGroupCardProps {
  group: KannadaLetterGroup;
  isUnlocked: boolean;
  progress: number; // 0–100
  onClick?: () => void;
}

export function LetterGroupCard({ group, isUnlocked, progress, onClick }: LetterGroupCardProps) {
  return (
    <Card
      onClick={isUnlocked ? onClick : undefined}
      role={isUnlocked ? 'button' : undefined}
      tabIndex={isUnlocked ? 0 : undefined}
      onKeyDown={isUnlocked ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); } : undefined}
      className={`transition-all ${
        isUnlocked
          ? 'cursor-pointer hover:shadow-md hover:border-saffron-300 active:scale-98'
          : 'opacity-50 cursor-not-allowed'
      }`}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
            isUnlocked ? 'bg-saffron-100' : 'bg-muted'
          }`}>
            {isUnlocked ? (
              <span lang="kn" className="font-kannada text-2xl font-bold text-saffron-600">
                {/* Show first letter of group */}
                {group.nameKannada.split(' ')[0]?.charAt(0) || '?'}
              </span>
            ) : (
              <Lock size={20} className="text-muted-foreground" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-sm truncate">{group.name}</h3>
              {isUnlocked && <ChevronRight size={16} className="text-muted-foreground shrink-0 ml-1" />}
            </div>
            <p lang="kn" className="font-kannada text-xs text-muted-foreground mb-2">
              {group.nameKannada}
            </p>
            <ProgressBar value={progress} showPercent={false} color="saffron" />
          </div>
        </div>

        {isUnlocked && (
          <p className="text-xs text-muted-foreground mt-2 ml-15">{group.description}</p>
        )}
      </CardContent>
    </Card>
  );
}
