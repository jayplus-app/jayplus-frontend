import Link from 'next/link'

export default function AdminAuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div id='admin-auth-layout'>
      <div id='admin-auth-card'>{children}</div>
    </div>
  )
}
