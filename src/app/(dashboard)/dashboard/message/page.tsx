"use client";

import { useEffect, useState } from "react";

const MessagePage = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch("https://blog-application-wine-omega.vercel.app/api/message/all-message", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then(res => res.json())
            .then(data => setMessages(data.data || [])) 
            .catch(error => console.error("Error fetching messages:", error));
    }, []);

    if (messages.length === 0) {
        return (
            <div className="py-28 min-h-screen grid grid-cols-1 justify-center">
                <div className="loading loading-spinner text-center text-green-500 loading-lg container mx-auto"></div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-900 shadow-lg rounded-xl border border-gray-700">
            <h1 className="text-center text-4xl font-extrabold text-white mb-6">All Messages</h1>

            <div className="space-y-4">
                {messages.map((message : {_id:string,name:string,email:string,description:string}) => (
                    <div key={message._id} className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-600">
                        <h2 className="text-lg font-bold text-green-400">{message.name}</h2>
                        <p className="text-gray-300"><strong>Email:</strong> {message.email}</p>
                        <p className="text-gray-400"><strong>Message:</strong> {message.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessagePage;
