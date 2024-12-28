import { Sparkles } from 'lucide-react';

export function Title() {
  return (
    <div className="text-center">
      <Sparkles className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
      <h2 className="text-2xl font-bold text-gray-800">
        Désolé ton cadeau n'arrive pas ce soir...
      </h2>
    </div>
  );
}