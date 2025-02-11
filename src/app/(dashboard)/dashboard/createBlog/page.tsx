"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function BlogCreationForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<FieldValues> =async (data) => {
        console.log("Blog Data:", data);
        console.log(data);
        const id = toast.loading("creating....")
        try {
            const res = await fetch("https://blog-application-wine-omega.vercel.app/api/blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,

                },

                body: JSON.stringify(data)
            })
            const result = await res.json()
            console.log(result)
            if (result.data) {
                toast.success("create successful", { id })

                reset()
            } else {
                toast.error(result?.data?.message || "something went wrong", { id })
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message || "something went wrong", { id })

        }

    };

    return (
        <div className=" dark:text-white text-black min-h-screen p-6">
            {/* Header Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-white text-center">Create a Blog Post</h2>
            </div>

            {/* Form Section */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-2xl mx-auto text-black bg-gray-100 p-6 rounded-lg shadow-lg"
            >
                {/* Title Field */}
                <div className="mb-4">
                    <label className="block font-semibold">Title</label>
                    <input
                        {...register("title", { required: "Title is required" })}
                        className="w-full p-2 bg-gray-200 border rounded"
                        placeholder="Enter blog title"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message?.toString()}</p>}
                </div>

                {/* Image URL Field */}
                <div className="mb-4">
                    <label className="block font-semibold text-black">Image URL</label>
                    <input
                        {...register("image", {
                            required: "Image URL is required",
                        })}
                        className="w-full p-2 bg-gray-200 border rounded"
                        placeholder="Enter image URL"
                    />
                    {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message?.toString()}</p>}
                </div>

                {/* Content Field */}
                <div className="mb-4">
                    <label className="block font-semibold text-black">Content</label>
                    <textarea
                        {...register("content", {
                            required: "Content is required",
                        })}
                        className="w-full p-2 border bg-gray-200 rounded h-40"
                        placeholder="Write your blog content..."
                    ></textarea>
                    {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message?.toString()}</p>}
                </div>

                {/* Category Field */}
                <div className="mb-4">
                    <label className="block font-semibold  text-black">Category</label>
                    <select
                        {...register("category", { required: "Please select a category" })}
                        className="w-full p-2 bg-gray-200 border rounded"
                    >
                        <option value="">Select a category</option>
                        <option value="MongoDB">MongoDB</option>
                        <option value="Full Stack">Full Stack</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="React">React</option>
                        <option value="Node.js">Node.js</option>
                        <option value="Express.js">Express.js</option>
                        <option value="Next.js">Next.js</option>
                        <option value="Tailwind CSS">Tailwind CSS</option>
                        <option value="GraphQL">GraphQL</option>
                        <option value="Firebase">Firebase</option>
                        <option value="MERN Stack">MERN Stack</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Docker">Docker</option>
                    </select>
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message?.toString()}</p>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-gray-500 text-green-500 py-2 rounded ">
                    Create Blog
                </button>
            </form>
        </div>
    );
}
