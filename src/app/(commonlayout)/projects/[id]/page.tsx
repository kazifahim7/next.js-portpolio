"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ProjectDetailsPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const pathname = usePathname();


    const id = pathname?.split("/").pop();

    useEffect(() => {
        if (id) {
            const fetchProject = async () => {
                try {
                    const res = await fetch(`https://blog-application-wine-omega.vercel.app/api/project/${id}`, {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    });
                    const result = await res.json();
                    if (result?.data) {
                        setProject(result.data);
                    } else {
                        setError("Project not found");
                    }
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (err) {
                    setError("Failed to fetch project");
                } finally {
                    setLoading(false);
                }
            };

            fetchProject();
        }
    }, [id]);

    if (loading) {
        return <div className="bg-white dark:bg-gray-900 py-28 min-h-screen grid grid-cols-1 justify-center ">
            <div className="loading loading-spinner text-center text-green-500 loading-lg container mx-auto"></div>
        </div>
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <section className="py-16 bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Project Image */}
                        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={project?.image}
                                alt={project?.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>

                        {/* Project Information */}
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{project?.name}</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">{project?.description}</p>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Technologies</h3>
                                <ul className="flex flex-wrap gap-4">
                                    {project?.technology?.map((tech: string, index: number) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-full"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Links</h3>
                                <div className="flex gap-6">
                                    <a
                                        href={project?.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-gray-600 text-green-500 font-semibold rounded-lg shadow-md"
                                    >
                                        Live Site
                                    </a>
                                    <a
                                        href={project?.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-gray-600 text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-700"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetailsPage;
