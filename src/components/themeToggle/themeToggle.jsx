"use client"
import { ThemeContext } from "@/context/themecontext"
import Image from "next/image"
import { useContext, Suspense } from "react"
import { blurDataURL } from "@/utils/imageUtils"

const ThemeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext);
    return (
        <>
            <div
                onClick={toggle}
                className={`w-10 h-5 cursor-pointer rounded-full flex justify-between mt-1 relative ${mode === "light" ? "bg-gray-900" : "bg-white"
                    }`}>
                <Suspense fallback={<div className="w-[14px] h-[14px] bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />}>
                  <Image
                      src="/moon.png"
                      alt="moon"
                      height={14}
                      width={14}
                      placeholder="blur"
                      blurDataURL={blurDataURL(14, 14)}
                      priority
                  />
                </Suspense>
                <div className={`absolute top-1/2 w-3.5 h-3.5  rounded-full transform -translate-y-1/2 transition-all duration-300 ${mode === "light" ? "left-0 bg-white" : "right-0.5 bg-[#172630]"
                    }`}></div>
                <Suspense fallback={<div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />}>
                  <Image
                      src="/sun.png"
                      alt="sun"
                      height={16}
                      width={16}
                      placeholder="blur"
                      blurDataURL={blurDataURL(16, 16)}
                      priority
                  />
                </Suspense>
            </div>
        </>
    )
}
export default ThemeToggle