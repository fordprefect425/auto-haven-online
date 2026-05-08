import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  value: number; // 0–100
  label?: string;
  color?: 'saffron' | 'teal';
  showPercent?: boolean;
  className?: string;
}

export function ProgressBar({ value, label, color = 'saffron', showPercent = true, className = '' }: ProgressBarProps) {
  const clampedValue = Math.max(0, Math.min(100, value));
  return (
    <div className={`space-y-1 ${className}`}>
      {(label || showPercent) && (
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          {label && <span>{label}</span>}
          {showPercent && <span>{clampedValue}%</span>}
        </div>
      )}
      <Progress
        value={clampedValue}
        className={`h-2 ${color === 'teal' ? '[&>div]:bg-teal-500' : '[&>div]:bg-saffron-500'}`}
      />
    </div>
  );
}
