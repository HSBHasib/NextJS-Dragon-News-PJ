import RightSide from '@/components/HomePage/RightSide';
import IndivisualNewsDets from '@/components/IndivisualNewsPage/IndivisualNewsDets';
import React from 'react'

const IndivisualNewsDetsHead = async ({params}) => {
    const {id} = await params;
    console.log("IndivisualNewsDets page = ",id)
  return (        
    <div className='w-4/5 mx-auto my-12 grid grid-cols-5  '>
      <div className='col-span-4'>
        <IndivisualNewsDets/>
      </div>
     <div>
        <RightSide className='col-span-1' />
      </div>
    </div>
    
  )
}

export default IndivisualNewsDetsHead

