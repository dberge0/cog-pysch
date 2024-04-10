'use client'
import React, { useEffect, useRef } from 'react';

const VideoPage: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt to play audio when the component mounts
    audioRef.current?.play().catch((error) => console.error("Audio playback failed:", error));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <video
        src="/subway.MOV"
        controls
        autoPlay
        loop
        className="w-full h-auto max-w-4xl max-h-full"
        // Note: Setting 'muted' helps with autoplay in some browsers
      ></video>
      <audio
        ref={audioRef}
        src="/audio.mp3"
        autoPlay
        loop
        // You might not want to show controls for the background audio
        // controls
      ></audio>
    </div>
  );
};

export default VideoPage;
