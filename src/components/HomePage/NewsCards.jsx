import React from 'react'
import NotFound from './NotFound';
import ShowNewsCardInfo from './ShowNewsCardInfo';

const NewsCards = ({catData}) => {
    console.log("CatData is = ",catData.data);
  return (
    <div>
        <h1 className="text-[#403F3F] font-semibold mb-3.25">Dragon News Home</h1>
        {
        catData.data.length > 0 ? catData.data.map((data, idx) => <ShowNewsCardInfo key={idx} data={data} /> ) : <NotFound />
        }

    </div>
  )
}

export default NewsCards