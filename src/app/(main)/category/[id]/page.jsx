import LeftSide from "@/components/HomePage/LeftSide";
import NewsCards from "@/components/HomePage/NewsCards";
import RightSide from "@/components/HomePage/RightSide";
import { categoriesData, categoryWiseData } from "@/lib/DataFetch";
import React from 'react'

export const metadata = {
  title: "Dragon News - All News Category",
  description: "Best news portal in bangladesh",
};

const categoryPage = async ({params}) => {
  const {id} = await params;

  const categoryData = await categoriesData();
  const catData = await categoryWiseData(id);

  return (
    <div className="w-3/4 mx-auto my-15">
      <div className="grid grid-cols-4 gap-4">
        {/* Left Side */}
        <div className="col-span-1">
            <LeftSide categoryData={categoryData} isActive={id} />
        </div>

        {/* News Section */}
        <div className="col-span-2">
          <NewsCards catData={catData} />
        </div>

        {/* Right Side */}
         <div className="col-span-1">
         <RightSide/>
        </div>
      </div>
    </div>
  )
}

export default categoryPage

