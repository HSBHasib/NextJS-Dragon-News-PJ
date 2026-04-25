import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Breadcrumbs } from '@heroui/react'
import BreakingNews from '@/components/shared/BreakingNews'

const MainLayout = ({children}) => {
  return (
    <div>
        <Header />
        <BreakingNews />
        <Navbar />
        {children}
    </div>
  )
}

export default MainLayout
