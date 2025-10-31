"use client"

import { ThemeContext } from "@/context/themecontext";
import Image from "next/image";
import { useContext } from "react";
import { Suspense } from "react";


const Featured = () => {
    const { mode } = useContext(ThemeContext)
    return (
        <>
            <div className="w-full overflow-x-hidden">
                <div className="mt-8 max-w-[1500px] mx-auto w-full h-full md:px-6 px-3">
                    <h1 className="lg:text-8xl sm:text-7xl text-6xl "><b className="font-bold">Hey, lama dev here!</b> Discover my stories and creative ideas.
                    </h1>
                    <div className="mt-14 lg:flex items-center gap-12">
                        <Suspense fallback={<div>Loading...</div>}>
                            <div className="flex-1 h-[500px] relative">
                                <Image
                                    src='/p1 (1).jpeg'
                                    alt="p1"
                                    fill
                                    className="object-cover"
                                    placeholder="blur"
                                    blurDataURL="/p1 (1).jpeg"

                                />
                            </div>
                        </Suspense>
                        <div className="flex-1 flex flex-col gap-5">
                            <h1 className="text-4xl font-bold lg:pt-0  pt-5  ">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, ab.
                            </h1>
                            <p className="font-light text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim architecto praesentium numquam. Temporibus voluptates ex praesentium non minima tenetur voluptatem illo. Consequatur illum commodi minima itaque cupiditate. Dolorem, quia illo!
                            </p>
                            <div>
                                <button className={`cursor-pointer px-4 py-4 font-bold border-none rounded-xl ${mode === "light" ? "text-white bg-black" : "text-white bg-gray-500"} `}>Read More</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Featured;