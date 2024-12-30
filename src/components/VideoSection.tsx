import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import videoUrl from '/src/videos/Aragorn,_For_Frodo_But_He_is_Alone.mp4';

interface VideoSectionProps {
  onVideoEnd: () => void;
}

export function VideoSection({ onVideoEnd }: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
        } catch (err) {
          console.error('Video playback failed:', err);
          setError(true);
        }
      };
      playVideo();

    }
  }, []);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(onVideoEnd, 2000);
      return () => clearTimeout(timer);
    }
  }, [error, onVideoEnd]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black">
      {error ? (
        <div className="text-white text-center">
          <p className="mb-4">Loading your surprise...</p>
          <div className="animate-spin h-8 w-8 border-4 border-white border-t-transparent rounded-full mx-auto"></div>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            onEnded={onVideoEnd}
            className="w-full h-full object-cover"
            playsInline
          >
            <source 
              src={videoUrl}
              type="video/mp4"
            />
          </video>
          <button
            onClick={onVideoEnd}
            className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all"
          >
            Next <ArrowRight size={20} />
          </button>
        </>
      )}
    </div>
  );
}