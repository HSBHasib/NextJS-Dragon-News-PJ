'use client'

import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    const isActive = href === pathname;
  return (
    <div>
      <Link className={`${isActive && 'border-b-2 border-purple-500'}`} href={href}>{children}</Link>
    </div>
  )
}

export default NavLink

