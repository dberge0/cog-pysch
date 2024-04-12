'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter(); // Step 2

  const handleRedirect = (url: string): React.MouseEventHandler<HTMLButtonElement> => {
    return () => { // Return a function that calls `router.push` with the `url`
      router.push(url);
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-2xl font-bold text-gray-800 pb-8">
        Welcome to our EPIC experiment!!
      </header>
      <p className="mb-4 text-gray-600 pb-24">
        Please select one of the visual tasks below to begin!!!!!
      </p>
      <div className="flex gap-4">
        <button onClick={handleRedirect('/watching_game')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition ease-in duration-200">
          Watching Game
        </button>
        <button onClick={handleRedirect('/playing_game')}className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition ease-in duration-200">
        Playing Game
        </button>
        <button onClick={handleRedirect('/reading_task')} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition ease-in duration-200">
          Reading Task
        </button>
      </div>
    </div>
  );
}