import React from 'react'
import { FaGoogle, FaGithub } from "react-icons/fa";
import fb from '@/assets/fb.png'
import insta from '@/assets/instagram.png'
import twi from '@/assets/twitter.png'
import swim from '@/assets/swimming.png'
import clas from '@/assets/class.png'
import playG from '@/assets/playground.png'
import bg from '@/assets/bg.png'
import Image from 'next/image';


const RightSide = () => {
  return (
    <div>
      <h1 className="text-[#403F3F] font-bold mb-3">Login With</h1>
      <div className='space-y-8'>
        {/* Login With Social Media Accounts */}
        <div className='space-y-2'>
            <p className='flex justify-center items-center gap-1.5 text-[12px] py-1 font-medium border-[1.5px] text-blue-500 rounded-sm'><FaGoogle />  Login with Google</p>
            <p className='flex justify-center items-center gap-1.5 text-[12px] py-1 font-medium border-[1.5px] rounded-sm'><FaGithub /> Login with Github</p>
        </div>

        <div>
            <h1 className="text-[#403F3F] font-semibold mb-3">Find Us On</h1>
            <div className='space-y-5'>
                {/* Social Media Accounts */}
                <div className='border border-gray-300 rounded-md '>
                    <div className='flex items-center gap-2 border-b border-gray-300 px-3 py-3'>
                        <Image className='object-contain' src={fb} alt='fbIcon' width={8} height={8} />
                        <p className='text-[14px] text-[#706F6F] font-medium'>Facebook</p>
                    </div>
                    <div className='flex items-center gap-2 border-b border-gray-300 px-3 py-3'>
                        <Image className='object-contain' src={insta} alt='twiIcon' width={14} height={14} />
                        <p className='text-[14px] text-[#706F6F] font-medium'>Twitter</p>
                    </div>
                    <div className='flex items-center gap-2 px-3 py-3'>
                        <Image className='object-contain' src={twi} alt='instaIcon' width={14} height={14} />                
                        <p className='text-[14px] text-[#706F6F] font-medium'>Instagram</p>
                    </div>
                </div>

                {/* Images */}
                <div className='bg-gray-100 p-2 space-y-4'>
                    <h1 className="text-[#403F3F] font-semibold mb-3">Q-Zone</h1>
                    <Image className='w-full' src={swim} alt='swimmingImg' width={80} height={80} />
                    <Image className='w-full' src={clas} alt='classImg' width={80} height={80} />
                    <Image className='w-full' src={playG} alt='playgroundImg' width={80} height={80} />
                </div>
                <div>
                    <Image className='w-full h-full' src={bg} alt='bgImg' width={80} height={80} />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightSide
