import { Code, Wrench, MessageSquare } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "HTML", "CSS"],
      color: "primary"
    },
    {
      icon: Wrench,
      title: "Frameworks & Tools",
      skills: ["Flutter", "React", "Git", "VS Code", "Eclipse", "Android Studio"],
      color: "secondary"
    },
    {
      icon: MessageSquare,
      title: "Soft Skills",
      skills: ["Communication", "Quick Learner", "Adaptable", "Problem Solving"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl space-y-6 hover-glow group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-${category.color}/10`}>
                    <Icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 bg-muted rounded-full text-sm font-medium transition-all hover:bg-primary/20 hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
