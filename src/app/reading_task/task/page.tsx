'use client'
import React from 'react';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'



const FlappyBird: React.FC = () => {
  const router = useRouter();


  useEffect(() => {
    // Set a timeout to redirect after 30 seconds (30000 milliseconds)
    const timer = setTimeout(() => {
    //   router.push('/'); // Redirect to the new path
    }, 30000);

    // Cleanup function to clear the timeout if the component unmounts before 30 seconds
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className="flex items-center justify-center h-screen bg-white">
    <div className="flex p-40    items-center justify-center h-screen">
      <div className=" m p-12 rounded-2xl bg-white prounded-xl shadow-2xl flex items-center space-x-4">
        <div>
          <p className="text-lg font-medium text-black">
          PLANTATION, FL—Despite being a grown-ass adult in the year 2024, local resident Stu Jeffries told reporters Tuesday that he still thinks of a computer virus as a cartoon worm that bites through your screen. “I still imagine getting a computer virus by opening a program and clicking on some kind of neon egg, at which point an evil pixelated worm with big, sharp teeth pops out and slowly inches across the screen,” said the otherwise intelligent, college-educated man, who then added that while the worm might look cute at first, it would then turn red, make some sort of cackling noise, and rapidly devour ones and zeroes as it said “nom nom nom” and creepy cybernetic music played. “Technology has progressed a lot over the last few decades, but I can only ever see my computer being infiltrated by a series of two-dimensional monsters, bugs, or gremlins wearing sunglasses and doing a little dance as they pull cartoon wires out from my hard drive. And then, as I sit there helplessly, they chew a hole in my screen, say ‘sayonara, sucker’ and make my computer spark, smoke, and then explode.” Jeffries added that it made sense why he was constantly getting hacked, as he still thought the only way to protect his computer was to upload his consciousness to his computer via floppy disk and personally kill the worm.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FlappyBird;
