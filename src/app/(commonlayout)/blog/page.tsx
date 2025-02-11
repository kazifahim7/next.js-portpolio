import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Blog",
    description: "This is a BLog Page, Mern project full stack project backend project"
}




const ProjectPage = async () => {
    const res = await fetch("https://blog-application-wine-omega.vercel.app/api/blogs", { cache: 'no-store' })
    const blogs = await res.json() || []

    
  


    return (
        <div className="bg-white dark:bg-gray-900 py-28 min-h-screen">

            <h1 className="text-3xl lg:text-5xl text-center font-extrabold dark:text-white text-black">Recent Blog</h1>

            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">

                {
                    blogs?.data?.map((blog: { _id: string, title: string, image: string, content:string}) => <div key={blog._id} className="card border border-blue-600 bg-gray-800 text-white  shadow-xl">
                        <figure className="h-full">
                            <Image
                                width={700}
                                height={800}
                                src={blog.image}
                                className="w-full"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {blog.title}
                            </h2>
                            <p>{blog.content.slice(0, 30)}........</p>
                            <div className="card-actions justify-end">
                                <Link href={`/blog/${blog._id}`} className="badge badge-outline">Details</Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default ProjectPage;