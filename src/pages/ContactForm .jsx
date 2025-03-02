import React from "react";
import Button from "../components/Button";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
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
              <DialogTitle className="mt-4 text-lg font-semibold">
                thank you for reaching out to Eventurehall
              </DialogTitle>
              <p className="text-sm text-gray-600 text-center mt-2">
                Your message has been sent successfully. We will get back to you
                shortly.
              </p>
            </div>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Link to={"/"}>
              <Button
                onClick={() => setOpenModal(false)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                Go back to home
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-white">
                Stay Ahead with Our Exclusive Insights!
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Subscribe to get the latest updates, expert tips, and exclusive
                offers delivered straight to your inbox. Be the first to know
                about new trends and opportunities!
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email" // Added name attribute
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon
                    aria-hidden="true"
                    className="size-6 text-white"
                  />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  Fresh Content Every Week
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Get handpicked articles, expert insights, and industry news
                  curated for you every week.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon
                    aria-hidden="true"
                    className="size-6 text-white"
                  />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  No Spam, Just Value
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  We respect your inbox! Only valuable insights and offers, no
                  unnecessary emails.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
