import Link from 'next/link'

export default function AdminAuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div id='admin-auth-layout'>
      <div id='admin-auth-card'>
        {children}
        <div id='auth-page-links'>
          <Link href='/admin/login'>Login</Link>
          <Link href='/admin/sign-up'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
