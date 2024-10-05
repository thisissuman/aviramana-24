"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "../constant";


// Single Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative p-7 md:m-2 bg-[#34220b] text-white rounded-lg shadow-md w-4/5 ">
      <motion.div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2"
        /* whileHover={{ scale: 1.1 }} */
      >
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full border-2 border-orange-600"
          width={64}
          height={64}
        />
        <div className="absolute -bottom-2 right-2 bg-orange-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-xl">❝</span>
        </div>
      </motion.div>
      <p className="mt-8 text-center philosopher-regular ">{testimonial.description}</p>
      <p className="mt-8 text-center font-bold philosopher-bold">{testimonial.name}</p>
    </div>
  );
};

// Main Testimonial Section Component
const TestimonialSection = () => {
  return (
    <div className="w-full  bg-gradient-to-t from-[#e7b877] py-12 items-center ">
      <h2 className="text-center  mb-2 text-3xl font-bold text-gray-900 philosopher-bold">
        What Our Customers Say
      </h2>
      {/* Orange Line */}
      <div className="flex justify-center mb-8">
        <div className="w-24 h-[3px] bg-orange-400"></div>
      </div>
      <div className="relative overflow-hidden  md:pt-10">
        {/* Testimonial Slider */}
       {/*  <motion.div
          className="flex gap-6"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%", "-200%", "0%"] }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
        ></motion.div> */}
        <div className="flex flex-wrap md:flex-nowrap gap-6 py-10 pl-14">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} />
          ))}
        </div>

        {/* Fade effect on the sides */}
       {/*  <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#091b2e]"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#091b2e]"></div> */}
      </div>
    </div>
  );
};

export default TestimonialSection;
