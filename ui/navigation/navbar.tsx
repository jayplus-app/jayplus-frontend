import NavLinks from './nav-links'
import LogoutButton from 'ui/button/logout-button'

export default async function Navbar() {
  return (
    <div id='side-nav'>
      <div id='nav-links'>
        <NavLinks />
      </div>
      <LogoutButton />
    </div>
  )
}
