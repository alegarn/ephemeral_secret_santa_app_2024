import { useRef, useEffect, useState } from 'react';
import { LoadingState } from './LoadingState';
import { NextButton } from './NextButton';
import { VIDEO_URL, ERROR_TIMEOUT } from './constants';

interface VideoSectionProps {
  onVideoEnd: () => void;
}

export function VideoSection({ onVideoEnd }: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleCanPlay = () => {
        setIsLoading(false);
        video.play().catch(() => setError(true));
      };

      const handleError = () => setError(true);

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(onVideoEnd, ERROR_TIMEOUT);
      return () => clearTimeout(timer);
    }
  }, [error, onVideoEnd]);

  if (error || isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <LoadingState />
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        onEnded={onVideoEnd}
        className="w-full h-full object-cover"
        playsInline
        muted
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <NextButton onClick={onVideoEnd} />
    </div>
  );
}