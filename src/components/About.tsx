import { Code2, GraduationCap, TrendingUp, Target, Zap, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Problem Solver",
      description: "Strong foundation in DSA and algorithmic thinking"
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Rapidly adapting to new technologies and frameworks"
    },
    {
      icon: Heart,
      title: "Passionate Coder",
      description: "Building projects that make a difference"
    }
  ];

  const stats = [
    { icon: GraduationCap, label: "First Year CGPA", value: "8.56/10", color: "primary" },
    { icon: Code2, label: "Tech Stack", value: "6+ Languages", color: "secondary" },
    { icon: TrendingUp, label: "Growth", value: "Always Learning", color: "accent" },
  ];

  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer on a mission to create impactful solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <div className="space-y-8 reveal-up">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                I'm a <span className="text-foreground font-semibold">B.Tech Computer Science student</span> at 
                CMR Institute of Technology, Hyderabad, currently excelling with an <span className="text-primary font-semibold">8.56 CGPA</span> in 
                my first year.
              </p>
              <p className="text-muted-foreground">
                My journey into technology is fueled by an insatiable <span className="text-secondary font-semibold">curiosity</span> and 
                a desire to solve real-world problems through code. I specialize in building modern applications 
                using <span className="text-foreground font-semibold">Flutter, React</span>, and maintaining strong fundamentals 
                in <span className="text-foreground font-semibold">Data Structures & Algorithms</span>.
              </p>
              <p className="text-muted-foreground">
                Beyond the screen, I'm an avid <span className="text-accent font-semibold">cricket enthusiast</span> and 
                constantly exploring the latest tech trends to stay at the cutting edge of innovation.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 gap-4 pt-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4 glass-card p-5 rounded-xl hover-glow">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="space-y-6 reveal-up" style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="glass-card p-8 rounded-3xl hover-glow group"
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-5 rounded-2xl bg-${stat.color}/10 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-10 h-10 text-${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                      <div className="text-3xl font-bold">{stat.value}</div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quote card */}
            <div className="glass-card p-8 rounded-3xl border-l-4 border-primary">
              <p className="text-lg font-medium italic mb-3">
                "Aspiring to enhance technical expertise and contribute to innovative projects 
                that shape the future of technology."
              </p>
              <p className="text-sm text-muted-foreground">- My Mission</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
