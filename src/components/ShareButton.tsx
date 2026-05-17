import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ShareButtonProps {
  text: string;
  url?: string;
  label?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'icon';
  className?: string;
}

export function ShareButton({
  text,
  url,
  label = 'Share',
  variant = 'outline',
  size = 'sm',
  className,
}: ShareButtonProps) {
  const shareUrl = url ?? (typeof window !== 'undefined' ? window.location.href : '');
  const fullText = `${text} ${shareUrl}`.trim();

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ text, url: shareUrl });
        return;
      } catch {
        // User cancelled or share failed — fall through to WhatsApp link
      }
    }
    const waUrl = `https://wa.me/?text=${encodeURIComponent(fullText)}`;
    window.open(waUrl, '_blank', 'noopener');
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleShare}
      className={className}
      aria-label="Share with a friend"
    >
      <Share2 size={size === 'icon' ? 18 : 14} />
      {size !== 'icon' && <span className="ml-1.5">{label}</span>}
    </Button>
  );
}
