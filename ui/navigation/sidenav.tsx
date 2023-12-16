import { MdLogout } from 'react-icons/md'
import NavLinks from './nav-links'
import Link from 'next/link'

export default function SideNav() {
  return (
    <div id='side-nav'>
      <div id='nav-links'>
        <NavLinks />
      </div>
      <Link href='/logout' id='logout-button'>
        <MdLogout size={18} />
        <span>Logout</span>
      </Link>
    </div>
  )
}
