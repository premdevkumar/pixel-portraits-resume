import { Mail, Phone, Linkedin, Github, Languages, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gpremdevkumar@gmail.com",
      href: "mailto:gpremdevkumar@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8712322815",
      href: "tel:+918712322815"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "premdevkumar",
      href: "https://github.com/premdevkumar"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Prem Dev Kumar",
      href: "https://linkedin.com/in/premdevkumar-kumar-24ba1529b"
    }
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Telugu", level: "Native" }
  ];

  const hobbies = [
    "Coding and building projects",
    "Playing Cricket",
    "Learning new technical skills",
    "Keeping up with industry trends"
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Contact */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 rounded-2xl hover-glow group flex items-center gap-4"
                >
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Languages & Hobbies */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Languages className="w-6 h-6 text-secondary" />
              <h3 className="text-2xl font-bold">Languages</h3>
            </div>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold">Hobbies & Interests</h3>
            </div>
            <ul className="space-y-3">
              {hobbies.map((hobby, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span className="text-muted-foreground">{hobby}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
