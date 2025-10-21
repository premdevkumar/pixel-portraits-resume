import { Folder, Calendar, ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Attendance using Face Recognition System",
      period: "Jan 2024 - Apr 2024",
      description: "Developed an intelligent automated attendance management system leveraging computer vision and machine learning. The system accurately recognizes and verifies faces in real-time, streamlining the attendance process for educational institutions.",
      tags: ["Python", "OpenCV", "Machine Learning", "Face Recognition", "Computer Vision"],
      highlights: [
        "Real-time face detection and recognition",
        "Automated attendance logging",
        "User-friendly interface for management"
      ],
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-3xl overflow-hidden hover-glow group reveal-up"
            >
              <div className="grid lg:grid-cols-5 gap-8 p-8 lg:p-10">
                {/* Left side - Icon and meta */}
                <div className="lg:col-span-1 space-y-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Folder className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="lg:col-span-4 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Key Features</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="mt-12 text-center reveal-up">
          <div className="glass-card p-8 rounded-3xl inline-block">
            <p className="text-lg mb-4">More exciting projects coming soon!</p>
            <p className="text-sm text-muted-foreground">Currently working on innovative solutions in AI and Web Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
