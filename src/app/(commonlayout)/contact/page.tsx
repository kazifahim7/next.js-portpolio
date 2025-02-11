/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ContactForm = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const onSubmit : SubmitHandler<FieldValues>  =async (data ) => {
        console.log(data);
        const id = toast.loading("sending...")
        try {
            const res = await fetch("https://blog-application-wine-omega.vercel.app/api/message/send-message",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            })
            const result= await res.json()
            console.log(result)

            if(result.data){
                toast.success("message send successful",{id})
                reset()
            }


            
        } catch (error:any) {
            toast.error(error.message || "something went wrong",{id})
        }
        
    };

    return (
        <section className="py-10 bg-gray-100 dark:bg-gray-900 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">Contact us</h2>
                </div>

                <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                    <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 lg:grid-cols-3">
                        <div className="overflow-hidden bg-white dark:bg-gray-700 rounded-xl">
                            <div className="p-6">
                                <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <p className="mt-6 text-lg font-medium text-gray-900 dark:text-white">+880-1633052196</p>
                                
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white dark:bg-gray-700 rounded-xl">
                            <div className="p-6">
                                <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <p className="mt-6 text-lg font-medium text-gray-900 dark:text-white">kazifahim661@gmail.com</p>
                               
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white dark:bg-gray-700 rounded-xl">
                            <div className="p-6">
                                <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                     <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900 dark:text-white">Feni Bangladesh</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 overflow-hidden bg-white dark:bg-gray-700 rounded-xl">
                        <div className="px-6 py-12 sm:p-12">
                            <h3 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">Send  a message</h3>

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-14">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                    <div>
                                        <label className="text-base font-medium text-gray-900 dark:text-white"> Your name </label>
                                        <div className="mt-2.5 relative">
                                            <input
                                                {...register("name", { required: "Name is required" })}
                                                type="text"
                                                placeholder="Enter your full name"
                                                className="block w-full px-4 py-4 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                            />
                                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message?.toString()}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-base font-medium text-gray-900 dark:text-white"> Email address </label>
                                        <div className="mt-2.5 relative">
                                            <input
                                                {...register("email", { required: "Email is required" })}
                                                type="email"
                                                placeholder="Enter your email address"
                                                className="block w-full px-4 py-4 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                            />
                                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message?.toString()}</p>}
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className="text-base font-medium text-gray-900 dark:text-white"> Message </label>
                                        <div className="mt-2.5 relative">
                                            <textarea
                                                {...register("description", { required: "description is required" })}
                                                placeholder="Enter your message"
                                                className="block w-full px-4 py-4 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                                                rows={4}
                                            />
                                            {errors.description && <p className="text-red-500 text-sm">{errors.description.message?.toString()}</p>}
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <button
                                            type="submit"
                                            className="btn btn-outline w-full bg-slate-800 text-xs lg:text-xl text-green-600 border-none"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
