import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    const Params=await params;
  const { slug } = Params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data:{views:{increment:1}},
      include: {
        user: true,
        cat: true,
        comments: true
      }
    });

    

    if (!post) {
      return new NextResponse(JSON.stringify({ message: "Post not found" }), { status: 404 });
    }

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
};
