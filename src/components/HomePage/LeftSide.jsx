import Link from 'next/link'
import React from 'react'

const LeftSide = ({categoryData, isActive}) => {
  return (
    <div>
        <h1 className="text-[#403F3F] font-semibold mb-3">All Caterogy</h1>
        <ul className='list-none text-[#9F9F9F] font-medium'>    
        {
          categoryData.news_category.map(data => 

            <li className={`${isActive === data.category_id && 'bg-gray-200 text-[#403F3F]'} px-6 py-2.5 rounded-sm`} key={data.category_id}><Link className='block' href={`${data.category_id}`}>{data.category_name}</Link></li>)
            
        }
        </ul>
    </div>
  )
}

export default LeftSide

