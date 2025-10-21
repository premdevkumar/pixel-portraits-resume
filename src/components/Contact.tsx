import { Mail, Phone, Linkedin, Github, Languages, Heart, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gpremdevkumar@gmail.com",
      href: "mailto:gpremdevkumar@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8712322815",
      href: "tel:+918712322815",
      color: "secondary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "premdevkumar",
      href: "https://github.com/premdevkumar",
      color: "accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Prem Dev Kumar",
      href: "https://linkedin.com/in/premdevkumar-kumar-24ba1529b",
      color: "primary"
    }
  ];

  const languages = [
    { name: "English", level: "Fluent", flag: "🇬🇧" },
    { name: "Hindi", level: "Fluent", flag: "🇮🇳" },
    { name: "Telugu", level: "Native", flag: "🗣️" }
  ];

  const hobbies = [
    { icon: "💻", text: "Coding and building projects" },
    { icon: "🏏", text: "Playing Cricket" },
    { icon: "📚", text: "Learning new technical skills" },
    { icon: "🚀", text: "Keeping up with industry trends" }
  ];

  return (
    <section id="contact" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center reveal-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and build something amazing together
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-up">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-2xl hover-glow group text-center"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-${contact.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 text-${contact.color}`} />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{contact.label}</p>
                <p className="font-semibold group-hover:text-primary transition-colors break-all">
                  {contact.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Bottom grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Languages */}
          <div className="glass-card p-8 rounded-3xl hover-glow reveal-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-secondary/10">
                <Languages className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-semibold">{lang.name}</span>
                  </div>
                  <span className="text-sm text-secondary font-medium px-3 py-1 bg-secondary/10 rounded-lg">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="glass-card p-8 rounded-3xl hover-glow reveal-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-accent/10">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Hobbies & Interests</h3>
            </div>
            <div className="grid gap-4">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{hobby.icon}</span>
                  <span className="text-sm font-medium">{hobby.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-12 rounded-3xl text-center reveal-up">
          <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-bold mb-3">Based in Hyderabad, India</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Open to internship opportunities and exciting projects. Let's collaborate and create something impactful!
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(167,139,250,0.6)] text-white font-semibold px-8 h-14"
          >
            <a href="mailto:gpremdevkumar@gmail.com">
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
