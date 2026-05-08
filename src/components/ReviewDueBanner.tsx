import { RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ReviewDueBannerProps {
  dueCount: number;
}

export function ReviewDueBanner({ dueCount }: ReviewDueBannerProps) {
  const navigate = useNavigate();
  if (dueCount === 0) return null;

  return (
    <div className="mx-4 mb-4 p-3 rounded-xl bg-teal-50 border border-teal-200 flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
        <RefreshCw size={18} className="text-teal-600" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-teal-800 text-sm">
          {dueCount} {dueCount === 1 ? 'letter' : 'letters'} due for review
        </p>
        <p className="text-teal-600 text-xs">Practice now to build memory</p>
      </div>
      <Button
        size="sm"
        onClick={() => navigate('/review')}
        className="bg-teal-500 hover:bg-teal-600 text-white shrink-0"
      >
        Review
      </Button>
    </div>
  );
}
