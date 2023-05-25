'use client'

import './globals.css'
import { Inter } from 'next/font/google'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Brotherhood | Home',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionContextProvider 
          supabaseClient={supabase} 
          initialSession={children.initialSession}
        >
          <Header />
          <main>
            {children}
            <Sidebar />
          </main> 
        </SessionContextProvider>
        
      </body>
    </html>
  )
}
