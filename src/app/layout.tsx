import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/PROVIDER/theme-provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
    title: "DevFahim",
    description: "This is me, Kazi Fahim. I am a MERN stack developer.",
};

const nunito = JetBrains_Mono({
    weight: ["400", "500", "600", "700", "800"],
    style: "normal",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en"  suppressHydrationWarning> 
        
            <body className={nunito.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    {children}
                    <Toaster></Toaster>
                </ThemeProvider>
            </body>
        </html>
    );
}
