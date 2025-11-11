"use client";

import { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/utils/imageUtils";

export const OptimizedImage = ({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  sizes,
  priority = false,
  loading = "lazy",
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const blurPlaceholder = blurDataURL(width || 800, height || 600);

  const imageProps = {
    src,
    alt,
    className: `${className} transition-opacity duration-500 ${
      isLoading ? "opacity-0" : "opacity-100"
    }`,
    onLoadingComplete: handleLoadingComplete,
    onError: handleError,
    placeholder: "blur",
    blurDataURL: blurPlaceholder,
    sizes,
    priority,
    // Only add loading prop if priority is false
    ...(priority ? {} : { loading }),
    ...props,
  };

  if (fill) {
    return (
      <div className="relative w-full h-full">
        {/* Blur placeholder that stays until image fully loads */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 pointer-events-none z-0 ${
            isLoading ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${blurPlaceholder}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(20px)",
            transform: "scale(1.1)",
          }}
        />
        <div className="relative z-10 w-full h-full">
          <Image fill {...imageProps} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block" style={{ width, height }}>
      {/* Blur placeholder that stays until image fully loads */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none z-0 ${
          isLoading ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url("${blurPlaceholder}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px)",
          transform: "scale(1.1)",
        }}
      />
      <div className="relative z-10">
        <Image width={width} height={height} {...imageProps} />
      </div>
    </div>
  );
};

