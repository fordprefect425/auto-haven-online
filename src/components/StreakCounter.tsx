import { Flame } from 'lucide-react';

interface StreakCounterProps {
  days: number;
}

export function StreakCounter({ days }: StreakCounterProps) {
  const isActive = days > 0;
  return (
    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-semibold ${
      isActive ? 'text-orange-600 bg-orange-50' : 'text-muted-foreground bg-muted'
    }`}>
      <Flame size={16} className={isActive ? 'text-orange-500' : 'text-muted-foreground'} />
      <span>{days}</span>
    </div>
  );
}
