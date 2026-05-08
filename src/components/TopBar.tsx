import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { StreakCounter } from './StreakCounter';
import { useProgress } from '@/contexts/ProgressContext';

interface TopBarProps {
  title: string;
  showBack?: boolean;
}

export function TopBar({ title, showBack = true }: TopBarProps) {
  const navigate = useNavigate();
  const { progress } = useProgress();

  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border">
      <div className="flex items-center h-14 px-4 gap-3">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="p-1.5 rounded-lg hover:bg-muted transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
        )}
        <h1 className="flex-1 font-semibold text-lg truncate">{title}</h1>
        <StreakCounter days={progress.streakDays} />
      </div>
    </header>
  );
}
