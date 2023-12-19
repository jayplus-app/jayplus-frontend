'use client'
import { logout } from 'lib/data/auth'
import { MdLogout } from 'react-icons/md'

export default function LogoutButton() {
  const handleLogout = () => {
    logout('/login').catch(error => {
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
