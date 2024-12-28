import { Sparkles } from 'lucide-react';

interface ModalProps {
  onConfirm: () => void;
}

export function Modal({ onConfirm }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 animate-[fadeIn_0.3s_ease-out]">
        <div className="flex justify-center mb-6">
          <Sparkles className="w-12 h-12 text-yellow-500" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">
          Mais vient découvrir ce que tu pourras faire avec ton cadeau!
        </h2>
        <button
          onClick={onConfirm}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Ouiiii
        </button>
      </div>
    </div>
  );
}