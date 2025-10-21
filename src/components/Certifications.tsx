import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Python Beginner Certificate",
      issuer: "Simplilearn",
      icon: "🐍"
    },
    {
      title: "Python Beginner Certificate",
      issuer: "Infospringboard",
      icon: "🐍"
    },
    {
      title: "Java Programming",
      issuer: "CodSoft",
      icon: "☕"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-2xl hover-glow group text-center space-y-4"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  by {cert.issuer}
                </p>
              </div>
              <div className="pt-2">
                <Award className="w-5 h-5 text-secondary mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
