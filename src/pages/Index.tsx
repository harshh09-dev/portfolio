import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroCard from "@/components/IntroCard";
import PhilosophySection from "@/components/PhilosophySection";
import GlobalSyncSection from "@/components/GlobalSyncSection";
import FounderSection from "@/components/FounderSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import CreativeWorkSection from "@/components/CreativeWorkSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import CurrentlyBuildingSection from "@/components/CurrentlyBuildingSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BehindCurtainsSection from "@/components/BehindCurtainsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <IntroCard />
      <PhilosophySection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <WhatIDoSection />
      <div id="work">
        <ProjectsSection />
      </div>
      <CreativeWorkSection />
      <GlobalSyncSection />
      <FounderSection />
      <div id="experience">
        <WorkExperienceSection />
      </div>
      <CurrentlyBuildingSection />
      <TestimonialsSection />
      <BehindCurtainsSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
