"use client";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/authLinks";
import ThemeToggle from "../themeToggle/themeToggle";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "@/context/themecontext";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { mode } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const NavItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <div className="w-full">
        <div className="max-w-[1500px] w-full mx-auto items-center justify-between flex md:px-6 px-1 py-6 relative">
          {/* Left - Social Icons */}
          <div className="md:flex items-center flex-1 gap-2 hidden">
            {["facebook", "instagram", "tiktok", "youtube"].map((icon) => (
              <Image
                key={icon}
                src={`/${icon}.png`}
                alt={icon}
                height={28}
                width={28}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
            ))}
          </div>

          {/* Center - Logo */}
          <div className="flex-1 md:text-center md:px-0 sm:px-5 px-2 font-bold text-4xl">
            lamablog
          </div>

          {/* Right - Links */}
          <div className="sm:px-5 pr-2">
            <div className="flex text-center flex-1 sm:gap-5 gap-4 text-xl relative items-center">
              <ThemeToggle />

              {/* Desktop Nav Links */}
              {NavItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={i}
                    href={item.href}
                    className={`hidden md:flex transition-colors ${
                      isActive
                        ? 
                           "text-teal-500 border-teal-500 font-semibold"
                        
                            : "text-black-300 hover:text-teal-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <AuthLinks />

              {/* Mobile Menu Button */}
              <div
                className="w-6 h-5 flex flex-col md:hidden justify-between cursor-pointer mt-1"
                onClick={() => setOpen(true)}
              >
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-full h-0.5 ${
                      mode === "light" ? "bg-[#262242]" : "bg-[#d7d2f7]"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Sidebar Menu */}
          <div
            className={`fixed top-0 left-0 h-full md:hidden w-72 sm:w-80 transition-transform duration-300 z-50 flex flex-col justify-between shadow-lg ${
              open ? "translate-x-0" : "-translate-x-full"
            } ${
              mode === "light"
                ? "bg-white text-black"
                : "bg-[#262242] text-white"
            }`}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-300 dark:border-gray-700">
              <div className="text-3xl font-bold">lamablog</div>
              <button className="cursor-pointer" onClick={() => setOpen(false)}>
                <X size={30} />
              </button>
            </div>

            <div className="flex flex-col gap-8 px-8 w-full text-lg font-medium">
              {[...NavItems,     { name: "Write", href: "/write" }].map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`transition-colors ${
                      isActive
                        ? 
                           "text-teal-500 border-teal-500 font-semibold"
                        
                            : "text-black-300 hover:text-teal-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <AuthLinks />
            </div>

            {/* Bottom Socials */}
            <div className="flex flex-col items-center gap-6 p-6 border-t border-gray-300 dark:border-gray-700">
              <div className="flex items-center gap-5">
                {["facebook", "instagram", "tiktok", "youtube"].map((icon) => (
                  <Image
                    key={icon}
                    src={`/${icon}.png`}
                    alt={icon}
                    height={26}
                    width={26}
                    className="cursor-pointer hover:scale-110 transition-transform"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
