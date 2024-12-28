import { useEffect } from 'react';
import { ImageContainer } from './ImageContainer';
import { Title } from './Title';

interface GiftModalProps {
  onComplete: () => void;
}

export function GiftModal({ onComplete }: GiftModalProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div
        className="bg-white rounded-2xl p-6 max-w-lg mx-4 animate-[fadeIn_0.3s_ease-out]"
      >
        <ImageContainer />
        <Title />
      </div>
    </div>
  );
}