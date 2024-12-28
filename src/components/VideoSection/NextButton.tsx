import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NextButtonProps {
  onClick: () => void;
}

export function NextButton({ onClick }: NextButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all"
    >
      Next <ArrowRight size={20} />
    </button>
  );
}