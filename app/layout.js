import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/BottomNav/nav'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Utkarsh Verma',
  description: 'Generated With Machine, Carved With Love and Code',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      {/*Nav Bar On Bottom  */}
      <Nav/>
      </body>
    </html>
  )
}
