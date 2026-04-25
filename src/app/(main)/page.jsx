import LeftSide from "@/components/HomePage/LeftSide";
import { categoriesData } from "@/lib/DataFetch";


export default async function Home() {
  const categoryData = await categoriesData();

  return (
    <div className="w-3/4 mx-auto my-15">
      <div className="grid grid-cols-4 gap-4">
        {/* Left Side */}
        <div className="col-span-1">
          {/* <h1 className="text-[#403F3F] font-semibold mb-3">All Caterogy</h1>
            {
              categoryData.news_category.map(data => <LeftSide key={data.category_id} catData={data}  />)
            } */}
            <LeftSide categoryData={categoryData} isActive={null} />
        </div>

        {/* News Section */}
        <div className="col-span-2 bg-purple-400">
          <h1 className="text-[#403F3F] font-semibold mb-3">News Section</h1>
        </div>

        {/* Right Side */}
         <div className="col-span-1 bg-blue-500">
         <h1 className="text-[#403F3F] font-semibold mb-3">Right Side</h1>
        </div>
      </div>
    </div>
  );
}



