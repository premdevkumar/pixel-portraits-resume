import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import FloatingDownload from "@/components/FloatingDownload";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
      <FloatingDownload />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Prem Dev Kumar. Built with passion and React.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
