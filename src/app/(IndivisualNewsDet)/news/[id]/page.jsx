import RightSide from '@/components/HomePage/RightSide';
import IndivisualNewsDets from '@/components/IndivisualNewsPage/IndivisualNewsDets';
import { indivisualNewData } from '@/lib/DataFetch';
import React from 'react'

// export const metadata = {
//   title: "Dragon News - News Details",
  
// };

export const generateMetadata = async ({params}) => {
  const {id} = await params;
  const dets = await indivisualNewData(id);

  return {
    title: dets.title,
    description: dets.details
  }
}

const IndivisualNewsDetsHead = async ({params}) => {
    const {id} = await params;
    const dets = await indivisualNewData(id);

  return (        
    <div className='w-4/5 mx-auto my-12 grid grid-cols-5 gap-4'>
      <div className='col-span-4'>
        <IndivisualNewsDets data={dets}/>
      </div>
     <div>
        <RightSide className='col-span-1' />
      </div>
    </div>
    
  )
}

export default IndivisualNewsDetsHead

