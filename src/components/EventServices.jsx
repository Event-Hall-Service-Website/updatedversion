import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../assets/img/banquet-table-with-snacks.png";
import image3 from "../assets/img/dj-playing-music-mixer.png";
import Button from "../components/Button";
import image2 from "../assets/img/restaurant-hall-with-small-stage-monitor-red-curtains-brick-walls-white-napoleon-chairs.png";

const services = [
  {
    title: "Gourmet Catering Services",
    description:
      "Our catering menu crafts delicious and luxury meals, perfect for your grand celebration.",
    img: image1,
  },
  {
    title: "Stunning Event Decorations",
    description:
      "Transform your event space with creative and luxurious decorations tailored to your theme.",
    img: image2,
  },
  {
    title: "Top-Notch Entertainment",
    description:
      "Keep your guests entertained with live performers, DJs, and interactive fun activities.",
    img: image3,
  },
];

const EventServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-12 px-6 text-center font-plus-jakarta-sans">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold mb-4 font-plus-jakarta-sans "
          data-aos="fade-down"
        >
          Explore Our Comprehensive Event Services
        </h2>
        <p className="text-gray-600 mb-8" data-aos="fade-up">
          Our event center offers a wide range of services to make your event
          unforgettable.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-lg rounded-lg"
              data-aos="fade-up"
            >
              <img
                src={service.img}
                alt={service.title}
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2 text-[15px]">
                {service.description}
              </p>
              <Button className="bg-[#5833F1] hover:bg-sky-700 w-[150px] h-[50px] text-white px-4 py-2 rounded-lg transition cursor-pointer font-light font-plus-jakarta-sans mt-4">
                Learn more
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventServices;
