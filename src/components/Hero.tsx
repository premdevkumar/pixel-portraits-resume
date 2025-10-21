import { Download, Github, Linkedin, Mail, Phone, Sparkles, ArrowRight } from "lucide-react";
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
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] -top-48 -left-48 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] top-1/2 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] bottom-0 left-1/2 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center space-y-8 reveal-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Open to Opportunities</span>
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold leading-none">
              <span className="block mb-2">Hi, I'm</span>
              <span className="gradient-text block">Prem Dev Kumar</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
              B.Tech Computer Science Student passionate about building innovative solutions 
              with <span className="text-primary font-semibold">modern technologies</span> and elegant code
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto py-6">
            {[
              { label: "CGPA", value: "8.56" },
              { label: "Projects", value: "5+" },
              { label: "Languages", value: "6+" },
              { label: "Certifications", value: "3" }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl hover-glow">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="mailto:gpremdevkumar@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
              <Mail className="w-4 h-4 group-hover:text-primary" />
              <span>gpremdevkumar@gmail.com</span>
            </a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a href="tel:+918712322815" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
              <Phone className="w-4 h-4 group-hover:text-secondary" />
              <span>+91-8712322815</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              onClick={handleDownloadResume}
              size="lg" 
              className="bg-gradient-to-r from-primary via-primary to-secondary hover:shadow-[0_0_40px_rgba(167,139,250,0.6)] text-white font-semibold px-8 h-14 text-base group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-2 border-primary/30 hover:bg-primary/10 hover:border-primary font-semibold px-8 h-14 text-base backdrop-blur-sm"
            >
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <a 
              href="https://github.com/premdevkumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-2xl glass-card hover-glow transition-all group"
            >
              <Github className="w-6 h-6 group-hover:text-primary" />
            </a>
            <a 
              href="https://linkedin.com/in/premdevkumar-kumar-24ba1529b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-2xl glass-card hover-glow transition-all group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-secondary" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-primary/30 mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
