import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

const MainLayout = ({children}) => {
  return (
    <div>
        <Header />
        <Navbar />
        {children}
    </div>
  )
}

export default MainLayout
