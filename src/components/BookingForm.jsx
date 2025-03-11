import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import hallimagebooking from "../assets/img/hallimagebooking.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { createBooking, resetStatus } from "../Redux/slice/BookinghallSlice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ToastContainer } from "react-toastify";
const BookingForm = () => {
  const dispatch = useDispatch();
  const { loading, success, error, selectedDate } = useSelector(
    (state) => state.booking
  );

  const [formData, setFormData] = useState({
    clientFirstName: "",
    clientLastName: "",
    eventType: "",
    clientEmail: "",
    clientPhone: "",
    duration: "",
    eventDate: selectedDate || "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (success) {
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        dispatch(resetStatus()); // Reset booking status after closing modal
      }, 3000);
    }
    //i want to clear my form data after booking
    if (success) {
      setFormData({
        clientFirstName: "",
        clientLastName: "",
        eventType: "",
        clientEmail: "",
        clientPhone: "",
        duration: "",
        eventDate: selectedDate || "",
      });
    }
  }, [success, dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.eventDate) {
      toast.error(" Please select an event date before proceeding!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        className: "text-[12px] font-plus-jakarta-sans",
      });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (
      !formData.clientFirstName ||
      !formData.clientLastName ||
      !formData.eventType ||
      !formData.clientEmail ||
      !formData.clientPhone ||
      !formData.duration
    ) {
      alert("Please fill in all fields before booking.");
      return;
    }

    if (!emailRegex.test(formData.clientEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(formData.clientPhone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    try {
      await dispatch(createBooking(formData)).unwrap();
    } catch (error) {
      if (error?.message?.includes("already have a booking")) {
        toast.error("You already have a booking for this date!", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.error("An error occurred. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <ToastContainer />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:p-28">
        <div>
          <img
            src={hallimagebooking}
            alt="Event Hall"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-full font-plus-jakarta-sans">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
            Book Your Event Hall
          </h2>
          <p className="text-center text-gray-700 text-sm italic mb-6">
            🎉 Get ready! Your special event is set for{" "}
            <strong>{formData.eventDate || "Not Selected"}</strong>. We can't
            wait to host you!
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="clientFirstName"
                value={formData.clientFirstName}
                onChange={handleChange}
                placeholder="First Name"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 text-[12px]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="clientLastName"
                value={formData.clientLastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 text-[12px]"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Event Type
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 text-[12px]"
                required
              >
                <option value="" disabled>
                  Select your event type
                </option>
                <option value="wedding">Wedding</option>
                <option value="conference">Conference</option>
                <option value="birthday">Birthday</option>
                <option value="corporate">Corporate Event</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleChange}
                placeholder="Email"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 text-[12px]"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="clientPhone"
                value={formData.clientPhone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 text-[12px]"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Duration
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 text-[12px]"
                required
              >
                <option value="" disabled>
                  Choose your duration
                </option>
                <option value="1 Hour">1 Hour</option>
                <option value="2 Hours">2 Hours</option>
                <option value="Half Day">Half Day (4 Hours)</option>
                <option value="Full Day">Full Day (8+ Hours)</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <Button
                type="submit"
                className="bg-[#5833F1] hover:bg-indigo-700 w-full h-[50px] text-white px-4 py-2 rounded-lg"
              >
                {loading ? "Processing..." : "Book Event"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <Dialog
          open={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
        >
          <DialogContent className="sm:max-w-md p-6">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold text-center text-green-600">
                🎉 Booking Confirmed!
              </DialogTitle>
              <p className="text-sm text-gray-600 text-center mt-2">
                Your event has been successfully booked for{" "}
                <strong>{formData.eventDate}</strong>.
              </p>
            </DialogHeader>
            <div className="flex justify-center mt-4">
              <Button
                onClick={() => setShowSuccessModal(false)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default BookingForm;
