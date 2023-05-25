'use client';

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from './components/Account';
import { useState } from 'react';

export default function Home() {

  const session = useSession()
  const supabase = useSupabaseClient()
  const [clicked, setClicked] = useState(false);

  return (
    // <div className="home">
    //   <h1>Welcome to the Brotherhood</h1>
    //   <button>Join the Brotherhood</button>
    // </div>
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <div className='auth-container'>
          <h1>Welcome to the Brotherhood</h1>
          <button 
            onClick={() => clicked ? setClicked(false) : setClicked(true)}
            className={clicked ? "join-btn-clicked" : "join-btn"}
          >Join</button>

          {clicked && (
            <Auth 
              supabaseClient={supabase} 
              appearance={{ theme: ThemeSupa }} 
              theme="default" 
              providers={["google", "apple"]}
            />
          )}
          
        </div>
        
      ) : (
        <Account session={session}/>
      )}
    </div>
  )
}
