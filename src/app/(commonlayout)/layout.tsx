import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";







export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
}
