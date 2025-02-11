'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { toast } from 'sonner'

const Login = () => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm()

    // Manage password visibility toggle
    const [showPassword, setShowPassword] = useState(false)
    const router=useRouter()

    // Handle form submission
    const onSubmit: SubmitHandler<FieldValues> = async(data) => {
        console.log(data)
        const id = toast.loading("creating....")
        try {
            const res = await fetch("https://blog-application-wine-omega.vercel.app/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    
                },
                credentials:"include",
                body: JSON.stringify(data)
            })
            const result = await res.json()
            console.log(result)
            if (result.data) {
                localStorage.setItem("token",result?.data?.token)
                toast.success("Login successful", { id })
                router.push("/")
                reset()
            } else {
                toast.error(result?.data?.message || "something went wrong", { id })
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message || "something went wrong", { id })

        }
        // Add your login logic here
    }

    return (
        <section className="py-10 bg-gray-50 min-h-screen sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Welcome Back!
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        Login to your account
                    </p>
                </div>

                <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                    <div className="overflow-hidden bg-white rounded-md shadow-md">
                        <div className="px-4 py-6 sm:px-8 sm:py-7">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="space-y-5">
                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="text-base font-medium text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                    />
                                                </svg>
                                            </div>

                                            <input
                                                type="email"
                                                id="email"
                                                {...register('email', { required: 'Email is required' })}
                                                placeholder="Enter email to get started"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-red-600 text-sm">{errors.email.message?.toString()}</p>
                                        )}
                                    </div>

                                    {/* Password Field */}
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="text-base font-medium text-gray-900">
                                                Password
                                            </label>

                                        </div>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                    />
                                                </svg>
                                            </div>

                                            <input
                                                type={showPassword ? "text" : "password"}
                                                id="password"
                                                {...register('password', { required: 'Password is required' })}
                                                placeholder="Enter your password"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                            />

                                            {/* Password Visibility Toggle */}
                                            <div
                                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                                onClick={() => setShowPassword(prev => !prev)}
                                            >
                                                {showPassword ? <FaEye className="w-5 h-5 text-gray-500" /> : <FaEyeSlash className="w-5 h-5 text-gray-500" /> }
                                            </div>
                                        </div>
                                        {errors.password && (
                                            <p className="text-red-600 text-sm">{errors.password.message?.toString()}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-gray-600 border border-transparent rounded-md"
                                        >
                                            Log in
                                        </button>
                                    </div>

                                    {/* Link to Create Account */}
                                    <div className="text-center">
                                        <p className="text-base text-gray-600">
                                            Don’t have an account?{' '}
                                            <Link
                                                href={'/register'}
                                                title="Create Account"
                                                className="font-medium text-black transition-all duration-200 hover:text-red-600 hover:underline"
                                            >
                                                Create a free account
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
