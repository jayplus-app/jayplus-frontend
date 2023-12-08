import type { Metadata } from 'next'
import '../globals.css'
import { StyleProvider } from 'context/style-context/StyleContext'

export const metadata: Metadata = {
  title: 'JayPlus Customer App',
  description: 'Some Description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StyleProvider>
      <html lang='en'>
        <body>
          <nav>This is customer app of frontend</nav>
          {children}
        </body>
      </html>
    </StyleProvider>
  )
}
