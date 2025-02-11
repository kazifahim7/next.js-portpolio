

import Sidebar from "@/Components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Generated by create next app",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen my-2">
            <div className="flex flex-col md:flex-row">
             
                <div className="w-full md:w-[20%]">
                    <Sidebar />
                </div>

                
                <div className="w-full md:w-[80%] mr-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
