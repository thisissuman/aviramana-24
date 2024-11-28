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
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[linear-gradient(to_bottom,#EAEEFE,#e3cc70)] overflow-x-clip">
      <div className="container mx-auto px-4"> {/* Added padding for small screens */}
        <div className="flex flex-col md:flex-row items-center"> {/* Changed to flex-col on small screens */}
          {/* Left Side - Text Content */}
          <div className="w-full md:w-[478px] mb-10 md:mb-56"> {/* Adjusted margins */}
            <h1
              className={`text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 transition-all duration-300 ${
                blurText ? "blur-sm opacity-50" : "blur-none opacity-100"
              }`}
            >
              {title}
            </h1>
            <p
              className={`text-base md:text-xl text-[#010D3E] tracking-tight mt-4 md:mt-6 transition-all duration-300 ${
                blurText ? "blur-sm opacity-50" : "blur-none opacity-100"
              }`}
            >
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 items-start mt-6">
              <button className="btn btn-primary w-full sm:w-auto">Book a consultation now</button>
              <button className="btn btn-text hidden md:block w-full sm:w-auto">Learn more</button>
            </div>
          </div>

          {/* Right Side - Stacked Images with Hover Effect */}
          <div className="w-full md:flex-1 relative mt-10 md:mt-0 flex justify-center"> {/* Center images on small screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> {/* Use grid for images */}
              <Image
                src={resi}
                alt="Resilience Image"
                width={180}
                height={180}
                className={`w-full h-auto rounded-lg border-4 border-white shadow-lg transition-transform duration-300 ease-in-out ${
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
                className={`w-full h-auto rounded-lg border-4 border-white shadow-lg transition-transform duration-300 ease-in-out ${
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
                className={`w-full h-auto rounded-lg border-4 border-white shadow-lg transition-transform duration-300 ease-in-out ${
                  hoveredImage === "imageThree" ? "z-20 scale-110" : "z-10"
                }`}
                onMouseEnter={() => handleHoverStart("imageThree")}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;