"use client";

export const ImageSkeleton = ({ className = "" }) => {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 ${className}`}
    />
  );
};

export const CardSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
      <ImageSkeleton className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[350px] rounded-xl" />
      <div className="flex-1 flex flex-col gap-4 sm:gap-6 w-full">
        <div className="flex items-center gap-3">
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
          <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
        </div>
        <div className="h-8 w-full bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
        <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
        <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
      </div>
    </div>
  );
};

export const MenuPostSkeleton = () => {
  return (
    <div className="flex items-center gap-5">
      <ImageSkeleton className="w-[80px] h-[80px] rounded-full flex-shrink-0" />
      <div className="flex-1 flex flex-col gap-2">
        <div className="h-4 w-20 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
        <div className="h-6 w-full bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
        <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
      </div>
    </div>
  );
};

