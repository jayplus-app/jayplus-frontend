export function InvoiceTable({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <table className={`invoice-table ${className}`}>
      <tbody>{children}</tbody>
    </table>
  )
}

export function InvoiceTR({ children }: { children: React.ReactNode }) {
  return <tr>{children}</tr>
}

export function InvoiceTD({ children }: { children: React.ReactNode }) {
  return <td>{children}</td>
}
