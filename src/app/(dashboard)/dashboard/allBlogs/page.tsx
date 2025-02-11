"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const AllBlog = () => {
    const [blogs, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState('')

    useEffect(() => {
        fetch("https://blog-application-wine-omega.vercel.app/api/blogs")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data.data);
                setLoading(false);
            });
    }, [text]);

    if (loading) {
        return (
            <div className="py-28 min-h-screen grid grid-cols-1 justify-center ">
                <div className="loading loading-spinner text-center text-green-500 loading-lg container mx-auto"></div>
            </div>
        );
    }


    const handleDelete = async (BlogId: string) => {

        const id = toast.loading("deleting....")
        try {
            const res = await fetch(`https://blog-application-wine-omega.vercel.app/api/blogs/${BlogId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,

                },
            })
            const result = await res.json()
            console.log(result)
            if (result) {
                toast.success("Delete successful", { id })
                setText("done")


            } else {
                toast.error(result?.data?.message || "something went wrong", { id })
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message || "something went wrong", { id })

        }

    }

    return (
        <div className="">
            <h1 className="text-3xl lg:text-5xl text-center font-extrabold text-white">
                Created Blog
            </h1>
            <div className="overflow-x-auto mt-4 text-white">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-base-200 text-white">
                            <th>Title</th>
                            <th>category</th>
                            <th>Content</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render rows dynamically */}
                        {blogs.map((blog: { _id: string, title: string, category: string, content: string }) => (
                            <tr key={blog._id} className="bg-base-200">
                                <th>{blog.title}</th>
                                <td>
                                   {blog.category}
                                </td>
                                <td>
                                    {blog.content.slice(0,50)}
                                </td>
                                <td>
                                    <Link href={`/dashboard/allBlogs/${blog._id}`} className="btn bg-gray-400 text-white">Update</Link>
                                    <button onClick={() => handleDelete(blog._id)} className="btn bg-red-500 text-white">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBlog;
