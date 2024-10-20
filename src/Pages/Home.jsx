import AboutSection from "../Components/AboutSection";
import CTASection from "../Components/CTASection";
import DonateSection from "../Components/DonateSection";
import EventSection from "../Components/EventSection";
import HeroSection from "../Components/HeroSection";
import PartnerSection from "../Components/PartnerSection";
import ServiceSection from "../Components/ServiceSection";
import SocialPosts from "../Components/SocialPosts";
import TestimonialSection from "../Components/TestimonialSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <CTASection/>
      <ServiceSection/>
      <DonateSection/>
      <TestimonialSection/>
      <PartnerSection/>
      <EventSection/>
      <SocialPosts/>
    </>
  );
};

export default Home;
