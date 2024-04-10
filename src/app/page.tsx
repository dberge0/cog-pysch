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
      <header className="text-2xl font-bold text-gray-800">
        My Header
      </header>
      <p className="mb-4 text-gray-600">
        This is a paragraph tag underneath the header.
      </p>
      <div className="flex gap-4">
        <button onClick={handleRedirect('/playing_game')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition ease-in duration-200">
          Button 1
        </button>
        <button onClick={handleRedirect('/watch_game')}className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition ease-in duration-200">
          Button 2
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition ease-in duration-200">
          Button 3
        </button>
      </div>
    </div>
  );
}
