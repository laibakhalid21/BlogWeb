"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { LoadingSpinner } from "@/components/loading/LoadingSpinner";

export default function NavigationLoading() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Start loading immediately
    setIsLoading(true);
    
    // Hide after a longer delay to ensure users see the loading state
    const minTime = 800; // Minimum 800ms to show loading
    const maxTime = 3000; // Maximum 3 seconds
    
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, minTime);

    // Safety: Force hide after max time regardless
    const maxTimer = setTimeout(() => {
      setIsLoading(false);
    }, maxTime);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearTimeout(maxTimer);
    };
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center bg-black/20 dark:bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
        <LoadingSpinner size="lg" />
      </div>
    </div>
  );
}

