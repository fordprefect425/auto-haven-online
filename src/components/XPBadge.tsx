import { Star } from 'lucide-react';

interface XPBadgeProps {
  xp: number;
  size?: 'sm' | 'md';
}

export function XPBadge({ xp, size = 'sm' }: XPBadgeProps) {
  const formatted = xp >= 1000 ? `${(xp / 1000).toFixed(1)}k` : xp.toString();
  return (
    <div className={`flex items-center gap-1 rounded-full font-semibold bg-saffron-100 text-saffron-700 ${
      size === 'sm' ? 'px-2 py-1 text-sm' : 'px-3 py-1.5 text-base'
    }`}>
      <Star size={size === 'sm' ? 14 : 18} className="text-saffron-500 fill-saffron-500" />
      <span>{formatted} XP</span>
    </div>
  );
}
