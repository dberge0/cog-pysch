'use client'
import React from 'react';
import { useRouter } from 'next/navigation'

const InstructionsPage: React.FC = () => {
    const router = useRouter();
  
    // Function to handle navigation
    const redirectToPage = () => {
      router.push('/'); // Replace '/target-page' with your desired path
    };
    const redirectToHome = () => {
      router.push('/'); // Replace '/target-page' with your desired path
    };
  
    return (
        <div className="flex items-center justify-center h-screen bg-white">
    <div className="flex p-40    items-center justify-center h-screen">
      <div className=" m p-12 rounded-2xl bg-white prounded-xl shadow-2xl flex items-center space-x-4">
        <div>
          <p className="text-lg font-medium text-black pb-4">
                YOU DID SO WELL WE ARE SO PROUD\
          </p>
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
    </div>
    </div>
    );
  };
  
  export default InstructionsPage;
  