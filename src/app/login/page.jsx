"use client";
import React, { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { ThemeContext } from "@/context/themecontext";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const { mode } = useContext(ThemeContext);
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") router.push("/");
  }, [status, router]);

  if (status === "loading") return <div className="w-screen h-screen">Loading...</div>;

  return (
    <div
      className={`flex min-h-screen transition-colors duration-300 ${
        mode === "light" ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-gray-100"
      }`}
    >
      <div className="flex flex-col justify-center items-center w-full  px-8 sm:px-16">
        <div className="w-full max-w-md  shadow-2xl rounded-2xl p-10 sm:p-12 flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-center mb-2">
            Welcome to Blogapp
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
            Get started – it’s free.
          </p>

          <button
            onClick={() => signIn("email")}
            className={` text-white font-semibold py-3 rounded-full text-base sm:text-lg
             bg-teal-700 hover:bg-teal-600
              `}
          >
            Sign up with Email
          </button>

          <div className="flex items-center justify-center gap-2 ">
            <div className="h-px w-16 " /> or <div className="h-px w-16" />
          </div>

          <button
            onClick={() => signIn("google")}
            className="flex items-center justify-center gap-3 border py-3 rounded-full font-medium  transition"
          >
            <FcGoogle className="text-2xl" /> Sign up with Google
          </button>

          <button
            onClick={() => signIn("github")}
            className="flex items-center justify-center gap-3 border py-3 rounded-full font-medium transition"
          >
            <FaGithub className="text-2xl" /> Sign up with GitHub
          </button>

          <p className="text-lg text-center  mt-6">
            By signing up, you agree to our{" "}
            <span className="text-indigo-600 cursor-pointer">Terms of Service</span> and{" "}
            <span className="text-indigo-600 cursor-pointer">Privacy Policy</span>.
          </p>

          {/* <p className="text-md text-center mt-4">
            Already have an account?{" "}
            <span className="text-indigo-600 cursor-pointer" onClick={() => router.push("/login")}>
              Log in
            </span>
          </p> */}
        </div>
      </div>


    </div>
  );
};

export default Login;
