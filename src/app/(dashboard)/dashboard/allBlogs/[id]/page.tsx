"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "sonner";

const UpdateBlogPage = () => {
    const [blog, setBlog] = useState(null);
    const { control, handleSubmit, setValue, formState: { errors } } = useForm();
    const { id } = useParams();
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://blog-application-wine-omega.vercel.app/api/blogs/${id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const result = await res.json();
            const blogData = result?.data;
            setBlog(blogData);

            if (blogData) {
                setValue("title", blogData.title);
                setValue("image", blogData.image);
                setValue("content", blogData.content);
                setValue("category", blogData.category);
            }
        };

        fetchData();
    }, [id, setValue]);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Updating blog...");
        try {
            const res = await fetch(`https://blog-application-wine-omega.vercel.app/api/blogs/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(data),
            });
            const result = await res.json();

            if (result.data) {
                toast.success("Blog updated successfully", { id: toastId });
                router.push("/dashboard/allBlogs");
            } else {
                toast.error(result?.message || "Something went wrong", { id: toastId });
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error("Failed to update blog", { id: toastId });
        }
    };

    if (!blog) {
        return <div className="py-28 min-h-screen grid grid-cols-1 justify-center">
            <div className="loading loading-spinner text-center text-green-500 loading-lg container mx-auto"></div>
        </div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl border border-gray-300">
            <h2 className="text-center text-2xl font-extrabold text-black mb-6">Update Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Blog Title */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-black">Title</label>
                    <Controller name="title" control={control} render={({ field }) => (
                        <input {...field} className="w-full p-3 mt-1 text-black bg-gray-200 border rounded-lg" placeholder="Enter blog title" />
                    )} />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message?.toString()}</p>}
                </div>

                {/* Image URL */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-black">Image URL</label>
                    <Controller name="image" control={control} render={({ field }) => (
                        <input {...field} className="w-full p-3 mt-1 border text-black bg-gray-200 rounded-lg" placeholder="Enter image URL" />
                    )} />
                </div>

                {/* Content */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-black">Content</label>
                    <Controller name="content" control={control} render={({ field }) => (
                        <textarea {...field} className="w-full p-3 mt-1 border text-black bg-gray-200 rounded-lg" rows={6} placeholder="Enter blog content" />
                    )} />
                </div>

                {/* Category */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-black">Category</label>
                    <Controller name="category" control={control} render={({ field }) => (
                        <input {...field} className="w-full p-3 mt-1 text-black border bg-gray-200 rounded-lg" placeholder="Enter blog category" />
                    )} />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-2 mt-4 text-lg bg-gray-600 text-green-500 rounded-lg">
                    Update Blog
                </button>
            </form>
        </div>
    );
};

export default UpdateBlogPage;