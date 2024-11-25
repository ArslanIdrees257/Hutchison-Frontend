"use client"
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import react from "react"
export default function AboutUs(){
    return (
<>
<Header/>

<div className="mx-auto max-w-2xl mt-5 py-14 lg:text-center">
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl  underline lg:text-balance">About Us</p>
       </div>

       <div className="container mx-auto  mb-4 text-justify">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Dogs & Origins</h2>
      <p className="mb-4">
        Your ultimate destination for everything you need to know about dogs and their incredible stories. Our mission is to celebrate the bond between humans and dogs by sharing fascinating insights about various dog breeds, their origins, and their unique traits.
      </p>
      <p className="mb-4">
      But we’re more than just a hub for dog enthusiasts—we’re also committed to making a difference. At Dogs & Origins, we proudly support guide dogs in the UK, recognizing the life-changing role they play for individuals with visual impairments. These incredible animals provide independence, confidence, and companionship, and every donation made through our platform goes directly toward their training and care.
      </p>
      
      <h2 className="text-xl font-semibold text-gray-900 mb-2">What We Offer</h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li><strong>Explore Dog Breeds:</strong> Learn about your favorite breeds, their origins, and what makes each of them so special.</li>
        <li><strong>Insightful Blogs:</strong> Dive into engaging stories, tips, and fun facts about dogs and their relationship with humans.</li>
        <li><strong>Make an Impact:</strong> With our easy-to-use <span className="font-bold text-blue-600">Donate</span> option, directly support guide dog programs in the UK.</li>
      </ul>
      
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Why We Care</h2>
      <p className="mb-4">
        At <span className="font-bold">Dogs & Origins</span>, we believe that dogs aren’t just pets—they’re family. Supporting guide dogs is our way of giving back to these incredible animals that give so much to us.
      </p>
      
      <h2 className="text-xl font-semibold text-Gray-900 mb-2">Join Our Mission</h2>
      <p className="mb-4">
        Whether you’re here to explore, learn, or contribute, we’re excited to have you join our community of dog lovers. Together, we can celebrate the history of man’s best friend and make a meaningful impact on their future.
      </p>
      
      <a href="./donate" className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        Donate to Guide Dogs
      </a>
    </div>
    <Footer/>
</>
    );
}