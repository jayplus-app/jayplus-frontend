'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdSchedule, MdAddBusiness } from 'react-icons/md'

export default function NavLinks() {
  const pathname = usePathname()

  const links = [
    {
      name: 'Booking Management',
      href: '/admin/booking-management',
      icon: MdSchedule,
    },
    {
      name: 'Add Booking',
      href: '/admin/add-booking',
      icon: MdAddBusiness,
    },
  ]

  return (
    <>
      {links.map(link => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
          >
            <LinkIcon size={18} />
            <span>{link.name}</span>
          </Link>
        )
      })}
    </>
  )
}
