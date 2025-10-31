"use client";

import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeContext } from "@/context/themecontext";

const MenuPosts = ({ withImage = false, type = "popular" }) => {
  const { mode } = useContext(ThemeContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Map categories to colors
  const categoryColors = {
    travel: "bg-[#57c4ff31]",
    fashion: "bg-[#da85c731]",
    food: "bg-[#7fb88133]",
    style: "bg-[#ff795736]",
    culture: "bg-[#ffb04f45]",
    coding: "bg-[#5e4fff31]",
    default: "bg-orange-400",
  };

  useEffect(() => {
    const fetchPosts = async () => {
        const baseUrl=process.env.NEXT_PUBLIC_API_URL;
      try {
        const url =
          type === "editors"
            ? `${baseUrl}/api/menu/editors`
            : `${baseUrl}/api/menu/popular`;

        const res = await fetch(url);
        const data = await res.json();

        if (res.ok) setPosts(data);
        else console.error("Error:", data.message);
      } catch (err) {
        console.error("Failed to fetch menu posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [type]);

  if (loading) {
    return (
      <p className={`${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>
        Loading {type === "editors" ? "editor’s picks..." : "popular posts..."}
      </p>
    );
  }

  if (posts.length === 0) {
    return (
      <p className={`${mode === "dark" ? "text-gray-400" : "text-gray-600"}`}>
        No {type === "editors" ? "editor’s picks" : "popular posts"} available.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-10 mt-9 mb-14">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/posts/${post.slug}`}
          className="flex items-center gap-5"
        >
          {withImage && post.img && (
            <div className="relative w-[80px] h-[80px] flex-shrink-0">
              <Image
                src={post.img}
                alt={post.title}
                fill
                className="rounded-full border-4 border-gray-400 object-cover"
              />
            </div>
          )}

          <div className="flex-4 flex flex-col gap-1.5">
            {post.catSlug && (
              <span
                className={`px-1.5 py-2 rounded-xl text-sm font-bold w-max ${
                  categoryColors[post.catSlug.toLowerCase()] ||
                  categoryColors.default
                } ${
                  mode === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {post.catSlug}
              </span>
            )}

            <h3 className={`text-2xl font-medium`}>
              {post.title}
            </h3>

            <div className="text-sm">
              <span
                className={`${mode === "dark" ? "text-gray-300" : "text-gray-700"}`}
              >
                {post.userEmail || "Unknown Author"}
              </span>
              <span
                className={`${mode === "dark" ? "text-gray-400" : "text-gray-500"}`}
              >
                {" "} - {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
