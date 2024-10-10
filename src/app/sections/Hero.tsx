"use client";
import React, { useState } from "react";
import Image from "next/image";
import resi from "@/app/assets/resi.jpeg";
import book from "@/app/assets/book.jpeg";
import sign from "@/app/assets/signup.jpeg";
import { content } from "../constant";
const Hero = () => {
  
  const [hoveredImage, setHoveredImage] = useState<
    "imageOne" | "imageTwo" | "imageThree" | null
  >(null);

  
  const [blurText, setBlurText] = useState(false);


  
  const defaultTitle = "Pathway to Productivity";
  const defaultDescription =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error modi fugit doloremque optio?";

  
  const { title, description } = hoveredImage
    ? content[hoveredImage]
    : { title: defaultTitle, description: defaultDescription };

  
  const handleHoverStart = (image: "imageOne" | "imageTwo" | "imageThree") => {
    setBlurText(true); 
    setTimeout(() => {
      setHoveredImage(image);
      setBlurText(false); 
    }, 300); 
  };

  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[linear-gradient(to_bottom,#EAEEFE,#e3cc70)] overflow-x-clip
">
      <div className="container mx-auto">
        <div className="md:flex items-center">
          {/* Left Side - Text Content */}
          <div className="md:w-[478px] mb-56 ml-10">
            <h1
              className={`text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 transition-all duration-300 ${
                blurText ? "blur-sm opacity-50" : "blur-none opacity-100"
              }`}
            >
              {title}
            </h1>
            <p
              className={`text-xl text-[#010D3E] tracking-tight mt-6 transition-all duration-300 ${
                blurText ? "blur-sm opacity-50" : "blur-none opacity-100"
              }`}
            >
              {description}
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Book a consultation now</button>
              <button className="btn btn-text hidden md:block">Learn more</button>
            </div>
          </div>

          {/* Right Side - Stacked Images with Hover Effect */}
          <div className="-mt-28 md:mt-0 md:h-[648px] md:flex-1 relative ml-20">
           
            <Image
              src={resi}
              alt="Resilience Image"
              width={180}
              height={180}
              className={`md:absolute md:h-[300px] md:w-auto md:max-w-none md:top-0 md:left-80 rounded-lg border-4 border-white shadow-lg transition-transform duration-300 ease-in-out ${
                hoveredImage === "imageOne" ? "z-20 scale-110" : "z-10"
              }`}
              onMouseEnter={() => handleHoverStart("imageOne")}
              onMouseLeave={() => setHoveredImage(null)}
            />

          
            <Image
              src={book}
              alt="Book Image"
              width={180}
              height={180}
              className={`md:absolute md:h-[300px] md:w-auto md:max-w-none md:top-40 md:left-60 rounded-lg border-4 border-white shadow-lg transition-transform duration-300 ease-in-out ${
                hoveredImage === "imageTwo" ? "z-20 scale-110" : "z-10"
              }`}
              onMouseEnter={() => handleHoverStart("imageTwo")}
              onMouseLeave={() => setHoveredImage(null)}
            />

           
            <Image
              src={sign}
              alt="Sign Up Image"
              width={180}
              height={180}
              className={`md:absolute md:h-[300px] md:w-auto md:max-w-none md:top-10 md:left-100 rounded-lg border-4 border-white shadow-lg transition-transform duration-300 ease-in-out ${
                hoveredImage === "imageThree" ? "z-20 scale-110" : "z-10"
              }`}
              onMouseEnter={() => handleHoverStart("imageThree")}
              onMouseLeave={() => setHoveredImage(null)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
