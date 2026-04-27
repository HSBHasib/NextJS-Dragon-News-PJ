'use client'

import React, { useState } from "react";
import {Eye, EyeSlash} from "@gravity-ui/icons";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
   const [isVisible, setIsVisible] = useState(false);

  const { register, handleSubmit } = useForm(); 

  const formHandaler = async (data) => {
    console.log(data);
    const { name, email, password, phtotUrl } = data;

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
    <div className="h-screen flex justify-center bg-[#F3F3F3] pb-10">
      <div className="bg-white h-full px-15 shadow-xs rounded-xs text-[#403F3F] flex flex-col justify-center ">
        <div className="px-10">
          <h1 className="text-2xl font-semibold mb-7">Register your account</h1>
        </div>

        <hr className="text-gray-200 shadow mb-5" />

        <form className="px-2 space-y-2" action="#" onSubmit={handleSubmit(formHandaler)} >
          {/* Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Your Name</legend>
            <input 
              type="text" 
              className="input bg-[#F3F3F3]" 
              placeholder="Enter your name"
              {...register("name")} 
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Photo URL</legend>
            <input 
              type="text" 
              className="input bg-[#F3F3F3]" 
              placeholder="Enter your photo url"
              {...register("phtotUrl")}
             />
          </fieldset>

          <fieldset className="fieldset">

            <legend className="fieldset-legend text-sm">Email</legend>
            <input 
              type="email" 
              className="input bg-[#F3F3F3]" 
              placeholder="Enter your email address"
              {...register("email")}
            />
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-sm">Password</legend>
            <input  
              type={isVisible ? "text" : "password"} 
              className="input bg-[#F3F3F3]" 
              placeholder="Enter your password"
              {...register("password")}
             />
            <button className="absolute top-4 right-7" type="button" onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
            </button>
          </fieldset>

          <div className="flex items-center gap-2 pb-5">
            <input type="checkbox" required/>
            <span className="text-xs">Accept Term & Conditions</span>
          </div>
            
          <button type="submit" className="btn w-full bg-[#403F3F] text-white">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
