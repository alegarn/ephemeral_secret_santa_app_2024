import { Gift } from 'lucide-react';

interface GiftSectionProps {
  onGiftClick: () => void;
}

export function GiftSection({ onGiftClick }: GiftSectionProps) {
  return (
    <div 
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&q=80")'
      }}
    >
      <button
        onClick={onGiftClick}
        className="animate-[wobble_1s_ease-in-out_infinite] p-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
      >
        <Gift size={48} className="text-white" />
      </button>
    </div>
  );
}