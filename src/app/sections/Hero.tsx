"use client";
import React, { useState } from "react";
import Image from "next/image";
import resi from "@/app/assets/resi.jpeg";
import book from "@/app/assets/book.jpeg";
import sign from "@/app/assets/signup.jpeg";

const Hero = () => {
  // State to track the hovered image
  const [hoveredImage, setHoveredImage] = useState<
    "imageOne" | "imageTwo" | "imageThree" | null
  >(null);

  // State to trigger the blur effect
  const [blurText, setBlurText] = useState(false);

  // Object storing content for each image
  const content = {
    imageOne: {
      title: "Pathway to Productivity",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, possimus aut.",
    },
    imageTwo: {
      title: "Unlock Your Potential",
      description:
        "Discover how resilience can help you thrive in challenging environments.",
    },
    imageThree: {
      title: "Stay Strong & Focused",
      description:
        "Resilience coaching to help you navigate life's most difficult moments.",
    },
  };

  // Fallback content when no image is hovered
  const defaultTitle = "Pathway to Productivity";
  const defaultDescription =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error modi fugit doloremque optio?";

  // Dynamically get the content based on hovered image
  const { title, description } = hoveredImage
    ? content[hoveredImage]
    : { title: defaultTitle, description: defaultDescription };

  // Handle hover start
  const handleHoverStart = (image: "imageOne" | "imageTwo" | "imageThree") => {
    setBlurText(true); // Start blur effect
    setTimeout(() => {
      setHoveredImage(image);
      setBlurText(false); // Remove blur effect after update
    }, 200); // Time for the blur transition
  };

  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#eac222,#EAEEFE_100%)] overflow-x-clip">
      <div className="container mx-auto">
        <div className="md:flex items-center">
          {/* Left Side - Text Content */}
          <div className="md:w-[478px] mb-56">
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
              <button className="btn btn-text">Learn more</button>
            </div>
          </div>

          {/* Right Side - Stacked Images with Hover Effect */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ml-20">
            {/* First Image (Bottom Layer) */}
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

            {/* Second Image (Middle Layer) */}
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

            {/* Third Image (Top Layer) */}
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
