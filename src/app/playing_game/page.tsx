'use client'
import React from 'react';
import { useRouter } from 'next/navigation'

const InstructionsPage: React.FC = () => {
    const router = useRouter();
  
    // Function to handle navigation
    const redirectToPage = () => {
      router.push('/playing_game/task'); // Replace '/target-page' with your desired path
    };
    const redirectToHome = () => {
      router.push('/'); // Replace '/target-page' with your desired path
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-xl p-4 px-8 pt-4 bg-white shadow-md rounded-lg">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900 pb-4">Instructions</h2>
            <p className="text-gray-600 leading-7 pb-4">
            In this experiment, you will participate in two trials. You have selected playing a game as your primary task, which you will perform in both trials. Once you select proceed, you will have a chance to play a game of Snake, capped at 30 seconds. Remember your final score! In each trial, you will also perform a secondary task. One secondary task is bouncing the ball that you see on the target in front of you. The other is repeatedly handwriting “My name is ___” , neatly within the lines on the sheet of paper in front of you. Please choose your first secondary task, which you will start as soon as you proceed to starting the primary task. You will perform the other secondary task in the second trial. You might want to consider before starting which hand you would like to devote to playing Snake and which you would like to devote to completing the secondary task.            </p>
          </div>
          <div className="px-44"> 
          <div className="pb-2">
          <button
            onClick={redirectToPage}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            Proceed
          </button>
          </div>
          <button
            onClick={redirectToHome}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            Back
          </button>
          
          </div>
        </div>
      </div>
    );
  };
  
  export default InstructionsPage;
  