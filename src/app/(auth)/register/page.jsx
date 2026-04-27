"use client";

import React, { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { Erica_One } from "next/font/google";
import { Bounce, toast } from "react-toastify";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formHandaler = async (data) => {
    const { name, email, password, image } = data;

    const { data: dets, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
      callbackURL: "/login",
    });

    // Success
    if (dets) {
      toast.success("Register Successful", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

    // Error
    if (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="h-screen flex justify-center bg-[#F3F3F3] pb-10">
      <div className="bg-white h-full px-15 shadow-xs rounded-xs text-[#403F3F] flex flex-col justify-center ">
        <div className="px-10">
          <h1 className="text-2xl font-semibold mb-7">Register your account</h1>
        </div>

        <hr className="text-gray-200 shadow mb-5" />

        <form
          className="px-2 space-y-2"
          action="#"
          onSubmit={handleSubmit(formHandaler)}
        >
          {/* Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Your Name</legend>
            <input
              type="text"
              className="input bg-[#F3F3F3]"
              placeholder="Enter your name"
              {...register("name", {
                required: true,
                pattern: /^[a-zA-Z\s]{3,25}$/,
              })}
            />
            {errors.name && (
              <p className="text-red-500">
                Only letters allowed (min. 3 chars)
              </p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Photo URL</legend>
            <input
              type="text"
              className="input bg-[#F3F3F3]"
              placeholder="Enter your photo url"
              {...register("image")}
            />
            <p className="text-[#706F6F]">Optional</p>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Email</legend>
            <input
              type="email"
              className="input bg-[#F3F3F3]"
              placeholder="Enter your email address"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
              })}
            />
            {errors.email && (
              <p className="text-red-500">Enter a valid email address</p>
            )}
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-sm">Password</legend>
            <input
              type={isVisible ? "text" : "password"}
              className="input bg-[#F3F3F3]"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              })}
            />
            {errors.password && (
              <p className="text-red-500">
                Min. 8 chars, must include A-z and 0-9
              </p>
            )}

            {/* Password Toggle */}
            <button
              className="absolute top-4 right-7"
              type="button"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <Eye className="size-4" />
              ) : (
                <EyeSlash className="size-4" />
              )}
            </button>
          </fieldset>

          <div className="flex items-center gap-2 pb-5 relative">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                {...register("checkbox", { required: true })}
                className="checkbox checkbox-sm"
              />
              <span className="text-xs">Accept Term & Conditions</span>
            </label>

            {errors.checkbox && (
              <p className="text-red-500 text-xs absolute bottom-0">
                Please accept the Terms & Conditions to continue
              </p>
            )}
          </div>

          <button type="submit" className="btn w-full bg-[#403F3F] text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
