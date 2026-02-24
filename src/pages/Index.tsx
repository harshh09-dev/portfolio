import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroCard from "@/components/IntroCard";
import PhilosophySection from "@/components/PhilosophySection";
import GlobalSyncSection from "@/components/GlobalSyncSection";
import FounderSection from "@/components/FounderSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
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
      <GlobalSyncSection />
      <FounderSection />
      <div id="work">
        <ProjectsSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="experience">
        <WorkExperienceSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
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
