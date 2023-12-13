export default function Description({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`description-field ${className}`}>{children}</div>
}
