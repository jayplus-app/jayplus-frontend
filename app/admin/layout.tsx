import type { Metadata } from 'next'

import '../globals.css'
import Navbar from 'ui/navigation/navbar'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'JayPlus Admin App',
  description: 'The frontend for the JayPlus Admin App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body id='admin'>
        <div id='navbar'>
          <Navbar />
        </div>
        <div id='content'>{children}</div>
      </body>
    </html>
  )
}
