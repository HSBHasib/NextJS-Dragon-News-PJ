import IndivisualNewsDets from '@/components/IndivisualNewsDets';
import React from 'react'

const IndivisualNewsDetsHead = async ({params}) => {
    const {id} = await params;
    console.log("IndivisualNewsDets page = ",id)
  return (
    <div>
      <IndivisualNewsDets/>
    </div>
  )
}

export default IndivisualNewsDetsHead

