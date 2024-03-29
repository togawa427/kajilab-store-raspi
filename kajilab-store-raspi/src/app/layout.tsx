import { MantineProvider } from '@mantine/core'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className="container mx-auto w-11/12 bg-yellow-200 text-slate-900">
      <MantineProvider>
        {children}
      </MantineProvider>
      </body>
    </html>
  )
}
