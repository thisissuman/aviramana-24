import React from "react";
import logo from "@/app/assets/logo.png";
import aviramn24 from "@/app/assets/aviraman24.svg";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block philosopher-bold">
          Book your slot today
        </p>
        <div className="inline-flex gap-5 items-center">
          <p className=" cursor-pointer">Click Here 👆</p>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between pl-5">
            <div className="flex">
              <Image src={logo} alt="logo" height={80} width={80} />
              <Image src={aviramn24} alt="logo" height={200} width={200} />
              <div className="flex justify-center items-center px-10 ">
                <IoIosCall className="h-5 w-5  fill-black" />
                <p className="textorange pl-3">
                  Call Us: <span className="textblack">9876543210</span>
                </p>
              </div>
            </div>
            <IoMdMenu className="h-10 w-10 md:hidden fill-black" />
            <nav className="hidden md:flex  gap-6 text-black/60 items-center philosopher-bold">
              <a href="#">About Us</a>
              <a href="#">Programme</a>
              <a href="#">In Media</a>
              <a href="#">Testimonial</a>
              <a href="#">Fess/Charges</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center items-center  tracking-tighter">
                Sign In
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
