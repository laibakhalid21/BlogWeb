"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/themecontext";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const { mode } = useContext(ThemeContext);

  return (
    <section
      className={`min-h-screen transition-colors duration-300 `}
    >
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            About <span className="text-teal-500">Our Blog</span>
          </h1>
          <p className="text-lg sm:text-xl  max-w-3xl mx-auto">
            Sharing ideas, experiences, and insights that inspire developers,
            creators, and dreamers across the world.
          </p>
        </div>

        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/p.jpeg" 
            alt="About Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-8 text-lg leading-relaxed max-w-4xl mx-auto">
          <p>
            Welcome to <span className="font-semibold text-teal-500">BlogWeb</span> — a space where we
            turn thoughts into stories and code into creativity. This blog is
            built with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, focusing on clean design,
            performance, and a seamless reading experience.
          </p>

          <p>
            Our mission is to empower readers with content that blends technology,
            creativity, and community. Whether you're a developer, designer, or
            just a curious mind, we aim to deliver articles that educate,
            motivate, and spark inspiration.
          </p>

          <p>
            We believe in sharing knowledge openly — because when we learn
            together, we grow together.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 text-white bg-teal-600 hover:bg-teal-700  rounded-xl font-semibold shadow-md transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
