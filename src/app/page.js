import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import BootcampSection from "./components/sections/boot-camp";
import ContactUs from "./components/sections/contact-us";
import CurriculumTable from "./components/sections/curriculum-table";
// import EnrollmentSection from "./components/sections/enrollment";
import FaqAccordian from "./components/sections/faqs";
import GetStarted from "./components/sections/get-started";
import HandsOnLearning from "./components/sections/handson-learning";
import Hero from "./components/sections/hero-section";
import OurCohorts from "./components/sections/our-cohorts";
import OurFounder from "./components/sections/our-founder";
import Pricing from "./components/sections/pricing";
import PricingTable from "./components/sections/pricing-table";
import SixHundred from "./components/sections/sixhundred-hours";
import TeachingMethod from "./components/sections/teaching-method";
import Testimonials from "./components/sections/testimonials";
import WhatLearn from "./components/sections/what-learn";
import WhyChoose from "./components/sections/why-choose";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SixHundred />
      <OurFounder />
      <OurCohorts />
      <BootcampSection />
      <WhyChoose />
      <TeachingMethod />
      <HandsOnLearning />
      <WhatLearn />
      <GetStarted />
      <PricingTable />
      <CurriculumTable />
      {/* <EnrollmentSection /> */}
      <Pricing />
      <Testimonials />
      {/* <ContactUs /> */}
      <FaqAccordian />
      <Footer />
    </>
  );
}
