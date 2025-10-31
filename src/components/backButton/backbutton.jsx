"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react"; // Lucide icons are available in shadcn/ui

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2  hover:text-teal-600 transition"
    >
      <ArrowLeft className="w-7 h-7" />
      <span className="text-xl">Back</span>
    </button>
  );
};

export default BackButton;
