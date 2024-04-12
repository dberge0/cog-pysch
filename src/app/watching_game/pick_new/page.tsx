'use client'
import React from 'react';
import { useRouter } from 'next/navigation'

const InstructionsPage: React.FC = () => {
    const router = useRouter();
  
    // Function to handle navigation
    const redirectToPage = () => {
      router.push('/reading_task/task2'); // Replace '/target-page' with your desired path
    };
    const redirectToHome = () => {
      router.push('/'); // Replace '/target-page' with your desired path
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-xl p-4 bg-white shadow-md rounded-lg">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900 pb-4">Instructions</h2>
            <p className="text-gray-600 leading-7 pb-4">
            Get ready to perform your second trial of watching a game. This time, perform the secondary task that you did not just perform (as a reminder, the two secondary tasks are bouncing the ball that you see on the target in front of you or repeatedly handwriting “My name is ___” as neatly as possible on the sheet of paper in front of you.





</p>
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
  