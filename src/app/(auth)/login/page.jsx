'use client'

import React, { useState } from "react";
import {Eye, EyeSlash} from "@gravity-ui/icons";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { error } from "better-auth/api";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { register, handleSubmit, formState: { errors } }= useForm(); 
  
    const formHandaler = async (data) => {
      console.log(data);
      const { email, password } = data;
  
      const { data: dets, error } = await authClient.signUp.email({
        name: name,
        email: email,
        password: password,
        callbackURL: '/login',
      });
  
      console.log("Data is = ",dets);
      console.log("Error is = ", error);
    }

  return (
    <div className="flex justify-center ">
      <div className="bg-white h-[70vh] px-16 mt-10 shadow-xs rounded-xs text-[#403F3F] flex flex-col justify-center">
        <div className="px-10">
          <h1 className="text-2xl font-semibold mb-7">Login your account</h1>
        </div>

        <hr className="text-gray-200 shadow mb-5" />

        <form className="px-2 space-y-2" action="#" onSubmit={handleSubmit(formHandaler)}>

          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Email</legend>
            <input 
              type="email" 
              className="input bg-[#F3F3F3]" 
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email field is required"
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          {/* Password */}
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-sm">Password</legend>
            <input 
              type={isVisible ? "text" : "password"} 
              className="input bg-[#F3F3F3]" 
              placeholder="Enter your password"
              {...register("password", {
                required: "Password field is required"
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <button className="absolute top-4 right-3" type="button" onClick={() => setIsVisible(!isVisible)}>
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
