import { Code2, GraduationCap, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: GraduationCap, label: "CGPA", value: "8.56/10" },
    { icon: Code2, label: "Languages", value: "6+" },
    { icon: TrendingUp, label: "Projects", value: "Multiple" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate B.Tech Computer Science student at CMR Institute of Technology, Hyderabad, 
              with a strong foundation in programming and problem-solving. Currently maintaining an impressive 
              8.56 CGPA in my first year.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey in technology is driven by curiosity and a constant desire to learn. I specialize 
              in building innovative solutions using modern frameworks like Flutter and React, while maintaining 
              strong fundamentals in Data Structures and Algorithms.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me on the cricket field or exploring the latest tech trends 
              to stay ahead in this ever-evolving industry.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-2xl text-center space-y-3 hover-glow"
                >
                  <Icon className="w-8 h-8 mx-auto text-primary" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
