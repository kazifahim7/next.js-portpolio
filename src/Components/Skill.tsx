"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const Skill = () => {

    const [skills,setSKill]=useState([])

    useEffect(()=>{
        fetch('/skill.json',{cache:"force-cache"})
        .then(res=>res.json())
        .then(data=>setSKill(data))
    },[])
  
    console.log(skills)
  




    return (
        <div className="container mx-auto py-16">
            <h1 className="text-start  text-4xl font-extrabold py-3 dark:text-white text-black">Skill</h1>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
                {skills?.map((skill : {name:string , image:string}) => <div key={skill.name} className="border dark:border-blue-500 border-blue-600 antialiased bg-[#1A1A1A]  p-5 rounded-lg flex gap-3 justify-center items-center">
                    <Image className="rounded-full" src={skill.image} alt="skill image" width={40} height={40}></Image>
                    <h1 className="text-sm text-white  font-bold">{skill.name}</h1>
                </div>
                )}
                
            </div>
            
        </div>
    );
};

export default Skill;