"use client"
import Footer from "./components/layout/footer";
// import Header from "./components/layout/header";
import BootcampSection from "./components/sections/boot-camp";
import ContactUs from "./components/sections/contact-us";
import CurriculumTable from "./components/sections/curriculum-table";
import FaqAccordian from "./components/sections/faqs";
import GetStarted from "./components/sections/get-started";
import HandsOnLearning from "./components/sections/handson-learning";
import Hero from "./components/sections/hero-section";
import InfoSection from "./components/sections/info-section";
import OurCohorts from "./components/sections/our-cohorts";
import OurFounder from "./components/sections/our-founder";
import Pricing from "./components/sections/pricing";
import PricingTable from "./components/sections/pricing-table";
import SixHundred from "./components/sections/sixhundred-hours";
import TeachingMethod from "./components/sections/teaching-method";
import Testimonials from "./components/sections/testimonials";
import WhatLearn from "./components/sections/what-learn";
import WhyChoose from "./components/sections/why-choose";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import StarterPackModal from "./components/sections/starter-pack-modal";

const Header = dynamic(() => import("./components/layout/header"), {
  ssr: false,
});

export default function Home() {
  const [showStarterModal, setShowStarterModal] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowStarterModal(true), 5000);
    return () => clearTimeout(t);
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <BootcampSection />
      <OurFounder />
      <OurCohorts />
      {/* <InfoSection /> */}
      <SixHundred />
      {/* <WhyChoose /> */}
      <TeachingMethod />
      <HandsOnLearning />
      <WhatLearn />
      <GetStarted />
      <PricingTable />
      <CurriculumTable />
      <ContactUs />
      <Pricing />
      {/* <Testimonials /> */}
      <FaqAccordian />
      <Footer />

        {/* Starter Pack Modal */}
      <StarterPackModal
        open={showStarterModal}
        onClose={() => setShowStarterModal(false)}
      />
    </>
  );
}
