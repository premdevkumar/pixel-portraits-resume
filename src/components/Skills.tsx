import { Code, Wrench, MessageSquare, Database, Layout, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "C", level: 75 },
        { name: "HTML/CSS", level: 90 },
      ],
      color: "primary"
    },
    {
      icon: Layout,
      title: "Frameworks",
      skills: [
        { name: "Flutter", level: 80 },
        { name: "React", level: 75 },
      ],
      color: "secondary"
    },
    {
      icon: Terminal,
      title: "Tools & IDEs",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Eclipse", level: 75 },
        { name: "Android Studio", level: 80 },
      ],
      color: "accent"
    },
    {
      icon: Database,
      title: "Core Concepts",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 80 },
        { name: "Problem Solving", level: 90 },
      ],
      color: "primary"
    },
    {
      icon: MessageSquare,
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 85 },
        { name: "Team Collaboration", level: 80 },
        { name: "Quick Learning", level: 95 },
        { name: "Adaptability", level: 90 },
      ],
      color: "secondary"
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="bento-grid">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 rounded-3xl hover-glow group reveal-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-2xl bg-${category.color}/10 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 text-${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/60 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animation: 'slideIn 1s ease-out forwards'
                          }}
                        />
                      </div>
                    </div>
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
