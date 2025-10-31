import CardList from "@/components/CardList/CardList"
import Menu from "@/components/Menu/menu"
import BackButton from "@/components/backButton/backbutton"

const BlogPage = async ({ searchParams }) => {
    const SP = await searchParams
    const page = parseInt(SP.page) || 1;
    const { cat } = SP;


    return (
        <div>
            <div className="w-full">
                <div className="max-w-[1500px] mx-auto px-4 sm:px-6 py-6">
                    <div className="mb-6">
                        <BackButton />
                    </div>
                    <h1 className=" text-center py-8 font-bold capitalize text-7xl">{cat} Blogs</h1>
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                        <div className="w-full lg:w-2/3">
                            <CardList page={page} cat={cat} />
                        </div>
                        <div className="w-full lg:w-1/3">
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogPage;