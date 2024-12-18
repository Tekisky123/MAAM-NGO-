import { useEffect } from "react";
import AboutSection from "../Components/AboutSection";
import CTASection from "../Components/CTASection";
import DonateSection from "../Components/DonateSection";
import EventSection from "../Components/EventSection";
import HeroSection from "../Components/HeroSection";
import PartnerSection from "../Components/PartnerSection";
import ServiceSection from "../Components/ServiceSection";
import SocialPosts from "../Components/SocialPosts";
import TestimonialSection from "../Components/TestimonialSection";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = `${t("Home")} | MAAM NGO`;
  }, [t]);

  return (
    <div className="home-page ">
      <HeroSection />
      <AboutSection/>
      <CTASection/>
      <ServiceSection/>
      <DonateSection/>
      <TestimonialSection/>
      <PartnerSection/>
      <EventSection/>
      <SocialPosts/>
    </div>
  );
};

export default Home;
