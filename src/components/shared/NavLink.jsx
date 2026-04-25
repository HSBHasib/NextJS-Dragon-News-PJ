'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({href, children, className}) => {
    // const pathname = usePathname;
    // console.log('pathname = ', pathname)
  return (
    <div>
      <Link href={href}>{children}</Link>
    </div>
  )
}

export default NavLink
