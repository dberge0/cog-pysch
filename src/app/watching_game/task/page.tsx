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
      router.push('/watching_game/results/'); // Redirect to the new path
    }, 30000);

    // Cleanup function to clear the timeout if the component unmounts before 30 seconds
    return () => clearTimeout(timer);
  }, []); 


  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <CountdownTimer/>
      <iframe
  width="1400"
  height="600"
  src="https://www.youtube.com/embed/V-Nk1sUmNAQ?autoplay=1&mute=1&enablejsapi=1&controls=1&showinfo=0&modestbranding=1&loop=1&playlist=V-Nk1sUmNAQ"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 >
</iframe>
    </div>
  );
};

export default VideoPage;
