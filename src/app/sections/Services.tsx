"use client";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { programmes } from "../constant";
import Image, { StaticImageData } from "next/image";


interface ServiceCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  index: number;
}

const  ServiceCard: React.FC<ServiceCardProps> = ({  title, description, image }) => {
  return (
    <Tilt className="bg-gradient-to-b from-yellow-300 to-amber-100 p-5 rounded-lg sm:w-[300px] w-80 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out border border-black">
      {/* Icon with circle border */}
      <div className="flex justify-center items-center mb-4">
        <motion.div
          className="w-24 h-24 rounded-full border-4 border-black flex justify-center items-center bg-orange-100 shadow-lg"
          whileHover={{
            scale: [1, 1.2, 1.2, 1],
            rotate: [0, 0, 360, 360],
            borderRadius: ["50%", "50%", "50%", "50%"],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: 0,
          }}
        >
          {/* Next.js Image component */}
          <Image
            src={image}
            alt={title}
            width={56} // width of the icon (14 * 4)
            height={56} // height of the icon (14 * 4)
            className="object-contain"
          />
        </motion.div>
      </div>
      {/* Title and description */}
      <div className="text-black">
        <h3 className="font-bold text-[20px] mb-2 philosopher-bold">{title}</h3>
        <p className="text-gray-700 text-[14px]">{description}</p>
        <a
          href="#"
          className="text-orange-600 mt-4 inline-block hover:underline hover:text-black transition-colors duration-300"
        >
          READ MORE
        </a>
      </div>
    </Tilt>
  );
};



const Services = () => {
  return (
    <section className="text-center bg-[linear-gradient(to_bottom,#e3cc70,#EAEEFE)] overflow-x-clip">
      <h2 className="text-3xl font-bold text-gray-900 philosopher-bold">Most Popular Events</h2>
      <div className="w-20 h-1 bg-orange-400 mx-auto mt-2 mb-4 philosopher-regular"></div>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Check out the most in-demand events for your easy reference to book our
        services today!
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {programmes.map((programme, index) => (
          <ServiceCard key={programme.title} {...programme} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
