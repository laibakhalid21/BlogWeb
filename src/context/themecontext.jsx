"use client";

import { createContext, useState } from "react";
import { useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(null)
    const [mounted, setMounted] = useState(false);



    useEffect(() => {
        const savedMode = localStorage.getItem("theme") || "light";
        if (savedMode) {
            setMode(savedMode);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", mode);
    }, [mode]);


    const toggle = () => {
        setMode((prev) => (prev === 'dark' ? "light" : "dark"))
    }
    useEffect(() => {
        setMounted(true);
    }, [])
// bg-[#080622]
    if (mounted) {
        return (
            <ThemeContext.Provider value={{ toggle, mode }}>
                <div className={`${mode === 'light' ? "bg-white  text-black" : "bg-gray-900 text-white"}`}>
                    {children}
                </div>

            </ThemeContext.Provider>
        )

    }

}