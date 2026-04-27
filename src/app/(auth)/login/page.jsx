"use client";

import React, { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { error } from "better-auth/api";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formHandaler = async (data) => {
    console.log(data);
    const { email, password } = data;

    const { data: dets, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log("Data is = ", dets);
    console.log("Error is = ", error);

    // Success
    if (dets) {
      toast.success("Login Successful", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      setTimeout(() => {
        router.push("/");
      }, 500)
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
    <div className="flex justify-center ">
      <div className="bg-white h-[70vh] px-16 mt-10 shadow-xs rounded-xs text-[#403F3F] flex flex-col justify-center">
        <div className="px-10">
          <h1 className="text-2xl font-semibold mb-7">Login your account</h1>
        </div>

        <hr className="text-gray-200 shadow mb-5" />

        <form
          className="px-2 space-y-2"
          action="#"
          onSubmit={handleSubmit(formHandaler)}
        >
          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Email</legend>
            <input
              type="email"
              className="input bg-[#F3F3F3]"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email field is required",
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
                required: "Password field is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <button
              className="absolute top-4 right-3"
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

          {/* Login Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="btn w-full bg-[#403F3F] text-white"
            >
              Login
            </button>
          </div>
        </form>

        {/* Register page option */}
        <div className="flex justify-center items-center gap-2 pt-5">
          <p className="text-[#706F6F] text-xs font-semibold">
            Dont’t Have An Account ?{" "}
            <Link href="/register">
              <span className="text-[#F8625C] cursor-pointer hover:underline">
                Register
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
