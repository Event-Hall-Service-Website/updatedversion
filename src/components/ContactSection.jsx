// src/components/ContactSection.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
      className="bg-black text-white font-plus-jakarta-sans"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 md:px-16  border-b border-gray-700">
        <div className="flex flex-col ">
          <Phone className="text-white text-4xl" />
          <h3 className="text-lg font-bold mt-4">Call Us</h3>
          <p className="text-white text-sm font-extralight">
            For inquiries or to book your next event, please reach out to us
            at info@eventure.com. We look forward to helping you create
            unforgettable experiences!
          </p>
        </div>
        <div className="flex flex-col ">
          <Mail className="text-white text-4xl" />
          <h3 className="text-lg font-bold mt-4">Email Us</h3>
          <p className="text-white text-sm font-extralight">
            Our team is ready to assist you! Call us at +1 123-4567 for
            immediate assistance or to discuss your event needs.
          </p>
        </div>
        <div className="flex flex-col ">
          <MapPin className="text-white text-4xl" />
          <h3 className="text-lg font-bold mt-4">Visit Us</h3>
          <p className="text-white text-sm font-extralight ">
            We welcome you to visit our event center! Our address is 123 Event
            Lane, Yaba, CA 90001. Stop by to see our beautiful venues and
            discuss your event plans in person.
          </p>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full h-64 md:h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7928.038909802432!2d3.3720398!3d6.5192205!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1739626335939!5m2!1sen!2sng"
          width="100%"
          height="300"
          title="Responsive Google Map"
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"s
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
