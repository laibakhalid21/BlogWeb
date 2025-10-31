import BackButton from "@/components/backButton/backbutton";
import Comment from "@/components/comments/comment";
import Menu from "@/components/Menu/menu";
import Image from "next/image";



const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};




const SinglePost = async({params}) => {
  // const Params=await params
  const {slug}= await params;

  const data=await getData(slug);
  return (
    <div className="w-full">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 py-10">
        <div className="mb-10">
          <BackButton/>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
             {data?.title}
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-4">
             {data?.user.image && <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                <Image
                  src={data.user.image}
                  alt="Author"
                  fill
                  className="rounded-full object-cover"
                />
              </div>}
              <div className="flex flex-col text-sm sm:text-base">
                <span className="font-semibold">{data?.user.name}</span>
                <span className="text-gray-500">{data.createdAt.substring(0,10)}</span>
              </div>
            </div>
          </div>

        {data?.img && <div className="relative lg:flex-1 w-full h-72 sm:h-96 lg:h-[350px] rounded-xl overflow-hidden">
          <Image
            src={data.img}
            alt="Post Image"
            fill
            className="object-cover"
          />
        </div>}
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 py-10 flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="flex-1 lg:w-2/3">
          <div className="text-lg sm:text-xl font-light leading-relaxed space-y-6 " dangerouslySetInnerHTML={{__html:data?.desc}}>
          </div>
          <div>
            <Comment postSlug={slug}/>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
