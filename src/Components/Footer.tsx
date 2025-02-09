"use client"
import { CiHeart } from "react-icons/ci";


const Footer = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 ">
      <div className="flex justify-between max-w-7xl mx-auto">
        <p className="mt-5 text-black dark:text-white xl:ml-6 xl:mt-0">
          © Copyright {`${new Date().getFullYear()}`} <span className="text-blue-500">@kaziFahim</span>
        </p>
        <div className="mt-5 text-black dark:text-white xl:ml-6 xl:mt-0 flex items-center gap-3">
          <h3>Made By</h3>
          <div className="text-red-600 text-2xl">
            <CiHeart ></CiHeart>
          </div>
          <h3 className="text-black dark:text-white">DevFahim</h3>
        </div>
      </div>
    </section>
  );
};

export default Footer;
