import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import person1 from "../assets/img/person1.png";
import person2 from "../assets/img/person2.png";
import person3 from "../assets/img/person3.png";
import person4 from "../assets/img/person4.png";
import person5 from "../assets/img/person5.png";
import person6 from "../assets/img/person6.png";
const feedbacks = [
  {
    name: "Abayomi Israel",
    review:
      "The event center made our wedding day magical! The hall was beautifully decorated and the staff was incredibly helpful.",
    img: person1,
  },
  {
    name: "Grace White",
    review:
      "We had our annual meeting here, and it was a great success. The facilities were top-notch and the catering was excellent.",
    img: person2,
  },
  {
    name: "Oladipo Femi",
    review:
      "I rented a hall for my daughter's birthday party. The decorations were stunning, and the kids had a blast!",
    img: person3,
  },
  {
    name: "Majokunmi Lekan",
    review:
      "Attending a corporate event at this venue was a pleasure. The ambiance was perfect for networking.",
    img: person4,
  },
  {
    name: "Akubo Gbani",
    review:
      "The event center exceeded my expectations! Everything was well organized, and the staff went above and beyond.",
    img: person5,
  },
  {
    name: "Emmanuel Gbani",
    review:
      "The event center exceeded my expectations! Everything was well organized, and the staff went above and beyond.",
    img: person6,
  },
];

const Clientfeedback = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins">
          Client Feedback
        </h2>
        <p className="text-gray-600 mt-2 font-poppins">
          See what our clients say about their unforgettable experiences with
          us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={feedback.img}
                alt={feedback.name}
                className="w-12 h-12 rounded-full"
              />
              <h3 className="font-bold text-lg">{feedback.name}</h3>
            </div>
            <p className="text-gray-600 font-poppins text-[15px]">
              {feedback.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clientfeedback;
