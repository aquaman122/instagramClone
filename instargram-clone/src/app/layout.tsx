import './globals.css'
import { Inter } from 'next/font/google'
import Login from './login/page';
import Left from './conponent/Left'
import MainPage from './mainpage/page';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
