"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@/context/themecontext";

const Card = ({key,item}) => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12 transition-all" key={key}>
      {/* Image */}
     {item.img && <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-[350px] rounded-xl overflow-hidden">
        <Image
          src={item.img}
          alt="Culture article"
          fill
          className="object-cover"
        />
      </div>}

      {/* Text Section */}
      <div className="flex-1 flex flex-col gap-4 sm:gap-6 text-center lg:text-left px-2 sm:px-4">
        <div className="flex items-center justify-center lg:justify-start gap-3 text-sm">
          <span className={`${mode === "light" ? "text-gray-600" : "text-gray-300"}`}>
           {item.createdAt.substring(0,10)}
          </span>
          <span>-</span>
          <span className="text-red-600 font-medium tracking-wide uppercase">{item.catSlug}</span>
        </div>

        <Link href={`/posts/${item.slug}`}>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold transition-colors duration-200">
            {item.title}
          </h1>
        </Link>

        <p
          className={`${mode === "light" ? "text-gray-600" : "text-gray-300"} text-base sm:text-lg font-light leading-relaxed`}
        >
          {item.desc.substring(0,200)}...
        </p>

        <Link
          href={`/posts/${item.slug}`}
          className="border-b border-red-600 w-max mx-auto lg:mx-0 pb-0.5 text-red-600 hover:opacity-80 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
