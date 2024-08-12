import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingPageSection from "./LandingPageSection";
import ProjectsSection from "./ProjectsSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import React from "react";

export default function LandingPagePage() {
  return (
    <>
      <Helmet>
        <title>Muhammad Umair - UI & UX Designer | Landing Page</title>
        <meta
          name="description"
          content="Discover the creative world of Muhammad Umair, a professional UI & UX Designer. Explore services, projects, and testimonials. Download CV and hire for top-notch design solutions."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[120px] bg-white-a700 lg:gap-[90px] md:gap-[90px] sm:gap-[60px]">
        <div className="container-xs mt-[60px] lg:px-5 md:px-5">
          <Header />
        </div>
        <div className="flex flex-col gap-[138px] self-stretch lg:gap-[103px] md:gap-[103px] sm:gap-[69px]">
          <div className="flex flex-col gap-[138px] lg:gap-[103px] md:gap-[103px] sm:gap-[69px]">
            {/* landing page section */}
            <LandingPageSection />

            {/* services section */}
            <ServicesSection />

            {/* projects section */}
            <ProjectsSection />

            {/* testimonials section */}
            <TestimonialsSection />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
