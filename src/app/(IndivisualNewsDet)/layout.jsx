import React from 'react'
import Header from '@/app/(main)/Header'


const IndivisualNewsDetLayout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default IndivisualNewsDetLayout
