import { Award, CheckCircle, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Python Beginner Certificate",
      issuer: "Simplilearn",
      icon: "🐍",
      skills: ["Python Basics", "Programming Fundamentals"],
      color: "primary"
    },
    {
      title: "Python Beginner Certificate",
      issuer: "Infospringboard",
      icon: "🐍",
      skills: ["Python Syntax", "Core Concepts"],
      color: "secondary"
    },
    {
      title: "Java Programming",
      issuer: "CodSoft",
      icon: "☕",
      skills: ["Java Development", "OOP Concepts"],
      color: "accent"
    }
  ];

  return (
    <section id="certifications" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="glass-card rounded-3xl p-8 hover-glow group relative overflow-hidden reveal-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${cert.color} to-${cert.color}/20 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`} />
              
              <div className="relative space-y-6">
                {/* Icon and badge */}
                <div className="flex items-start justify-between">
                  <div className="text-5xl">{cert.icon}</div>
                  <div className={`p-2 rounded-xl bg-${cert.color}/10`}>
                    <Award className={`w-5 h-5 text-${cert.color}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    Issued by <span className="text-foreground">{cert.issuer}</span>
                  </p>
                </div>

                {/* Skills */}
                <div className="space-y-2 pt-2">
                  {cert.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 text-${cert.color}`} />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom badge */}
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
                    <span className={`w-2 h-2 rounded-full bg-${cert.color} animate-pulse`} />
                    <span>Certified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
