"use client"
import react from "react";
import Header from "@/app/components/header";
import Image from "next/image";
import Footer from "@/app/components/footer";
export default function Blog(){
 return(<>
 <Header/>
 <div className="mx-auto max-w-2xl mt-5 p-14 lg:text-center">
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl  underline lg:text-balance">Blogs</p>
       </div>
<div className="grid px-10 grid-cols-2 ">
    <div className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Fascinating Origins of Man’s Best Friend</h2>
            <p className="text-sm text-gray-500 mb-4">Posted by <em>Dogs and Origin</em> on November 2024 </p>
            <p className="mb-4">
                Dogs have been by our side for thousands of years, evolving from wild wolves to become our most loyal companions. But have you ever wondered where your favorite breeds come from? Each dog breed carries a rich history and a unique origin story that reflects its traits and temperament today.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">A Journey Through History</h3>
            <p className="mb-4">The domestication of dogs began over 15,000 years ago, when humans and wolves first formed a bond. Early dogs were not just pets but essential partners in hunting, herding, and protecting. Over centuries, selective breeding shaped specific traits, giving rise to the diverse breeds we know and love today.</p>
            <p className="mb-4">For example, the regal Afghan Hound originated in the mountains of Afghanistan, prized for its speed and agility in hunting. Meanwhile, the playful Beagle traces its roots to ancient Greece, where it was bred for its impeccable scenting abilities. Even the tiny Chihuahua has a big story, believed to descend from the ancient Techichi dogs of Mexico.</p>
        </div>
    </div>


    <div> 
        <Image height="100%" src={require('../../images/istockphoto-1138524301-612x612-removebg-preview.png')} alt=""/>
    </div>
    <div className="pl-4">
        <Image height="100%" src={require("../../images/Banner.jpeg")} alt=""/>
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Why Origins Matter</h3>
      <p className="mb-4">Understanding a dog’s origin isn’t just fascinating; it can also help you care for your furry friend. Breeds developed for herding, like Border Collies, thrive on mental stimulation and physical activity, while lapdogs, like Pugs, are content with a cozy couch and your company. Knowing where your dog comes from gives insight into their behavior, needs, and how to create the best life for them.</p>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Supporting Dogs Everywhere</h3>
      <p className="mb-4">At Dogs & Origins, we celebrate not just the history of breeds but also their future. Through our platform, you can support guide dog programs that provide vital assistance to those in need. Every donation helps train and care for these incredible animals, ensuring they continue to make a difference in people’s lives.</p>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Join Us on This Journey</h3>
      <p className="mb-4">Dogs & Origins is more than a website; it’s a community for dog lovers. Explore our breed profiles, read engaging stories, and learn about the deep bond between humans and dogs. Together, let’s honor the legacy of man’s best friend and contribute to a brighter future for all dogs.</p>
    </div>
    

    </div>

    <Footer/>
 </>);
}