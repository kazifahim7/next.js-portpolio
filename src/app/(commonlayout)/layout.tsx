import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "DevFahim",
  description: "This is me, Kazi Fahim. I am a MERN stack developer.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="min-h-screen">
        {children}
      </div>
      
      <Footer></Footer>
    </div>
  );
}
