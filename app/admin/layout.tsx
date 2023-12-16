import type { Metadata } from 'next'

import '../globals.css'
import SideNav from 'ui/navigation/sidenav'

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
          <SideNav />
        </div>
        <div id='content'>{children}</div>
      </body>
    </html>
  )
}
