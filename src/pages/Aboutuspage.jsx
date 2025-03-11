import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer
import { Pagination, Autoplay } from "swiper/modules";
import TeamSection from "../components/TeamSection";
// import eventImage from "../assets/img/decorated-tables-wedding-restaurant.png"; // Update with your actual image path
// import Button from "../components/Button";
// import { Link } from "react-router";
const links = [{ name: "Meet the Team", href: "#" }];

const stats = [
  { name: "Events Hosted", value: 1200 },
  { name: "Happy Clients", value: 5000 },
  { name: "Years in Service", value: 10 },
  { name: "Venue Capacity", value: 500 },
];

// Testimonial Data for H2All Event Hall
const testimonials = [
  {
    id: 1,
    text: "“H2All Event Hall made our wedding day absolutely magical! The ambiance, staff, and service were beyond our expectations.”",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    name: "Sophia Lee",
    title: "Bride",
  },
  {
    id: 2,
    text: "“We hosted our annual corporate gala here, and it was a phenomenal experience. Professional staff and a stunning venue!”",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    name: "David Johnson",
    title: "Corporate Event Planner",
  },
  {
    id: 3,
    text: "“From the decor to the catering, every detail was perfect. Our guests were truly impressed!”",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Emily Carter",
    title: "Event Coordinator",
  },
];

const Aboutuspage = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const clipboardSectionRef = useRef(null);

  const handleScroll = () => {
    if (clipboardSectionRef.current) {
      clipboardSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0  py-6 ">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-7xl lg:text-4xl">
              work with us
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8 font-plus-jakarta-sans lg:text-[15px]">
              Welcome to EventureHall – the perfect venue for unforgettable
              celebrations. Whether it's a wedding, corporate gathering, or a
              special occasion, we provide a luxurious and elegant space
              designed to make your event extraordinary.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href} onClick={handleScroll}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl
              ref={ref}
              className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="flex flex-col-reverse gap-1 font-plus-jakarta-sans"
                >
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
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
      <section
        className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 "
        data-aos="fade-up"
      >
        {/* Background Styling */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {/* Company Logo */}
          <img
            alt="Company Logo"
            src="https://tailwindui.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
            className="mx-auto h-12"
          />

          {/* Swiper Component */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="mt-10"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="mb-8 font-plus-jakarta-sans"
              >
                <blockquote className="text-center text-xl font-semibold text-gray-900 sm:text-2xl">
                  <p>{testimonial.text}</p>
                </blockquote>
                <figcaption className="mt-10 flex flex-col items-center">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="size-14 rounded-full shadow-md"
                  />
                  <div className="mt-4 flex flex-col items-center text-base">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600">{testimonial.title}</div>
                  </div>
                </figcaption>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <div className="bg-white   ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-up">
          <h2 className="text-center text-lg/8 font-semibold text-gray-900 font-plus-jakarta-sans">
            Trusted by Our Clients for Unforgettable Events at Eventure Hall
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://tailwindui.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src="https://tailwindui.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="https://tailwindui.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindui.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="https://tailwindui.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>
      <div ref={clipboardSectionRef} id="clipboardSection">
        <TeamSection />
      </div>
    </>
  );
};

export default Aboutuspage;
