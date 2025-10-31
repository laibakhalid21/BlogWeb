"use client"
import { ThemeContext } from "@/context/themecontext"
import Image from "next/image"
import { useContext } from "react"

const ThemeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext);
    return (
        <>
            <div
                onClick={toggle}
                className={`w-10 h-5 cursor-pointer rounded-full flex justify-between mt-1 relative ${mode === "light" ? "bg-gray-900" : "bg-white"
                    }`}>
                <Image
                    src="/moon.png"
                    alt="moon"
                    height={14}
                    width={14}
                />
                <div className={`absolute top-1/2 w-3.5 h-3.5  rounded-full transform -translate-y-1/2 transition-all duration-300 ${mode === "light" ? "left-0 bg-white" : "right-0.5 bg-[#172630]"
                    }`}></div>
                <Image
                    src="/sun.png"
                    alt="sun"
                    height={16}
                    width={16}
                />
            </div>
        </>
    )
}
export default ThemeToggle