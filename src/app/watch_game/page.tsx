'use client'
import React from 'react';
import { useRouter } from 'next/navigation'

const InstructionsPage: React.FC = () => {
    const router = useRouter();
  
    // Function to handle navigation
    const redirectToPage = () => {
      router.push('/watch_game/task'); // Replace '/target-page' with your desired path
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-xl p-4 bg-white shadow-md rounded-lg">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Instructions</h2>
            <p className="text-gray-600">
              Here are some instructions for you. Read them carefully before proceeding.
            </p>
          </div>
          <button
            onClick={redirectToPage}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            Proceed
          </button>
        </div>
      </div>
    );
  };
  
  export default InstructionsPage;
  