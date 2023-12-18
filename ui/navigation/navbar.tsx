import { MdLogout } from 'react-icons/md'
import NavLinks from './nav-links'
import { logout } from 'lib/data/auth'

export default async function Navbar() {
  const handleLogout = logout.bind(null, '/login')

  return (
    <div id='side-nav'>
      <div id='nav-links'>
        <NavLinks />
      </div>
      <form id='logout-form' action={handleLogout}>
        <button id='logout-button' type='submit'>
          <MdLogout size={18} />
          <span>Logout</span>
        </button>
      </form>
    </div>
  )
}
