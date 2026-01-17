import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import AINetworkVisual from '@/components/AINetworkVisual';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground noise-overlay relative">
      {/* Global Floating Particles */}
      <FloatingParticles count={40} className="fixed z-0" />
      
      {/* AI Network Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AINetworkVisual />
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CaseStudiesSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
