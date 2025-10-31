import React from "react";
import Link from "next/link";

const Menucategories = () => {
    const categories = [
        { title: "Style", slug: "style", bg: "bg-[#57c4ff31]" },
        { title: "Fashion", slug: "fashion", bg: "bg-[#da85c731]" },
        { title: "Food", slug: "food", bg: "bg-[#7fb88133]" },
        { title: "Travel", slug: "travel", bg: "bg-[#ff795736]" },
        { title: "Culture", slug: "culture", bg: "bg-[#ffb04f45]" },
        { title: "Coding", slug: "coding", bg: "bg-[#5e4fff31]" },
    ];
    return (
        <div className="mt-9 mb-14 flex flex-wrap gap-6">
            {categories.map((cat) => (
                <Link
                    className={`px-7 capitalize rounded-xl text-md font-medium transition-all hover:scale-[1.03] py-5  ${cat.bg}`}
                    key={cat.slug}
                    href={`/blog?cat=${cat.slug}`}
                >
                    {cat.title}
                </Link>
            ))}





            
        </div>
    )
}
export default Menucategories;