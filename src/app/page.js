import CardList from "@/components/CardList/CardList";
import CategoryList from "@/components/categorylist/categorylist";
import Featured from "@/components/Feature/feature";
import Menu from "@/components/Menu/menu";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/loading/LoadingSpinner";

export default async function Home({searchParams}) {
  const SP=await searchParams
  const page=parseInt(SP?.page ?? "1",10) || 1;
  return (
    <>
      <div>
        <Suspense fallback={<div className="h-[600px] flex items-center justify-center"><LoadingSpinner size="lg" /></div>}>
          <Featured />
        </Suspense>
        <Suspense fallback={<div className="h-64 flex items-center justify-center"><LoadingSpinner size="md" /></div>}>
          <CategoryList />
        </Suspense>
      </div>

      <div className="w-full">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="w-full lg:w-2/3">
              <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><LoadingSpinner size="xl" /></div>}>
                <CardList  page={page}/>
              </Suspense>
            </div>
            <div className="w-full lg:w-1/3">
              <Suspense fallback={<div className="h-96 flex items-center justify-center"><LoadingSpinner size="lg" /></div>}>
                <Menu />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
