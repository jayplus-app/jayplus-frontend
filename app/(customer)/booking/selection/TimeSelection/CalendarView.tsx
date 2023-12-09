import Button from 'ui/button/button'

export default function CalendarView({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button>Prev Day</Button>
      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        {children}
      </div>
      <Button>Next Day</Button>
    </div>
  )
}
