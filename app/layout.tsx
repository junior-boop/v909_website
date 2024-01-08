import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'


export const poppins = Poppins({
  weight: ['200', '400', '700', '900'],
  display: 'swap',
  variable: '--font-poppins',
  fallback: ['Helvetica', 'sans-serif'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
