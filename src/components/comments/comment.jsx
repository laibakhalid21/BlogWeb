"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/themecontext";
import useSWR from "swr";
import { useSession } from "next-auth/react";


const fetcher = async (url) => {
  const res = await fetch(url)

  const data = await res.json()

  if (!res.ok) {
    const error = new Error(data.message)
    throw error
  }

  return data
}



const Comment = ({ postSlug }) => {
  const { mode } = useContext(ThemeContext);
  const { status } = useSession()

  const { data,mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`
    , fetcher
  )

  const [desc,setDesc]=useState("");


  const handleSubmit = async () => {
  if (!desc.trim()) {  // check for empty or whitespace-only
    alert("Comment cannot be empty.");
    return;
  }

  try {
    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ desc, postSlug }),
    });
    setDesc(""); 
    mutate();  
  } catch (err) {
    console.error("Failed to submit comment:", err);
    alert("Failed to submit comment. Please try again.");
  }
};



  return (
    <div className="mt-20">
      <h1
        className={`text-2xl sm:text-4xl font-semibold mb-6 ${mode === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
      >
        Comments
      </h1>

      {status === "authenticated" ? (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          <textarea
            value={desc}                 // ✅ add this line
          onChange={e=>setDesc(e.target.value)}
            placeholder="Write a comment..."
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 min-h-[120px] resize-none ${mode === "dark"
              ? "bg-gray-800 border-gray-700 text-gray-200 focus:ring-teal-400"
              : "bg-white border-gray-300 text-gray-800 focus:ring-teal-500"
              }`}
          />
          <button
          onClick={handleSubmit}
          className="w-full sm:w-auto cursor-pointer bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition">
            Send
          </button>
        </div>
      ) : (
        <Link
          href="/login"
          className="text-red-600 flex items-center justify-center font-medium hover:underline text-lg"
        >
          Login to write a comment
        </Link>
      )}


      <div className="space-y-10 mt-8 flex flex-col">
        {isLoading ? "Loading..." : data?.map(item => (
          <div
            key={item.id}
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 border-b pb-6 ${mode === "dark" ? "border-gray-700" : "border-gray-300"
              }`}
          >
            {item?.user?.image && <div className="shrink-0 relative w-[60px] h-[60px]">
              <Image
                src={item.user.image}
                alt="User Avatar"
                fill
                className="rounded-full object-cover border border-gray-400"
              />
            </div>
            }
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                <span
                  className={`font-semibold text-base sm:text-lg ${mode === "dark" ? "text-gray-100" : "text-gray-900"
                    }`}
                >
                  {item.user.name}
                </span>
                <span
                  className={`text-sm ${mode === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  {item.createdAt.substring(0,10)}
                </span>
              </div>

              <p
                className={`text-base sm:text-lg leading-relaxed font-light ${mode === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
