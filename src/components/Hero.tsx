import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/prem_resume.pdf';
    link.download = 'Prem_Dev_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="gradient-text">Prem Dev Kumar</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Aspiring B.Tech student in Computer Science, passionate about coding, problem-solving, and building innovative projects
            </p>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
            <a href="mailto:gpremdevkumar@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">gpremdevkumar@gmail.com</span>
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <a href="tel:+918712322815" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91-8712322815</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              onClick={handleDownloadResume}
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold px-8 hover-glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-primary/50 hover:bg-primary/10 font-semibold px-8"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <a 
              href="https://github.com/premdevkumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover-glow transition-all"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/premdevkumar-kumar-24ba1529b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover-glow transition-all"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
