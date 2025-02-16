import React from "react";
import eventImage from "../assets/img/decorated-tables-wedding-restaurant.png"; // Update with your actual image path
import Button from "../components/Button";
import { Link } from "react-router";

const BookingPage = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold font-plus-jakarta-sans">
            Discover Our{" "}
            <span className="text-indigo-600 font-Elsie-swash">
              Exceptional
            </span>{" "}
            Event Services
          </h2>
          <p className="text-gray-700 mt-4 font-plus-jakarta-sans">
            At our event center, we offer a wide range of services to ensure
            your event is a success. From catering and audio-visual equipment to
            personalized event planning, we have everything you need to create
            unforgettable experiences.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:justify-start gap-4">
            <Link>
              <Button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition font-plus-jakarta-sans cursor-pointer">
                {" "}
                Book Now{" "}
              </Button>
            </Link>
            <Link>
              <Button className="border border-gray-700 text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition font-plus-jakarta-sans cursor-pointer">
                {" "}
                Contact{" "}
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2  lg:mt-7 p-10 ">
          <img
            src={eventImage}
            alt="Event Setup"
            className="w-full h-auto rounded-lg shadow-md mt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
