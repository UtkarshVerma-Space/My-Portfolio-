"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/BottomNav/nav'

import NextTopLoader from 'nextjs-toploader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Utkarsh Verma',
  description: 'Generated With Machine, Carved With Love and Code',
} 

export default function RootLayout({ children}) {


   
  return (

<>
    


    <html lang="en">

      <body className={inter.className}>
      <NextTopLoader
      
      // color='red'
      // height={4}
      />
        {children}
      {/*Nav Bar On Bottom  */}
      <Nav/>
      </body>
    </html>
</>
  )
}
