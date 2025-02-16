import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import heroimage1 from "../assets/img/heroimage1.png";
import heroimage2 from "../assets/img/heroimage2.png";
import heroimage3 from "../assets/img/heroimage3.avif";
import heroimage4 from "../assets/img/heroimage4.avif";
import heroimage7 from "../assets/img/heroimage7.png";
import Button from "./Button";

const images = [heroimage1, heroimage2, heroimage3, heroimage4, heroimage7];

const Herosection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden lg:h-[650px]">
      {/* Static Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-white bg-black opacity-70 text-lg font-bold z-10 px-4">
        <div
          className="w-4/5 lg:w-[800px] text-center mt-8"
          data-aos="fade-right"
        >
          <h1 className="text-xl sm:text-2xl lg:text-5xl font-bold leading-tight font-poppins">
            Welcome to Eventure Hall
          </h1>

          <p className="text-[16px] sm:text-lg lg:text-2xl font-light leading-9 sm:leading-7 lg:leading-10 font-plus-jakarta-sans mb-4 sm:mb-6 lg:mb-10 sm:hidden ">
            The perfect venue for any event, offering modern amenities &
            top-notch service.
          </p>

          <p className="hidden sm:block text-[18px] lg:text-2xl font-light leading-7 lg:leading-10 font-poppins mb-6 lg:mb-10">
            Discover the perfect venue for your next event. Our event center
            offers versatile spaces, modern amenities, and exceptional service
            to make your occasion unforgettable.
          </p>

          {/* Buttons */}
          <div className="flex justify-center mt-4 sm:mt-8">
            <Button className="bg-[#5833F1] hover:bg-sky-700 w-[230px] h-[60px] text-white px-4 py-2 rounded-lg transition cursor-pointer font-light font-plus-jakarta-sans sm:hidden text-[20px]">
              Book for an Event
            </Button>

            <div className="hidden sm:flex gap-6">
              <Button className="bg-[#5833F1] hover:bg-sky-700 w-[150px] h-[50px] text-white px-4 py-2 rounded-lg transition cursor-pointer font-light font-poppins">
                View Gallery
              </Button>
              <Button className="border border-[#5833F1] hover:bg-sky-700 w-[150px] h-[50px] text-white px-4 py-2 rounded-lg transition cursor-pointer font-light font-poppins">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="absolute inset-0 w-full h-full transition-opacity duration-1000">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Herosection;
