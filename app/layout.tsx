import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/layout/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrii Sych',
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
        <Header />
        <main>
          <div className="flex max-w-6xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
