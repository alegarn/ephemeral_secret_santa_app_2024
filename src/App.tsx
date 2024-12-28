import React, { useState } from 'react';
import { GiftSection } from './components/GiftSection';
import { VideoSection } from './components/VideoSection';
import { Modal } from './components/Modal';
import { FinalSection } from './components/FinalSection';
import { GiftModal } from './components/GiftModal';

type Section = 'gift' | 'gift-modal' | 'video' | 'modal' | 'final';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>('gift');

  return (
    <div className="w-full h-screen overflow-hidden">
      {currentSection === 'gift' && (
        <GiftSection onGiftClick={() => setCurrentSection('gift-modal')} />
      )}
      {currentSection === 'gift-modal' && (
        <GiftModal onComplete={() => setCurrentSection('video')} />
      )}
      {currentSection === 'video' && (
        <VideoSection onVideoEnd={() => setCurrentSection('modal')} />
      )}
      {currentSection === 'modal' && (
        <Modal onConfirm={() => setCurrentSection('final')} />
      )}
      {currentSection === 'final' && (
        <FinalSection />
      )}
    </div>
  );
}