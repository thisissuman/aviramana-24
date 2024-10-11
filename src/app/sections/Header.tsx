"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import logo from "@/app/assets/logo.png";
import aviramam24 from "@/app/assets/aviramam24.svg";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setMenuOpen(false); // Close menu on item click
  };

  useEffect(() => {
    const handleScrollActiveSection = () => {
      const sections = ["hero", "services", "testimonial", "fees", "inMedia"];
      let currentSection = "";
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (
          sectionElement &&
          sectionElement.getBoundingClientRect().top <= window.innerHeight / 2
        ) {
          currentSection = section;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollActiveSection);
    return () => {
      window.removeEventListener("scroll", handleScrollActiveSection);
    };
  }, []);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {/* Top bar */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block philosopher-bold">
          Book your slot today
        </p>
        <div className="inline-flex gap-5 items-center">
          <p className="cursor-pointer">Click Here 👆</p>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-5">
        <div className="container md:mx-auto">
          <div className="flex items-center md:justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <Image src={logo} alt="logo" height={80} width={80} />
              <Image src={aviramam24} alt="logo" height={200} width={200} />
              <div className="hidden md:flex px-10 items-center">
                <IoIosCall className="h-5 w-5 fill-black" />
                <p className="text-orange-600 pl-3">
                  Call Us: <span className="text-black">9876543210</span>
                </p>
              </div>
            </div>

            {/* Menu Icon for Mobile */}
            <div className="md:hidden">
              {menuOpen ? (
                <IoMdClose
                  className="h-10 w-10 fill-black cursor-pointer z-50"
                  onClick={() => setMenuOpen(false)}
                />
              ) : (
                <IoMdMenu
                  className="h-10 w-10 fill-black cursor-pointer"
                  onClick={() => setMenuOpen(true)}
                />
              )}
            </div>

            {/* Navbar Links for Desktop */}
            <nav className="hidden md:flex gap-6 items-center text-black/60 philosopher-bold md:ml-auto">
              {["About Us", "Programme", "In Media", "Testimonial", "Fees/Charges"].map(
                (name, index) => {
                  const sectionId = name.toLowerCase().replace(/ /g, "");
                  return (
                    <motion.a
                      key={index}
                      className={`cursor-pointer ${
                        activeSection === sectionId ? "text-black" : ""
                      }`}
                      onClick={() => handleScroll(sectionId)}
                      whileHover={{ scale: 1.1 }}
                    >
                      {name}
                    </motion.a>
                  );
                }
              )}
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tighter">
                Sign In
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "20%" }}
          exit={{ x: "100%" }}
          className="fixed top-4 right-4 bottom-4 w-3/4 bg-black text-white z-30 p-8 shadow-lg rounded-xl"
        >
          {/* Close button inside menu */}
          <div className="flex justify-end">
            <IoMdClose
              className="h-8 w-8 fill-white cursor-pointer mb-6"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          <nav className="flex flex-col gap-6 text-white philosopher-bold">
            {["About Us", "Programme", "In Media", "Testimonial", "Fees/Charges"].map(
              (name, index) => {
                const sectionId = name.toLowerCase().replace(/ /g, "");
                return (
                  <motion.a
                    key={index}
                    className={`cursor-pointer ${
                      activeSection === sectionId ? "text-orange-500" : ""
                    }`}
                    onClick={() => handleScroll(sectionId)}
                    whileHover={{ scale: 1.1 }}
                  >
                    {name}
                  </motion.a>
                );
              }
            )}
            <button
              className="bg-orange-500 text-black px-4 py-2 rounded-lg font-medium tracking-tighter mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
