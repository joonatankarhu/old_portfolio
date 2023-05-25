import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import smoothscroll from 'smoothscroll-polyfill'

const inter = Inter({ subsets: ['latin'] })

// Call the polyfill function


export const metadata = {
  title: 'Joonatan Karhu',
  description: 'Portfolio, Fullstack Developer Joonatan Karhu',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  smoothscroll.polyfill()
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
