import { categoryWiseData } from '@/lib/DataFetch';
import React from 'react'

const categoryPage = async ({params}) => {
  const {id} = await params;
  const catData = await categoryWiseData(id);
  console.log('Category is = ', catData);
  
  return (
    <div>
      <h1>Hi, I am details page</h1>
    </div>
  )
}

export default categoryPage
