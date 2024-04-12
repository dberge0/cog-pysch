'use client'
import React, {useRef } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import CountdownTimer from '@/components/Timer';

const VideoPage: React.FC = () => {


  const router = useRouter();


  useEffect(() => {
    // Set a timeout to redirect after 30 seconds (30000 milliseconds)
    const timer = setTimeout(() => {
      router.push('/watching_game/results2/'); // Redirect to the new path
    }, 30000);

    // Cleanup function to clear the timeout if the component unmounts before 30 seconds
    return () => clearTimeout(timer);
  }, []); 


  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <CountdownTimer/>
      <video
        src="/subway.MOV"
        controls
        autoPlay
        loop
        className="w-full h-auto max-w-4xl max-h-full"
        // Note: Setting 'muted' helps with autoplay in some browsers
      ></video>
      <audio
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
