import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
   const count = await prisma.post.count();
const skip = Math.max(0, Math.floor(Math.random() * Math.max(count - 5, 0)));

const posts = await prisma.post.findMany({
  skip,
  take: 5,
  select: { id: true, title: true,catSlug:true, slug: true, img: true,createdAt:true,userEmail:true },
});


    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Failed to load editor picks" }),
      { status: 500 }
    );
  }
};
