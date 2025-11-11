import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { blurDataURL } from "@/utils/imageUtils";

const Footer = () => {
    return (
        <>
            <div className="w-full ">
                <div className="mt-8 max-w-[1500px] mx-auto w-full h-full md:px-6 px-3">
                    <footer className="mt-12 py-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
                        <div className="flex-1 flex flex-col gap-3 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <Suspense fallback={<div className="w-[50px] h-[50px] bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />}>
                                  <Image 
                                    src="/logo (1).png" 
                                    alt="lama blog" 
                                    width={50} 
                                    height={50}
                                    placeholder="blur"
                                    blurDataURL={blurDataURL(50, 50)}
                                    priority
                                  />
                                </Suspense>
                                <h1 className="text-3xl font-semibold ">Lamablog</h1>
                            </div>

                            <p className="font-light leading-relaxed max-w-md mx-auto md:mx-0">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                                necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
                                porro sequi, totam minima consequuntur, aspernatur deleniti vero
                                repellendus dolores.
                            </p>

                            <div className="flex justify-center md:justify-start gap-3 mt-2">
                                {["facebook", "instagram", "tiktok", "youtube"].map((icon) => (
                                  <Suspense key={icon} fallback={<div className="w-[18px] h-[18px] bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />}>
                                    <Image 
                                      src={`/${icon}.png`} 
                                      alt={icon.charAt(0).toUpperCase() + icon.slice(1)} 
                                      width={18} 
                                      height={18}
                                      placeholder="blur"
                                      blurDataURL={blurDataURL(18, 18)}
                                      loading="lazy"
                                    />
                                  </Suspense>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-12 md:gap-24">
                            <div className="flex flex-col gap-2 text-lg">
                                <span className="font-bold text-xl">Links</span>
                                <Link href="/">Homepage</Link>
                                <Link href="/blog" >Blog</Link>
                                <Link href="/about" >About</Link>
                                <Link href="/contact" >Contact</Link>
                            </div>

                            <div className="flex flex-col gap-2 text-lg">
                                <span className="font-bold text-xl">Tags</span>
                                <Link href="/" >Style</Link>
                                <Link href="/" >Fashion</Link>
                                <Link href="/" >Coding</Link>
                                <Link href="/" >Travel</Link>
                            </div>

                            <div className="flex flex-col gap-2 text-lg">
                                <span className="font-bold text-xl">Social</span>
                                <Link href="/" >Facebook</Link>
                                <Link href="/" >Instagram</Link>
                                <Link href="/" >Tiktok</Link>
                                <Link href="/" >Youtube</Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    )
}
export default Footer;