'use client'

import { logout } from 'lib/data/auth'
import { MdLogout } from 'react-icons/md'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()
  const handleLogout = () => {
    logout()
      .then(() => {
        router.push('/login')
      })
      .catch(error => {
        alert(error)
      })
  }

  return (
    <button id='logout-button' onClick={handleLogout}>
      <MdLogout size={18} />
      <span>Logout</span>
    </button>
  )
}
