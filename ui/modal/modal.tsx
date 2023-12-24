import { MdClose } from 'react-icons/md'

export default function Modal({
  isOpen,
  onClose,
  children,
  className,
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`modal ${className}`}>
      <div className='modal-layout'>
        <div className='modal-header'>
          <MdClose className='modal-close-button' size={25} onClick={onClose} />
        </div>
        <div className='modal-content'>{children}</div>
      </div>
    </div>
  )
}
