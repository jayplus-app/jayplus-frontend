export default function CalendarColumnCellView({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick?: (datetime: string) => void
}) {
  return (
    <div className='calendar-column-cell-view' onClick={() => onClick}>
      {children}
    </div>
  )
}
