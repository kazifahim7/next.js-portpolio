"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "sonner";

const UpdatePage = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [project, setProject] = useState<any>(null);
    const { control, handleSubmit, setValue, formState: { errors } } = useForm();
    const { id } = useParams()
    const router = useRouter()

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch(`https://blog-application-wine-omega.vercel.app/api/project/${id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const result = await res.json();
            const projectData = result?.data;
            setProject(projectData);


            if (projectData) {
                setValue("name", projectData.name);
                setValue("image", projectData.image);
                setValue("technology", projectData.technology);
                setValue("liveLink", projectData.liveLink);
                setValue("codeLink", projectData.codeLink);
                setValue("description", projectData.description);
            }
        };

        fetchData();
    }, [id, setValue]);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data)

        const toastId =toast.loading("updating")
        try {
            const res = await fetch(`https://blog-application-wine-omega.vercel.app/api/project/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,

                },

                body: JSON.stringify(data)
            })
            const result = await res.json()
            console.log(result)
            if (result.data) {
                toast.success("update successful", { id:toastId })
                router.push('/dashboard/createdProject')

               
            } else {
                toast.error(result?.data?.message || "something went wrong", { id: toastId })
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message || "something went wrong", { id: toastId })

        }


        

        
      
            
     
    };

    if (!project) {
        return <div className="py-28 min-h-screen grid grid-cols-1 justify-center">
            <div className="loading loading-spinner text-center text-green-500 loading-lg container mx-auto"></div>
        </div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl border border-gray-300">
            <h2 className="text-center text-2xl font-extrabold text-gray-700 mb-6">Update Project</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Project Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Project Name</label>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-md"
                                placeholder="Enter project name"
                            />
                        )}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message?.toString()}</p>}
                </div>

                {/* Image URL */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Image URL</label>
                    <Controller
                        name="image"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-md"
                                placeholder="Enter image URL"
                            />
                        )}
                    />
                    {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message?.toString()}</p>}
                </div>

                {/* Technologies Used */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Technologies Used</label>
                    <Controller
                        name="technology"
                        control={control}
                        render={({ field }) => (
                            <div className="flex flex-wrap gap-4">
                                {["React", "Node.js", "MongoDB", "Express.js", "Python", "Django", "Angular", "Vue.js", "JavaScript", "TypeScript"].map((tech, index) => (
                                    <div key={index} className="flex items-center text-black bg-white">
                                        <input
                                            {...field}
                                            type="checkbox"
                                            value={tech}
                                            checked={field.value?.includes(tech)}
                                            onChange={(e) => {
                                                const { value, checked } = e.target;
                                                const updatedValue = checked
                                                    ? [...(field.value || []), value]
                                                    : field.value.filter((v: string) => v !== value);
                                                field.onChange(updatedValue);
                                            }}
                                            className="mr-2"
                                        />
                                        <label>{tech}</label>
                                    </div>
                                ))}
                            </div>
                        )}
                    />
                    {errors.technology && <p className="text-red-500 text-sm mt-1">{errors.technology.message?.toString()}</p>}
                </div>

                {/* Live Link */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Live Link</label>
                    <Controller
                        name="liveLink"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-md"
                                placeholder="Enter live link"
                            />
                        )}
                    />
                    {errors.liveLink && <p className="text-red-500 text-sm mt-1">{errors.liveLink.message?.toString()}</p>}
                </div>

                {/* Code Link */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Code Link</label>
                    <Controller
                        name="codeLink"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-md"
                                placeholder="Enter code link"
                            />
                        )}
                    />
                    {errors.codeLink && <p className="text-red-500 text-sm mt-1">{errors.codeLink.message?.toString()}</p>}
                </div>

                {/* Project Description */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Project Description</label>
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (
                            <textarea
                                {...field}
                                className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out shadow-md"
                                rows={4}
                                placeholder="Enter project description"
                            />
                        )}
                    />
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message?.toString()}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 mt-4 text-lg bg-gray-600 text-green-600 rounded-lg shadow-md duration-200 ease-in-out"
                >
                    Update Project
                </button>
            </form>
        </div>
    );
};

export default UpdatePage;
