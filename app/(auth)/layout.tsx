import { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'JayPlus Auth App',
  description: 'Some Description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body id='auth'>
        <div id='auth-layout'>
          <div id='auth-card'>{children}</div>
        </div>
      </body>
    </html>
  )
}
