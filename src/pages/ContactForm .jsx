import React from "react";
import Button from "../components/Button";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm, resetStatus } from "../Redux/slice/ContactSlice";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router";
// Import react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../components/LoadingSpinner";
import SubscribeForm from "@/components/SubscribeForm";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    checkbox: false,
  });

  const [openModal, setOpenModal] = useState(false); // State for modal

  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);

  useEffect(() => {
    if (success) {
      // Show success toast notification
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "text-[12px] font-plus-jakarta-sans",
      });
      setFormData({ name: "", email: "", message: "", checkbox: false });
      setOpenModal(true); // Open the modal on success
      dispatch(resetStatus());
    }

    if (error) {
      // Show error toast notification
      toast.error(error || "An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "text-[12px] font-plus-jakarta-sans",
      });
    }
  }, [success, dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ✅ Frontend validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "text-[12px] ",
      });
      return;
    }

    dispatch(submitContactForm(formData));
  };
  return (
    <>
      {/* ToastContainer to display toast messages */}
      <ToastContainer />
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

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name" // Add this
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-[12px] text-[13px]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email" // Added name attribute
                  value={formData.email}
                  onChange={handleChange}
                  // required
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none placeholder:text-[12px] text-[13px]"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-semibold"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Type your Message"
                  name="message" // Added name attribute
                  value={formData.message}
                  onChange={handleChange}
                  // required
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none h-24 resize-none placeholder:text-[12px] text-[13px]"
                ></textarea>
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="checkbox" // Added name attribute
                  className="mr-2"
                  checked={formData.checkbox}
                  onChange={handleChange}
                  required
                />

                <label className="text-sm text-gray-600 lg:text-[12px]">
                  By continuing, you acknowledge and agree to our{" "}
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and Terms of Service.
                </label>
              </div>
              {error && (
                <p className="error">
                  {typeof error === "string"
                    ? error
                    : error.error || "An unexpected error occurred"}
                </p>
              )}

              <Button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center">
                {loading ? <LoadingSpinner /> : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ✅ Success Modal */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="sm:max-w-md p-6">
          <DialogHeader>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <DialogTitle className="mt-4 text-lg font-semibold font-plus-jakarta-sans">
                Thank you for reaching out to Eventurehall
              </DialogTitle>
              <p className="text-sm text-gray-600 text-center mt-2 font-plus-jakarta-sans capitalize">
                Your message has been sent successfully. We will get back to you
                shortly.
              </p>
            </div>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Link to={"/"}>
              <Button
                onClick={() => setOpenModal(false)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-plus-jakarta-sans"
              >
                Go back to home
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
      <SubscribeForm />
    </>
  );
};

export default ContactForm;
