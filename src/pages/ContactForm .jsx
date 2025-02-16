import React from "react";
import Button from "../components/Button";

const ContactForm = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 mt-14 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Map Section */}
        <div className="w-full h-80 md:h-auto lg:mt-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7928.038909802432!2d3.3720398!3d6.5192205!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1739626335939!5m2!1sen!2sng"
            width="100%"
            height="500"
            title="Responsive Google Map"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"s
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg p-6 md:p-10 rounded-lg lg:mt-14 font-plus-jakarta-sans">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-6">We'd love to hear from you!</p>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Message</label>
              <textarea
                placeholder="Type your Message"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none h-24 resize-none"
              ></textarea>
            </div>

            <div className="mb-4 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the terms
              </label>
            </div>
            <Button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
              {" "}
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
