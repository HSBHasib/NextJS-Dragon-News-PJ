'use client'

import React, { useState } from "react";
import {Eye, EyeSlash} from "@gravity-ui/icons";
import Link from "next/link";

const LoginPage = () => {
   const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex justify-center ">
      <div className="bg-white h-[70vh] px-16 mt-10 shadow-xs rounded-xs text-[#403F3F] flex flex-col justify-center">
        <div className="px-10">
          <h1 className="text-2xl font-semibold mb-7">Login your account</h1>
        </div>

        <hr className="text-gray-200 shadow mb-5" />

        <form className="px-2 space-y-2" action="#">

          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Email</legend>
            <input type="email" className="input bg-[#F3F3F3]" placeholder="Enter your email address" />
          </fieldset>

          {/* Password */}
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-sm">Password</legend>
            <input  type={isVisible ? "text" : "password"} className="input bg-[#F3F3F3]" placeholder="Enter your password" />
            <button className="absolute top-4 right-7" type="button" onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
            </button>
          </fieldset>
            
          {/* Login Button */}
          <div className="pt-2">
            <button type="submit" className="btn w-full bg-[#403F3F] text-white">Login</button>
          </div>
        </form>

         {/* Register page option */}
          <div className="flex justify-center items-center gap-2 pt-5">
            
            <p className="text-[#706F6F] text-xs font-semibold">Dont’t Have An Account ? <Link href='/register'><span className="text-[#F8625C] cursor-pointer hover:underline">Register</span></Link></p>
          </div>
      </div>
    </div>
  );
};

export default LoginPage;
