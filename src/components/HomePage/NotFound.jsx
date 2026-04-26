import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[400px] p-10 bg-white border border-dashed border-gray-300 rounded-xl shadow-sm">
            {/* Visual Icon/Illustration Container */}
            <div className="bg-gray-50 p-6 rounded-full mb-4">
                <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
            </div>

            {/* Text Message */}
            <h2 className="text-2xl font-bold text-[#403F3F]">No News Available!</h2>
            <p className="text-[#706F6F] text-center max-w-sm mt-2 mb-4 text-[14px]">
                Sorry, we couldn't find any news in this category right now. Please try checking another category or come back later.
            </p>

            {/* Action Button */}
            <Link href={`/category/01`} className="text-[14px] px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors shadow-sm active:scale-95">
                Back to Home
            </Link>
        </div>
    </div>
  )
}

export default NotFound
