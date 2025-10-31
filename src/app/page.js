import CardList from "@/components/CardList/CardList";
import CategoryList from "@/components/categorylist/categorylist";
import Featured from "@/components/Feature/feature";
import Menu from "@/components/Menu/menu";

export default async function Home({searchParams}) {
  const SP=await searchParams
  const page=parseInt(SP?.page ?? "1",10) || 1;
  return (
    <>
      <div>
        <Featured />
        <CategoryList />
      </div>

      <div className="w-full">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="w-full lg:w-2/3">
              <CardList  page={page}/>
            </div>
            <div className="w-full lg:w-1/3">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
