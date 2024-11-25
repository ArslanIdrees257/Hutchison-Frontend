"use client"
import Image from "next/image";
import Header from "./components/header";
import Banner from "./components/banner";
import Card from "./components/card";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
       <Header/>
       <Banner />
       <div className=" grid lg:grid-cols-4 sm:grid-cols-2  gap-3 p-10">
       <div className="m-1 py-2 h-24 bg-blue-500 relative   hover:bg-blue-700 rounded">
       <a href="./pages/dogs" className="btn grid  text-xl absolute top-[33%] justify-center text-white font-bold w-[100%] ">
        Dogs List
       </a>

       </div>
       <div className="m-1 py-2 h-24 bg-blue-500 relative   hover:bg-blue-700 rounded">
       <a href="./pages/about-us" className="btn grid  text-xl absolute top-[33%] justify-center text-white font-bold w-[100%] ">
        About Us
       </a>
       </div>
       <div className="m-1 py-2 h-24 bg-blue-500 relative   hover:bg-blue-700 rounded">
       <a href="./pages/blogs" className="btn grid  text-xl absolute top-[33%] justify-center text-white font-bold w-[100%] ">
       Blogs
       </a>
       </div>
       <div className="m-1 py-2 h-24 bg-blue-500 relative   hover:bg-blue-700 rounded">
       <a href="./pages/donate"  className="btn grid  text-xl absolute top-[33%] justify-center text-white font-bold w-[100%] ">
        Donate
       </a>
       </div>
       

       </div>
       <Footer/>
    </>
 
    
  );
}
