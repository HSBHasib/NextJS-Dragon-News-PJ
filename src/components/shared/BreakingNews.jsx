import { newsTitle } from '@/lib/DataFetch';
import React from 'react'
import Marquee from "react-fast-marquee";


const BreakingNews = async () => {
  const newsData = await newsTitle();
  
  return (
    <div className='max-w-3/4 mx-auto flex px-2 py-4 bg-gray-50 rounded-xs my-6 shadow-xs'>
        <button className='border-none bg-[#D72050] px-4 py-1 rounded-xs text-white'>Latest</button>
      <Marquee pauseOnHover={true} speed={70}>
        {
          newsData.map(news => <p className='mr-20' key={news.id}>{news.title}</p>)
        }
       </Marquee>
    </div>
  )
}

export default BreakingNews
