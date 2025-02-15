import React from "react";
import Herosection from "../components/Herosection";

import DiscoverOurStory from "../components/DiscoverOurStory";
import EventServices from "../components/EventServices";
import Clientfeedback from "../components/Clientfeedback";
import FAQAccordion from "../components/FAQAccordion";
import ContactSection from "../components/ContactSection";

const Homepage = () => {
  return (
    <main>
      <Herosection />

      <DiscoverOurStory />

      <EventServices />
      <FAQAccordion />
      <Clientfeedback />
      <ContactSection />
    </main>
  );
};

export default Homepage;
