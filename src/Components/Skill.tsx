"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
    const [skills, setSkill] = useState([]);

    useEffect(() => {
        // Initialize AOS inside useEffect to ensure it only runs on the client
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });

        // Fetch skills data
        fetch("/skill.json")
            .then((res) => res.json())
            .then((data) => setSkill(data));
    }, []);

    return (
        <div className="container mx-auto py-16">
            <h1 className="text-start text-4xl font-extrabold py-3 dark:text-white text-black">Skill</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills?.map((skill: { name: string; image: string }) => (
                    <div
                        key={skill.name}
                        data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className="border dark:border-blue-500 border-blue-600 antialiased bg-[#1A1A1A] p-5 rounded-lg flex gap-3 justify-center items-center"
                    >
                        <Image
                            className="rounded-full"
                            src={skill.image}
                            alt="skill image"
                            width={40}
                            height={40}
                        />
                        <h1 className="text-sm text-white font-bold">{skill.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
