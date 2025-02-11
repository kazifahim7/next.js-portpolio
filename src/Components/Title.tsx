"use client"
import Marquee from "react-fast-marquee";

const Title = () => {
    return (
        <div className=" mt-16 py-10">
           <Marquee className="h-24">
               
                    <h1 className="lg:text-7xl text-2xl font-extrabold">Mern Stack developer<span className="text-green-500">.</span></h1>
                    <h1 className="lg:text-7xl text-2xl font-extrabold">Frontend Developer<span className="text-green-500">.</span></h1>
                    <h1 className="lg:text-7xl text-2xl font-extrabold">Backend Developer<span className="text-green-500">.</span></h1>
                    <h1 className="lg:text-7xl text-2xl font-extrabold">Full Stack Developer<span className="text-green-500">.</span></h1>
              
           </Marquee>
           <Marquee direction="right" className="h-28">
                
                    <h1 className="lg:text-7xl text-2xl font-extrabold">React.js developer<span className="text-green-500">.</span></h1>
                    <h1 className="lg:text-7xl text-2xl font-extrabold">Next.js Developer<span className="text-green-500">.</span></h1>
                    <h1 className="lg:text-7xl text-2xl font-extrabold">Node.js Developer<span className="text-green-500">.</span></h1>
                    <h1 className="lg:text-7xl text-2xl font-extrabold">Full Stack Developer<span className="text-green-500">.</span></h1>
               
           </Marquee>
        </div>
    );
};

export default Title;