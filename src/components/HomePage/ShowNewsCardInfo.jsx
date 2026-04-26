import React from "react";
import { FaRegEye, FaStar } from 'react-icons/fa';
import { IoShareSocialOutline} from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import Image from 'next/image';
import Link from 'next/link';


const ShowNewsCardInfo = ({data}) => {
  return (
    <div className="card bg-base-100 border border-gray-200 rounded-md mb-8 overflow-hidden">
      {/* Header: Author Info */}
      <div className="flex items-center justify-between p-3 bg-gray-100">
        <div className="flex items-center gap-3">
          {/* Static Profile Image */}
          <Image
            className="rounded-full"
            src={data.author.img}
            alt="NewsRepoterImg"
            width={40}
            height={40}
          />
          <div>
            <p className="font-semibold text-[#403F3F] text-sm">
              {data.author.name}
            </p>
            <p className="text-gray-500 text-xs">
              {data.author.published_date}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-gray-500 text-lg cursor-pointer">
          <CiBookmark size={19} />
          <IoShareSocialOutline size={20} />
        </div>
      </div>

      {/* Body: Title & Image */}
      <div className="px-4 py-4">
        <h2 className="text-xl font-bold text-[#403F3F] mb-4 leading-relaxed">
          {data.title}
        </h2>

        {/*News Image */}
        <Image
          className="w-full h-full object-cover"
          src={data.image_url}
          alt="thumbnail_url"
          width={80}
          height={80}
        />

        <p className="text-[#706F6F] text-sm leading-6 mt-6  line-clamp-4">
          {data.details}
        </p>
        <Link href="/">
          <button className="text-[#FF8C47] font-semibold text-sm mt-2 hover:underline">
            Read More
          </button>
        </Link>
      </div>

      <hr className="mx-4 border-gray-200" />

      {/* Footer: Rating & Views */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="flex text-orange-400 gap-1">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
          <span className="text-[#706F6F] font-medium text-sm">
            {data.rating.number}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#706F6F]">
          <FaRegEye className="text-lg" />
          <span className="text-sm font-medium">499</span>
        </div>
      </div>
    </div>
  );
};

export default ShowNewsCardInfo;
