import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-4 p-8">
      <p className="text-6xl">🤔</p>
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="text-muted-foreground text-center">That page doesn't exist. Let's get you back on track.</p>
      <Button onClick={() => navigate('/')} className="bg-saffron-500 hover:bg-saffron-600 text-white">
        Go Home
      </Button>
    </div>
  );
}
