import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const IndivisualNewsDets = ({data}) => {
  console.log("IndivisualNewsDets page = ", data.total_view);
  return (
    <div>
      <h1 className='text-[#403F3F] font-bold mb-2 '>Dragon News</h1>
         <div className="w-full border border-gray-200 rounded-md p-6 bg-white">
             {/* News Thumbnail Image */}
             <div className="w-full h-[400px] mb-16">
                 <Image
                     src={data.image_url}
                     alt='thumbail-img'
                     width={200}
                     height={200}
                     className="object-cover rounded-md w-full"
                 />
             </div>
             {/* News Title */}
             <h2 className="text-2xl font-bold text-[#403F3F] mb-3 leading-tight">
                 {data.title}
             </h2>
             {/* Full News Details */}
             <p className="text-[#706F6F] text-sm leading-7 mb-8 text-justify">
                 {data.details}
             </p>
             {/* Back Button - All news in this category */}
             <Link href={`/category/${data.category_id}`}>
                 <button className="bg-[#D72050] hover:bg-[#b01a42] text-white flex items-center gap-2 px-6 py-2.5 rounded-sm font-medium transition-all">
                     <FaArrowLeft /> All news in this category
                 </button>
             </Link>
         </div>
    </div>
  )
}

export default IndivisualNewsDets


        
