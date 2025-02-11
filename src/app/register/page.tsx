"use client";


import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // For the show/hide password toggle
import { toast } from 'sonner';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router =useRouter()
    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const onSubmit:SubmitHandler<FieldValues> = async (data) => {
        
        const id = toast.loading("creating....")
        try {
            const res = await fetch("https://blog-application-wine-omega.vercel.app/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const result = await res.json()
            console.log(result)
            if(result.data){
                toast.success("Register successful",{id})
                router.push("/login")
                reset()
            }else{
                toast.error(result?.data?.message || "something went wrong", { id })
            }
            
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error:any) {
            toast.error(error.message || "something went wrong",{id})
            
        }


        // Handle form submission logic here
    };

    return (
        <section className="bg-white">
            <div className="grid grid-cols-1">
                <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up to Celebration</h2>
                        <p className="mt-2 text-base text-gray-600">
                            Already have an account?{' '}
                            <Link href={'/login'} className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline">
                                Login
                            </Link>
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label className="text-base font-medium text-gray-900">Full Name</label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            {...register('name', { required: 'Full Name is required' })}
                                        />
                                        {errors.name && <p className="text-red-600 text-sm">{errors.name.message?.toString()}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-base font-medium text-gray-900">Email address</label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            placeholder="Enter email to get started"
                                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            {...register('email', { required: 'Email is required' })}
                                        />
                                        {errors.email && <p className="text-red-600 text-sm">{errors.email.message?.toString()}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-base font-medium text-gray-900">Password</label>
                                    <div className="mt-2.5 relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter your password"
                                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            {...register('password', { required: 'Password is required' })}
                                        />
                                        <span
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                        >
                                            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> }
                                        </span>
                                        {errors.password && <p className="text-red-600 text-sm">{errors.password.message?.toString()}</p>}
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-gray-600 border border-transparent rounded-md focus:outline-none"
                                    >
                                        Create free account
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
