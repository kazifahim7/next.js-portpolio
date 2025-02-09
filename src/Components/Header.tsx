"use client"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import { FaCircle, FaCloudDownloadAlt, FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa6";


const Header = () => {
    return (
        <div className="">
            <div className="flex flex-col lg:flex-row-reverse gap-4 p-10  container mx-auto w-full">
                <DotLottieReact
                    className="lg:w-[80%]  lg:ml-7 lg:pl-7"
                    src="/animation2.json" 
                    loop
                    autoplay
                />

                <div className=" lg:w-[60%] dark:text-white text-black">
                    <p className="btn btn-outline border-none mb-10 rounded-3xl bg-slate-800 text-white border-">
                        <span className="relative inline-block">
                            <span
                                className="absolute inset-0 text-green-500 rounded-full animate-ping"
                                style={{ animationDuration: "2s", animationTimingFunction: "ease-in-out" }}
                            >
                                <FaCircle />
                            </span>
                            <span className="relative text-green-500">
                                <FaCircle />
                            </span>
                        </span>  Available for hire
                    </p>
                    <h1 className="lg:text-5xl text-3xl   font-extrabold pt-4">Hi,I am <span className="border-b-4 border-green-500 ">Kazi Fahim</span>
                        <br />

                    </h1>
                    <h1 className="lg:text-5xl text-3xl   font-extrabold pt-4"><span className="mt-2">a web developer from Bangladesh.</span></h1>
                    <p className="py-6  font-bold text-xl">
                        I am a passionate and dedicated Web Developer with a solid foundation in modern web technologies. I am committed to continuous learning and delivering high-quality solutions that enhance user experience and meet business goals.
                    </p>
                    <div className="space-x-4 grid grid-cols-3">

                        <a href={"/resume.pdf"} download={"Resume"} className="btn btn-outline bg-slate-800 text-xs lg:text-xl text-green-600 border-none">


                            <div className="flex gap-1 items-center justify-center">
                                <FaCloudDownloadAlt /><span className=" text-white">Resume</span>
                            </div>


                        </a>
                        <Link href={'https://www.linkedin.com/in/kazi-fahim'} className="btn btn-outline bg-slate-800 text-xs lg:text-xl text-green-600 border-none">
                            <div className="flex gap-1 items-center justify-center">
                                <FaLinkedin /><span className=" text-white">LinkedIn</span>
                            </div>
                        </Link>

                        
                        <Link href={'https://github.com/kazifahim7'} target="_blank" className="btn btn-outline bg-slate-800 text-xs lg:text-xl text-green-600 border-none">
                           
                            <div className="flex gap-1 items-center justify-center">
                                <FaGithub /><span className="text-white">GitHub</span>
                            </div>
                            
                            </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;