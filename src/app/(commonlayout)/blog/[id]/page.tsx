"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const BlogDetails = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [blog, setBlog] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    console.log(blog)


    const { id } = useParams() // Get the dynamic id from the URL

    useEffect(() => {
        if (id) {
            const fetchBlog = async () => {
                try {
                    const res = await fetch(`https://blog-application-wine-omega.vercel.app/api/blogs/${id}`, {
                        method: 'GET',
                        headers: { 'Content-Type': 'application/json' },
                    });
                    const result = await res.json();
                    if (result?.data) {
                        setBlog(result.data); // Set blog data in state
                    } else {
                        setError('Blog not found');
                    }
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (err) {
                    setError('Failed to fetch blog');
                } finally {
                    setLoading(false);
                }
            };

            fetchBlog();
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
        <div className="bg-white dark:bg-gray-900 py-28 min-h-screen">
            <div className="container dark:text-white text-black mx-auto px-6 sm:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">{blog?.title}</h1>
                    <p className="text-lg mt-4">by {blog?.author?.name}</p>
                </div>

                {/* Placeholder for the image */}
                <div className="relative flex justify-center items-center mt-6">
                    <Image
                        src={blog?.image || ''}
                        alt={blog?.title || ''}
                        width={500}
                        height={500}
                        className="rounded-lg shadow-md"
                    />
                </div>

                {/* Content rendered as Markdown */}
                <div className="mt-2">
                    <ReactMarkdown className="prose w-full lg:prose-xl bg-gray-200 dark:bg-gray-600 p-10 rounded-lg dark:text-white text-black">
                        {blog?.content}
                    </ReactMarkdown>
                </div>

                {/* Author Info */}
                <div className="mt-8 text-start">
                    <h3 className="text-xl font-semibold">Author: {blog?.author?.name ?? "Kazi Fahim"}</h3>
                    <p className="text-md">{blog?.author?.email ?? "kazifahim661@gmail.com"}</p>
                </div>

                {/* Back Button */}
                <div className="mt-8 text-start">
                    <Link
                        href="/blog"
                        className="px-6 py-2 bg-gray-600 text-green-500 rounded-md transition duration-200"
                    >
                        Back to Blog
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
