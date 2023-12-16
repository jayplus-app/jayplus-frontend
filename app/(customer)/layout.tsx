import type { Metadata } from 'next'
import '../globals.css'
import { StyleProvider } from 'context/style-context/StyleContext'

export const metadata: Metadata = {
  title: 'JayPlus Booking App',
  description: 'The frontend for the JayPlus Customer App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StyleProvider>
      <html>
        <body id='customer'>{children}</body>
      </html>
    </StyleProvider>
  )
}
