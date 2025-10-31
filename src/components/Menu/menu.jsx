import MenuPosts from "../menuPost/MenuPost";
import Menucategories from "../menuCategories/MenuCatregoris";

const Menu = async () => {
  const [popularRes, catRes, editorRes] = await Promise.all([
    fetch(`http://localhost:3000/api/menu/popular`, { cache: "no-store" }),
    fetch(`http://localhost:3000/api/menu/categories`, { cache: "no-store" }),
    fetch(`http://localhost:3000/api/menu/editors`, { cache: "no-store" }),
  ]);

  const [popularPosts, categories, editorPicks] = await Promise.all([
    popularRes.json(),
    catRes.json(),
    editorRes.json(),
  ]);

  return (
    <div className="flex-2 my-10 sm:my-12 px-2 sm:px-0">
      {/* Section 1 - Popular Posts */}
      <div className="mb-10">
        <h2 className="text-base sm:text-xl font-medium text-gray-400 ">
          What's hot
        </h2>
        <h1 className="text-2xl sm:text-5xl font-semibold ">
          Most Popular
        </h1>
        <MenuPosts withImage={true} posts={popularPosts} />
      </div>

      {/* Section 2 - Categories */}
      <div className="mb-10">
        <h2 className="text-base sm:text-xl font-medium text-gray-400">
          Discover by topic
        </h2>
        <h1 className="text-2xl sm:text-5xl font-semibold ">
          Categories
        </h1>
        <Menucategories categories={categories} />
      </div>

      {/* Section 3 - Editor’s Pick */}
      <div>
        <h2 className="text-base sm:text-xl font-medium text-gray-400 ">
          Chosen by the editor
        </h2>
        <h1 className="text-2xl sm:text-5xl font-semibold ">
          Editor’s Pick
        </h1>
        <MenuPosts withImage={false} posts={editorPicks} />
      </div>
    </div>
  );
};

export default Menu;
