export default function CalendarView({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
      }}
    >
      {children}
    </div>
  )
}
