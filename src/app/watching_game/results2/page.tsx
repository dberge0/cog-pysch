'use client'
import React from 'react';
import { useRouter } from 'next/navigation'

const InstructionsPage: React.FC = () => {
    const router = useRouter();
  
    // Function to handle navigation
    const redirectToPage = () => {
      router.push('/reading_task/final_results'); // Replace '/target-page' with your desired path
    };

    return (
        <div className="flex items-center justify-center h-screen bg-white">
    <div className="flex p-40    items-center justify-center h-screen">
      <div className=" m p-12 rounded-2xl bg-white prounded-xl shadow-2xl flex items-center space-x-4">
        <div>
          <p className="text-lg font-medium text-black leading-7 pb-4">
              Input the number of powerups did the player collect and click proceed to view your results.
          </p>
          <div className="pb-5">
          <input
          type="text"
          id="userInput"
          name="userInput"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Type something here..."
        />
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
          
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  };
  
  export default InstructionsPage;
  