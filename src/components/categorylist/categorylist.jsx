
import Image from "next/image";
import Link from "next/link";

const getRandomColor = () => {
  const colors = [
    "#57c4ff31", 
    "#da85c731", 
    "#7fb88133",
    "#ff795736", 
    "#ffb04f45",
    "#5e4fff31", 
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getData = async () => {
    const baseUrl=process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  const categoriesWithColor = data.map((cat) => ({
    ...cat,
    bg: getRandomColor(),
  }));

  return (
    <div className="w-full">
      <div className="max-w-[1500px] mx-auto px-4 md:px-6 py-6">
        <h1 className="text-3xl font-semibold my-12">Popular Categories</h1>

        <div className="flex flex-wrap justify-between gap-5">
          {categoriesWithColor.map((cat) => (
            <Link
              key={cat.id}
              href={`/blog?cat=${cat.slug}`}
              className="flex items-center justify-center gap-3 capitalize rounded-xl h-20 text-lg font-medium transition-all hover:scale-[1.03]
                         w-[15%] max-[1280px]:w-[20%] max-[1024px]:w-[25%] max-[768px]:w-[45%] max-[640px]:w-full"
              style={{
                backgroundColor: cat.bg,
              }}
            >
             {cat.img && <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                <Image
                  src={cat.img || "/placeholder.png"}
                  alt={cat.title}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>}
              {cat.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
