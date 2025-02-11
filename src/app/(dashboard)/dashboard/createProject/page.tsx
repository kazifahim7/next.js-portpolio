'use client';
import React from 'react';
import { useForm, Controller, SubmitHandler, FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const CreateProjectForm = () => {
    const {
        control,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const allTechnologies = [
        "React", "Node.js", "Next.js", "MongoDB", "Express.js", "Python", "Django", "Angular", "Vue.js", "JavaScript", "TypeScript"
    ];

    const onSubmit: SubmitHandler<FieldValues> = async(data) => {
        console.log(data);
        const id = toast.loading("creating....")
        try {
            const res = await fetch("https://blog-application-wine-omega.vercel.app/api/project/create-project", {
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
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl border border-gray-300">
            <h2 className="text-center text-black mb-6">Create a New Project</h2>

            <form onSubmit={handleSubmit(onSubmit)} className='text-black'>

                {/* Project Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Project Name</label>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: 'Project name is required' }}
                        defaultValue="" // Set initial value to empty string to avoid uncontrolled to controlled warning
                        render={({ field }) => (
                            <input
                                {...field}
                                className="w-full p-2 mt-1 border border-gray-300 rounded bg-white"
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
                        rules={{ required: 'Image URL is required' }}
                        defaultValue="" // Set initial value to empty string to avoid uncontrolled to controlled warning
                        render={({ field }) => (
                            <input
                                {...field}
                                className="w-full p-2 mt-1 border border-gray-300 rounded bg-white"
                                placeholder="Enter image URL"
                            />
                        )}
                    />
                    {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message?.toString()}</p>}
                </div>

                {/* Live Link */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Live Link</label>
                    <Controller
                        name="liveLink"
                        control={control}
                        rules={{ required: 'Live link is required' }}
                        defaultValue="" // Set initial value to empty string to avoid uncontrolled to controlled warning
                        render={({ field }) => (
                            <input
                                {...field}
                                className="w-full p-2 mt-1 border border-gray-300 rounded bg-white"
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
                        rules={{ required: 'Code link is required' }}
                        defaultValue="" // Set initial value to empty string to avoid uncontrolled to controlled warning
                        render={({ field }) => (
                            <input
                                {...field}
                                className="w-full p-2 mt-1 border border-gray-300 rounded bg-white"
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
                        rules={{ required: 'Description is required' }}
                        defaultValue="" // Set initial value to empty string to avoid uncontrolled to controlled warning
                        render={({ field }) => (
                            <textarea
                                {...field}
                                className="w-full p-2 mt-1 border border-gray-300 rounded bg-white"
                                rows={4}
                                placeholder="Enter project description"
                            />
                        )}
                    />
                    {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message?.toString()}</p>}
                </div>

                {/* Technologies Used */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Technologies Used</label>
                    <Controller
                        name="technology"
                        control={control}
                        rules={{ required: 'Please select at least one technology' }}
                        defaultValue={[]} // Initialize as empty array to avoid uncontrolled to controlled warning
                        render={({ field }) => (
                            <div className="flex flex-wrap gap-4">
                                {allTechnologies.map((tech, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            {...field}
                                            type="checkbox"
                                            value={tech}
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

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 mt-4 text-lg bg-gray-600 text-green-500 rounded"
                >
                    Submit Project
                </button>
            </form>
        </div>
    );
};

export default CreateProjectForm;
