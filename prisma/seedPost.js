// prisma/seedPost.js
import { PrismaClient } from "../src/generated/prisma/index.js";
const prisma = new PrismaClient();

async function main() {
  const userEmail = "laibakhalid2109@gmail.com"; // existing user email
  const categorySlugs = ["coding", "food", "travel", "fashion", "style", "culture"];

  // Ensure user exists
  const user = await prisma.user.findUnique({ where: { email: userEmail } });
  if (!user) throw new Error(`❌ No user found with email='${userEmail}'`);

  // Loop over all categories
  for (const slug of categorySlugs) {
    // Ensure category exists
    const cat = await prisma.category.findUnique({ where: { slug } });
    if (!cat) {
      console.warn(`⚠️ Category '${slug}' not found, skipping post creation.`);
      continue;
    }

    // Create a unique post for this category
    const post = await prisma.post.create({
      data: {
        slug: `${slug}-post`,
        title: `Exploring ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
        desc: `This is a sample post in the ${slug} category.`,
        catSlug: slug,
        userEmail,
      },
    });

    console.log(`✅ Created post for category '${slug}': ${post.slug}`);
  }

  console.log("🎉 All posts seeded successfully!");
}

main()
  .catch((err) => {
    console.error("❌ Error seeding posts:", err.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
