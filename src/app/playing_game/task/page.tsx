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
      router.push('/playing_game/results/'); // Redirect to the new path
    }, 30000);

    // Cleanup function to clear the timeout if the component unmounts before 30 seconds
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className="flex items-center justify-center h-screen">
      <CountdownTimer/>
      <iframe className="" src="https://ext.minijuegosgratis.com/google-snake/game.html?mp_api_as3_url=https%3A%2F%2Fssl.minijuegosgratis.com%2Flechuck%2Fas3%2Flatest.swf&mp_api_as3_url_bck=https%3A%2F%2Fapi.minijuegos.com%2Flechuck%2Fclient-as%2F&mp_api_id=6220&mp_api_js_url=https%3A%2F%2Fssl.minijuegosgratis.com%2Flechuck%2Fjs%2Flatest.js&mp_api_js_url_bck=https%3A%2F%2Fapi.minijuegos.com%2Flechuck%2Fclient-js%2F&mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&mp_embed=0&mp_game_id=246309&mp_game_uid=google-snake&mp_game_url=https%3A%2F%2Fwww.miniplay.com%2Fembed%2Fgoogle-snake&mp_int=1&mp_locale=en_US&mp_player_type=IFRAME&mp_site_https_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_site_name=miniplay.com&mp_site_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_timezone=America%2FNew_York&mp_view_type=&mini_signature=83ab64f5dd92307c97f9450dad01c2e6&xdm_e=https%3A%2F%2Fwww.miniplay.com&xdm_c=default9605&xdm_p=1" width="800" height="600" ></iframe>

      {/* Overlay Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* More overlay content here */}
      </div>
    </div>
  );
};

export default FlappyBird;
