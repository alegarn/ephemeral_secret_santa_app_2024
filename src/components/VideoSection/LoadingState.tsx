import React from 'react';

export function LoadingState() {
  return (
    <div className="text-white text-center">
      <p className="mb-4">Loading your surprise...</p>
      <div className="animate-spin h-8 w-8 border-4 border-white border-t-transparent rounded-full mx-auto" />
    </div>
  );
}