import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Joonatan Karhu',
  description: 'Fullstack Developer Joonatan Karhu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
