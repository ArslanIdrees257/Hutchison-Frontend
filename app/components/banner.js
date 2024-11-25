"use client"
import react from "react";

const Banner=(props)=>{
    return (
        <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
      <p className="animate-fadein mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">Dogs and Origins</p>
      <p className="animate-fadein mt-6 text-lg/8 text-gray-600">&quot;Dogs & Origins is your ultimate resource for exploring diverse dog breeds, their fascinating origins, and unique traits. Dive into insightful blogs, discover interesting facts, and contribute to a meaningful cause by supporting guide dogs through donations. Celebrate the bond between humans and dogs with everything you need in one place!&quot;</p>
    </div>
  </div>
</div>

    );
}
export default Banner;