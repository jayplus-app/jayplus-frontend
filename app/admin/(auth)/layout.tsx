import Link from 'next/link'

export default function AdminAuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
        <div>
          <Link href='/admin/login'>Login</Link>
          <Link href='/admin/sign-up'>Sign Up</Link>
        </div>
      </body>
    </html>
  )
}
