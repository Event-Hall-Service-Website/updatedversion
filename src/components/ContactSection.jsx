// src/components/ContactSection.jsx
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 md:px-16 text-center border-b border-gray-700">
        <div className="flex flex-col items-center">
          <Phone className="text-white text-4xl" />
          <h3 className="text-lg font-bold mt-2">Call Us</h3>
          <p className="text-gray-400 text-sm">
            Reach out to us at{" "}
            <span className="block">info@eventcenter.com</span>
            for inquiries.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Mail className="text-white text-4xl" />
          <h3 className="text-lg font-bold mt-2">Email Us</h3>
          <p className="text-gray-400 text-sm">
            Drop us an email at{" "}
            <span className="block">info@eventcenter.com</span>
            to discuss your event needs.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <MapPin className="text-white text-4xl" />
          <h3 className="text-lg font-bold mt-2">Visit Us</h3>
          <p className="text-gray-400 text-sm">
            We welcome you at 123 Event Lane, Texas, USA.
          </p>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full h-64 md:h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.00094306994!2d3.364662475713153!3d6.5215615231843795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c4da6e7985b%3A0xcc91fa8b98376c74!2sThe%20Bulb!5e0!3m2!1sen!2sng!4v1714732737710!5m2!1sen!2sng"
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
