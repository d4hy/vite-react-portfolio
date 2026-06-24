
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSection";
import { Footer } from "../components/Footer";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  /*
    These are from tailwind.
     min-h-screen: minimum height is the size of the screen.
     We can also make custom ones, defining our own colors in light mode or dark mode.
     Defined in index.css. 

     overflow-x: hidden;, which clips any content that would spill out horizontally and removes horizontal scrollbars—useful for preventing accidental side-scroll from animations or wide background effects.


    */
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">


      {/* Background Effects */}
      <StarBackground />
      {/* Navbar*/}
      <Navbar />
      {/* Main Content*/}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection/>
        <ContactSection/>
      </main>

      {/* Footer*/}
      <Footer />
    </div>
  );
};
