'use client'
import React from 'react';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import CountdownTimer from '@/components/Timer';




const FlappyBird: React.FC = () => {
  const router = useRouter();


  useEffect(() => {
    // Set a timeout to redirect after 30 seconds (30000 milliseconds)
    const timer = setTimeout(() => {
      router.push('/reading_task/results2'); // Redirect to the new path
    }, 30000);

    // Cleanup function to clear the timeout if the component unmounts before 30 seconds
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className="flex items-center justify-center h-screen">
          <div>            <CountdownTimer/>

    <div className="flex p-40items-center justify-center px-64 h-screen/2">
      <div className=" m p-12 rounded-2xl bg-white prounded-xl shadow-2xl flex items-center space-x-4">
        <div>
          <p className="text-lg font-medium text-black">
          BETHANY BEACH, DE—As movers unloaded a truck in front of the house next door, local dad Stan Morby, 43, expressed hoped Wednesday that his new neighbor liked verbal altercations. “Man, I really hope whoever bought that place enjoys getting into shouting matches in the front yard,” said Morby, noting how difficult it had been to convince the previous owner of the home to scream at the top of his lungs about property lines, not mowing the lawn, keeping an RV parked in the driveway, whether to remove a damaged tree, who should pay to repair the fence, and the incessant, inescapable sound of “those wind chimes.” “It’s been a long time since there’s been anyone around here who exchanges routine threats of violence from across the fence or who answers when I bang on their door at 3 a.m. to complain about a barking dog. Maybe I’ll do the neighborly thing and just go right over there and give that guy a piece of my mind.” At press time, Morby was reportedly even more excited after discovering his new neighbor preferred physical altercations.
</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default FlappyBird;
