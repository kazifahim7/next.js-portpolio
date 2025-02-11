
import React from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'


// Example data (You should replace this with actual API fetch logic)


const BlogDetails =async ({params}:{params:{id:string}}) => {
 

    const id = await params.id
    const res = await fetch(`https://blog-application-wine-omega.vercel.app/api/blogs/${id}`, { method: "GET", headers: { "Content-Type": "application/json" } })
    const result = await res.json()
    const blog = result?.data

    console.log(blog)
    
 
    

    return (
        <div className='bg-white dark:bg-gray-900 py-28 min-h-screen   '>
            <div className="container dark:text-white text-black mx-auto px-6 sm:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">{blog?.title}</h1>
                    <p className="text-lg mt-4 ">by {blog?.author?.name}</p>
                </div>

                {/* Placeholder for the image */}
                <div className="relative flex justify-center items-center mt-6">
                    <Image
                        src={blog?.image || ""} // Replace with your actual image URL
                        alt={blog?.title || ''}
                        width={500}
                        height={500}
                        className="rounded-lg shadow-md"
                    />
                </div>

                {/* Content rendered as Markdown */}
                <div className="mt-2">
                    <ReactMarkdown className="prose lg:prose-xl bg-gray-600  p-10 rounded-lg dark:text-white text-black">
                        {blog?.content}
                    </ReactMarkdown>
                </div>

                {/* Author Info */}
                <div className="mt-8 text-start">
                    <h3 className="text-xl font-semibold ">Author: {blog?.author?.name}</h3>
                    <p className="text-md">{blog?.author?.email}</p>
                </div>

                {/* Back Button */}
                <div className="mt-8 text-start">
                    <Link href={'/blog'}

                        className="px-6 py-2 bg-gray-600 text-green-500 rounded-md  transition duration-200"
                    >
                        Back to Blog
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
