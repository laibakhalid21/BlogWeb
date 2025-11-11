"use client";

import { CardSkeleton } from "./ImageSkeleton";

export const PageSkeleton = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 py-6">
        <div className="h-8 w-32 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-6" />
        <div className="h-16 w-64 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-12 mx-auto" />
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="w-full lg:w-2/3">
            <div className="h-10 w-48 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-12" />
            {[1, 2, 3].map((i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
          <div className="w-full lg:w-1/3">
            <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

