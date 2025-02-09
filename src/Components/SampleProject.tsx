import Image from "next/image";
import Link from "next/link";


const SampleProject = async() => {
    const res = await fetch("https://blog-application-wine-omega.vercel.app/api/project",{next:{revalidate:30}})
    const projects= await res.json() || []
    console.log(projects)


    return (
        <div className="bg-white dark:bg-gray-900 py-28 container mx-auto">
            <h1 className="text-3xl lg:text-5xl text-start font-extrabold dark:text-white text-black">Recent Project</h1>
            
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    projects?.data?.slice(0, 3).map((project: { _id: string, name: string, image: string, description: string, liveLink :string}) => <div key={project._id} className="card  bg-gray-800 text-white  shadow-xl">
                        <figure>
                            <Image
                                width={600}
                                height={600}
                                src={project.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {project.name}
                            </h2>
                            <p>{project.description.slice(0,30)}........</p>
                            <div className="card-actions justify-end">
                                <Link href={project.liveLink} target="_blank" className="badge badge-outline">Live Link</Link>
                                <Link href={`/project/${project._id}`} className="badge badge-outline">Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            
            </div>
        </div>
    );
};

export default SampleProject;