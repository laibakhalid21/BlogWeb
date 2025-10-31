import Image from "next/image";
import Pagination from "../pagination/pagination";
import Card from "../Card/Card";

const getData = async (page,cat) => {
  const baseUrl=process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

const CardList=async({page,cat})=>{
    const {posts,count}=await getData(page,cat)
    const POST_PER_PAGE=5
    const hasPrev= POST_PER_PAGE * (page-1)>0
    const hasNext=POST_PER_PAGE * (page-1) + POST_PER_PAGE <count
    return(
        <>
        <div className="flex-5">
            <h1 className="text-3xl font-semibold my-12">Recent Posts</h1>
            <div>
              {posts?.map((item)=>(
                <Card item={item} key={item.id}/>
              ))} 
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
        </div>
        
        </>
    )
}
export default CardList;