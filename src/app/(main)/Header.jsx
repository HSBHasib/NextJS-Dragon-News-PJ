import { format, compareAsc } from "date-fns";
import React from 'react'
import headerLogo from '@/assets/logo.png'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='text-center space-y-1.5 mt-10'>
      <Image 
        src={headerLogo}
        alt='headerLogo'
        width={350}
        height={350}
        className='mx-auto'
      />
      <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
      <p className="text-[#706F6F] font-semibold">{format(new Date(), 'EEEE, MMMM do, yyyy')}</p>
    </div>
  )
}

export default Header
