/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Link from "next/link";
import { useState } from "react";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-10 bg-gray-50 dark:bg-gray-900 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 container">
                <div className=" text-start">
                    <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                         FAQs
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                        Answers to commonly asked questions about MERN stack development.
                    </p>
                </div>

                <div className=" mt-8 space-y-4 md:mt-16">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="flex text-lg font-semibold text-black dark:text-white">{faq.question}</span>
                                <svg
                                    className={`w-6 h-6 text-gray-400 transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                    <p className="dark:text-gray-300">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 dark:text-gray-300 text-base mt-9">
                    Didn’t find the answer you are looking for?{' '}
                    <Link
                        href={'/contact'}
                        className="font-medium text-blue-600 dark:text-blue-400 transition-all duration-200 hover:text-blue-700 dark:hover:text-blue-500 focus:text-blue-700 dark:focus:text-blue-500 hover:underline"
                    >
                        Contact our support
                    </Link>
                </p>
            </div>
        </section>
    );
};

const faqData = [
    {
        question: "What is the MERN stack?",
        answer: "MERN stands for MongoDB, Express.js, React.js, and Node.js, a popular stack for building full-stack web applications."
    },
    {
        question: "How do I set up authentication in a MERN app?",
        answer: "You can use JWT (JSON Web Tokens) for authentication in your MERN app. Firebase authentication is another option."
    },
    {
        question: "What is the best way to manage state in a React frontend?",
        answer: "You can use React Context API, Redux Toolkit, or Zustand for state management depending on your application's complexity."
    },
    {
        question: "How do I connect my React frontend to my Node.js backend?",
        answer: "You can use Axios or Fetch API to make HTTP requests from React to your Express.js server, which communicates with MongoDB."
    },
    {
        question: "What are common security best practices for a MERN application?",
        answer: "Some best practices include using environment variables, validating user input, implementing CORS, and securing JWT tokens properly."
    }
];

export default FAQSection;
