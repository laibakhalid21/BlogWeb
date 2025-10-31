import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany({
      select: { id: true, title: true, slug: true },
      orderBy: { title: "asc" },
    });

    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Failed to load categories" }),
      { status: 500 }
    );
  }
};
