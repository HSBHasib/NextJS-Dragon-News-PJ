import React from 'react'

const LeftSide = ({categoryData, isActive}) => {
    // {catData}
    // const {category_name} = catData;
  return (
    // <div className='px-5 py-2.5 rounded-sm text-[#9F9F9F] font-medium'>
    //   <p>{category_name}</p>
    // </div>

    <div>
        <h1 className="text-[#403F3F] font-semibold mb-3">All Caterogy</h1>
        <ul className='list-none text-[#9F9F9F] font-medium'>    
        {
            categoryData.news_category.map(data => <li className={`${isActive === data.category_id && 'bg-gray-200 text-[#403F3F]'} px-6 py-2.5 rounded-sm`} key={data.category_id}>{data.category_name}</li>)
        }
        </ul>
    </div>
  )
}

export default LeftSide

