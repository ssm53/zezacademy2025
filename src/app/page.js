import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import ContactUs from "./components/sections/contact-us";
import CurriculumTable from "./components/sections/curriculum-Table";
import FaqAccordian from "./components/sections/faqs";
import HandsOnLearning from "./components/sections/handsOn-Learning";
import Hero from "./components/sections/hero-section";
import OurFounder from "./components/sections/Our-Founder";
import PricingTable from "./components/sections/pricing-Table";
import SixHundred from "./components/sections/Sixhundred-Hours";
import TeachingMethod from "./components/sections/teaching-Method";
import Testimonials from "./components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SixHundred />
      <OurFounder />
      <TeachingMethod />
      <HandsOnLearning />
      <Testimonials />
      <PricingTable />
      <CurriculumTable />
      <ContactUs />
      <FaqAccordian />
      <Footer />
    </>
  );
}
