import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Type, RefreshCw, BarChart2 } from 'lucide-react';
import { useProgress } from '@/contexts/ProgressContext';

const navItems = [
  { to: '/', label: 'Home', Icon: Home },
  { to: '/learn/alphabets', label: 'Alphabets', Icon: BookOpen },
  { to: '/learn/words', label: 'Words', Icon: Type },
  { to: '/review', label: 'Review', Icon: RefreshCw },
  { to: '/progress', label: 'Progress', Icon: BarChart2 },
];

export function BottomNav() {
  const { getDueLetterIds } = useProgress();
  const dueCount = getDueLetterIds().length;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 bg-background/95 backdrop-blur border-t border-border pb-safe">
      <div className="flex">
        {navItems.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center py-2 gap-0.5 text-[10px] font-medium transition-colors ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            <div className="relative">
              <Icon size={22} />
              {label === 'Review' && dueCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {dueCount > 9 ? '9+' : dueCount}
                </span>
              )}
            </div>
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
