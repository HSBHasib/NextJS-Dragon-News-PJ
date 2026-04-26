import RightSide from '@/components/HomePage/RightSide';
import IndivisualNewsDets from '@/components/IndivisualNewsPage/IndivisualNewsDets';
import { indivisualNewData } from '@/lib/DataFetch';
import React from 'react'

const IndivisualNewsDetsHead = async ({params}) => {
    const {id} = await params;
    const {data} = await indivisualNewData(id);

  return (        
    <div className='w-4/5 mx-auto my-12 grid grid-cols-5 gap-4'>
      <div className='col-span-4'>
        <IndivisualNewsDets data={data[0]}/>
      </div>
     <div>
        <RightSide className='col-span-1' />
      </div>
    </div>
    
  )
}

export default IndivisualNewsDetsHead

