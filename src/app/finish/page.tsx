'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

const InstructionsPage: React.FC = () => {
    const router = useRouter();
  
    // Function to handle navigation
    const redirectToPage = () => {
      router.push('/'); // Replace '/target-page' with your desired path
    };

    return (
        <div className="flex items-center justify-center h-screen bg-white">
    <div className="flex p-[25%] items-center justify-center h-screen">
      <div className=" m p-12  rounded-2xl bg-white prounded-xl shadow-2xl flex items-center space-x-4">
        <div>
          <p className="text-lg font-medium text-black pb-4 h-100vm leading-7">
            Created by: Andrew Fisher, Dan Bergen, Märten Tropp! <br/><br/>
            <b><u>Sources:</u></b><br/><br/>
            Sirhan, S. (2024, April 3). Dad hopes new neighbor likes verbal altercations. The Onion. https://www.theonion.com/dad-hopes-new-neighbor-likes-verbal-altercations-1851375067.

            <br/><br/>The Onion. (2024, April 9). Man still thinks of computer virus as cartoon worm that bites through screen. The Onion. https://www.theonion.com/man-still-thinks-of-computer-virus-as-cartoon-worm-that-1851392076.
        
            <br/><br/>
            Thanks for participating! Return home to try the other trials :)
            <div className='pt-8 flex items-center justify-center'>
            </div>
        </p>
          <div className="pb-5">
        </div>
          <div className="px-44"> 
          <div className="pb-2">
          <button
            onClick={redirectToPage}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            Return Home
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
  