import { Folder, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Attendance using Face Recognition System",
      period: "Jan 2024 - Apr 2024",
      description: "Built an intelligent attendance system that recognizes faces for seamless and automated attendance management. Implemented using computer vision and machine learning techniques to ensure accuracy and efficiency.",
      tags: ["Python", "Computer Vision", "ML", "Face Recognition"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Projects
        </h2>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card p-8 md:p-10 rounded-2xl hover-glow group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Folder className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
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
      </div>
    </section>
  );
};

export default Projects;
