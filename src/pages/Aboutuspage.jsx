import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Pagination, Autoplay } from "swiper/modules";
import TeamSection from "../components/TeamSection";
import FeedbackForm from "../components/FeedbackForm";
import axios from "axios";

const links = [{ name: "Meet the Team", href: "#" }];

const stats = [
  { name: "Events Hosted", value: 1200 },
  { name: "Happy Clients", value: 5000 },
  { name: "Years in Service", value: 10 },
  { name: "Venue Capacity", value: 500 },
];

const Aboutuspage = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const clipboardSectionRef = useRef(null);
  const [feedbacks, setFeedbacks] = useState([]);

  const handleScroll = () => {
    if (clipboardSectionRef.current) {
      clipboardSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Fetch feedback from backend
    axios.get(`${import.meta.env.VITE_API_URL}/auth/feedbacks`).then((res) => {
      setFeedbacks(res.data.data);
    });
  }, []);

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 py-6">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-7xl lg:text-4xl">
              Welcome to Eventure Hall
            </h2>
            <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl lg:text-[15px]">
              The perfect venue for unforgettable celebrations. Whether it's a
              wedding, corporate gathering, or a special occasion, we provide a
              luxurious and elegant space designed to make your event
              extraordinary.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href} onClick={handleScroll}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl
              ref={ref}
              className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base text-gray-300">{stat.name}</dt>
                  <dd
                    className="text-4xl font-semibold tracking-tight text-white"
                    data-aos="fade-up"
                  >
                    {inView ? (
                      <CountUp end={stat.value} duration={2} suffix="+" />
                    ) : (
                      "0"
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section
        className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8"
        data-aos="fade-up"
      >
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            alt="Company Logo"
            src="https://tailwindui.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
            className="mx-auto h-12"
          />

          {/* Swiper Component */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="mt-10"
          >
            {feedbacks.map((testimonial, index) => {
              // Extract first and last letter of the name correctly
              const initials =
                testimonial.name && testimonial.name.length > 1
                  ? `${testimonial.name[0]}${testimonial.name.slice(
                      -1
                    )}`.toUpperCase()
                  : "U"; // Default to 'U' if name is undefined

              return (
                <SwiperSlide key={testimonial.id || index} className="mb-8">
                  <blockquote className="text-center text-xl font-semibold text-gray-900 sm:text-2xl">
                    <p>{testimonial.review}</p>
                  </blockquote>
                  <figcaption className="mt-10 flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white text-lg font-bold">
                      {initials}
                    </div>
                    <div className="mt-4 flex flex-col items-center text-base">
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">{testimonial.title}</div>
                    </div>
                  </figcaption>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* Client Trust Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-up">
          <h2 className="text-center text-lg font-semibold text-gray-900">
            Trusted by Our Clients for Unforgettable Events at Eventure Hall
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 lg:grid-cols-5">
            {["transistor", "reform", "tuple", "savvycal", "statamic"].map(
              (logo) => (
                <img
                  key={logo}
                  alt={logo}
                  src={`https://tailwindui.com/plus-assets/img/logos/158x48/${logo}-logo-gray-900.svg`}
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                />
              )
            )}
          </div>
        </div>
      </div>

      <FeedbackForm />
      <div ref={clipboardSectionRef} id="clipboardSection">
        <TeamSection />
      </div>
    </>
  );
};

export default Aboutuspage;
