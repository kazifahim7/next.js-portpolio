"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./Theme";
import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";



export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const path = usePathname();
    interface CustomJwtPayload {
        role: string;

    }
    const  [roles,setRoles]=useState('')

    

    useEffect(()=>{
        const token = localStorage.getItem("token");

        if (token) {
            // Decode the token and cast it to the CustomJwtPayload type
            const decoded = jwtDecode<CustomJwtPayload>(token);
            console.log(decoded);
           
            setRoles(decoded.role)
        } 


    },[roles])


    

    // Navigation Links
    const navLinks = useMemo(
        () => [
            { name: "Home", href: "/" },
            { name: "projects", href: "/projects" },
            { name: "blog", href: "/blog" },
            { name: "contact", href: "/contact" },
        ],
        []
    );


    const renderAuthButton = () =>
        roles === "admin" ? (
            <button onClick={() => {
                localStorage.removeItem("token")
                setRoles('')
                toast.success("logout successful")
            }} className="text-xl font-semibold text-gray-900 dark:text-white">
                Logout <span aria-hidden="true">&rarr;</span>
            </button>
        ) : (
            <Link href="/login" className="text-xl font-semibold text-gray-900 dark:text-white">
                Login <span aria-hidden="true">&rarr;</span>
            </Link>
        );

    return (
        <header className="sticky top-0 w-full z-50 bg-white dark:bg-gray-900">
            <nav className="container mx-auto flex items-center justify-between p-6 lg:px-8">

                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <div className="flex flex-row-reverse lg:flex-row items-center justify-start gap-2">
                            <Image
                                src="https://i.ibb.co/Mc150s0/fahim.jpg"
                                alt="DevFahim Logo"
                                className="w-12 border-2 rounded-full border-green-900"
                                width={100}
                                height={100}
                            />
                            <h4 className="font-bold text-gray-900 dark:text-white">DevFahim</h4>
                        </div>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 dark:text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="size-6" />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <PopoverGroup className="hidden lg:flex lg:gap-x-2">
                    {navLinks.map(({ name, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`block rounded-lg px-3 py-2 text-xl font-semibold 
                                ${path === href ? "text-[#22C55E]" : "text-gray-900 dark:text-white"}`}
                        >
                            {name}
                        </Link>
                    ))}

                    {roles === "admin" && (
                        <Link
                            href="/dashboard/createProject"
                            className="block rounded-lg px-3 py-2 text-xl font-semibold text-gray-900 dark:text-white "
                        >
                            Dashboard
                        </Link>
                    )}
                </PopoverGroup>

                {/* Desktop Auth Buttons */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5">
                    <div>
                        <ThemeSwitcher></ThemeSwitcher>
                    </div>
                    {renderAuthButton()}
                </div>
            </nav>

            {/* Mobile Menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10 bg-black opacity-25" />
                <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full sm:max-w-sm bg-white dark:bg-gray-900 px-6 py-6">

                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex flex-row-reverse lg:flex-row items-center justify-start gap-2">
                            <Image
                                src="https://i.ibb.co/Mc150s0/fahim.jpg"
                                alt="DevFahim Logo"
                                className="w-12 border-2 rounded-full border-green-900"
                                width={100}
                                height={100}
                            />
                            <h4 className="font-bold text-gray-900 dark:text-white">DevFahim</h4>
                        </div>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-900 dark:text-white"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="size-6" />
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="mt-10 space-y-4">
                        {navLinks.map(({ name, href }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block rounded-lg px-3 py-2 text-xl font-semibold 
                                    ${path === href ? "text-[#22C55E]" : "text-gray-900 dark:text-white"}`}
                            >
                                {name}
                            </Link>
                        ))}

                        {roles === "admin" && (
                            <Link
                                href="/dashboard/createProject"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block rounded-lg px-3 py-2 text-xl font-semibold text-gray-900 dark:text-white "
                            >
                                Dashboard
                            </Link>
                        )}
                    </div>

                    {/* Mobile Auth Buttons */}
                    <div className="mt-6"> <div>
                        <ThemeSwitcher></ThemeSwitcher>
                    </div>{renderAuthButton()}</div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
