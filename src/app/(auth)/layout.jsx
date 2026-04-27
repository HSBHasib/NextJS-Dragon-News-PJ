import React from 'react'
import Navbar from '../(main)/Navbar'

const AuthLayout = ({children}) => {
  return (
    <div className='h-screen py-6 bg-[#F3F3F3]'>
      <Navbar/>
      {children}
    </div>
  )
}

export default AuthLayout
