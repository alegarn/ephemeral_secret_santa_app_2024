import React, { useState } from 'react';

interface Panel {
  id: number;
  text: string;
  bgImage: string;
}

const panels: Panel[] = [
  {
    id: 1,
    text: "Attaque l'armée du Mordor",
    bgImage: "src/images/aragorn-army.png"
  },
  {
    id: 2,
    text: "Cure toi le nez \\(-.-)/",
    bgImage: "src/images/aragorn_picking_nose.png"
  },
  {
    id: 3,
    text: "Joue aux Mikado",
    bgImage: "src/images/aragorn_mikado.png"
  }
];

export function FinalSection() {
  const [expandedPanel, setExpandedPanel] = useState<number | null>(null);

  return (
    <div className="h-screen w-full flex flex-col">
      {panels.map((panel) => (
        <div
          key={panel.id}
          onClick={() => setExpandedPanel(panel.id)}
          className={`flex-1 transition-all duration-500 flex items-center justify-center cursor-pointer
            ${expandedPanel === panel.id ? 'flex-grow-[3]' : 'flex-grow-1'}
            ${expandedPanel === panel.id ? 'bg-cover bg-center' : 'bg-gray-100 hover:bg-gray-200'}`}
          style={expandedPanel === panel.id ? {
            backgroundImage: `url(${panel.bgImage})`
          } : undefined}
        >
          {expandedPanel !== panel.id && (
            <p className="text-xl font-bold text-gray-800">
              {panel.text}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}