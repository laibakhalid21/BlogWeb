"use client"
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <button
        className={`p-4 text-white border-none rounded ${
          hasPrev
            ? "bg-red-800 hover:bg-red-900 cursor-pointer"
            : "bg-red-400 cursor-not-allowed"
        }`}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>

      <button
        className={`p-4 w-20 text-white border-none rounded ${
          hasNext
            ? "bg-red-800 hover:bg-red-900 cursor-pointer"
            : "bg-red-400 cursor-not-allowed"
        }`}
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
