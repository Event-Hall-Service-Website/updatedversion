import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white font-plus-jakarta-sans text-[#000000] p-12">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:px-16 text-center md:text-left">
        {/* Explore Section */}
        <div>
          <h3 className="text-lg font-bold">Explore</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>
              <a href="#">Venues</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="text-lg font-bold">Connect</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Stay Updated Section */}
        <div>
          <h3 className="text-lg font-bold">Stay Updated</h3>
          <p className="text-gray-600 text-sm mt-2">
            Subscribe to our newsletter for updates.
          </p>
          <div className="mt-3 flex flex-col sm:flex-row items-center border border-gray-400 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 bg-gray-100 outline-none w-full"
            />
            <button className="bg-blue-600 text-white px-4 py-2 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-300 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
        {/* Copyright Info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Event Center. All rights reserved.
        </div>

        {/* Terms & Privacy Links */}
        <div className="flex space-x-3">
          <a href="#" className="hover:text-black">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:text-black">
            Privacy Policy
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
