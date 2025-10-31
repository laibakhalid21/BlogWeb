import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { views: "desc" }, // or whatever metric defines “popular”
      take: 5,
      select: { id: true, title: true,catSlug:true, slug: true, img: true,createdAt:true,userEmail:true },
    });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Failed to load popular posts" }),
      { status: 500 }
    );
  }
};
