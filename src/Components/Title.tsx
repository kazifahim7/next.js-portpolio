"use client"
import Marquee from "react-fast-marquee";

const Title = () => {
    return (
        <div className=" mt-16 py-10">
           <Marquee>
                <div className="dark:text-white text-black flex">
                    <h1 className="lg:text-7xl text-2xl font-extrabold">Mern Stack developer<span className="text-green-500">.</span></h1>
                    <h1 className="lg:text-7xl text-2xl font-extrabold">Frontend Developer<span className="text-green-500">.</span></h1>
                    <h1 className="lg:text-7xl text-2xl font-extrabold">Backend Developer<span className="text-green-500">.</span></h1>
                    <h1 className="lg:text-7xl text-2xl font-extrabold">Full Stack Developer<span className="text-green-500">.</span></h1>
                </div>
           </Marquee>
           <Marquee direction="right" className="pt-3">
                <div className="dark:text-white text-black flex">
                    <h1 className="lg:text-7xl text-2xl font-extrabold">React.js developer<span className="text-green-500">.</span></h1>
                    <h1 className="lg:text-7xl text-2xl font-extrabold">Next.js Developer<span className="text-green-500">.</span></h1>
                    <h1 className="lg:text-7xl text-2xl font-extrabold">Node.js Developer<span className="text-green-500">.</span></h1>
                    <h1 className="lg:text-7xl text-2xl font-extrabold">Full Stack Developer<span className="text-green-500">.</span></h1>
                </div>
           </Marquee>
        </div>
    );
};

export default Title;