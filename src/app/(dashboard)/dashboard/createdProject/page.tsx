"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ProjectPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
     const [text,setText]=useState('')

    useEffect(() => {
        fetch("https://blog-application-wine-omega.vercel.app/api/project")
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


    const handleDelete =async (ProjectId:string) => {
     
        const id = toast.loading("deleting....")
        try {
            const res = await fetch( `https://blog-application-wine-omega.vercel.app/api/project/${ProjectId}`, {
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
                Created Projects
            </h1>
            <div className="overflow-x-auto mt-4 text-white">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-base-200 text-white">
                            <th>Name</th>
                            <th>Live Link</th>
                            <th>Code Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render rows dynamically */}
                        {projects.map((project: { _id: string, name: string, codeLink: string, liveLink: string }) => (
                            <tr key={project._id} className="bg-base-200">
                                <th>{project.name}</th>
                                <td className="underline">
                                    <Link href={project.liveLink || ""}>Live Link</Link>
                                </td>
                                <td className="underline">
                                    <Link href={project.codeLink || ""}>Code Link</Link>
                                </td>
                                <td>
                                    <Link href={`/dashboard/createdProject/${project._id}`} className="btn bg-gray-400 text-white">Update</Link>
                                    <button onClick={() => handleDelete(project._id)} className="btn bg-red-500 text-white">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectPage;
