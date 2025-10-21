import { GraduationCap, Calendar, Award, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-32 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic journey and achievements
          </p>
        </div>

        <div className="relative reveal-up">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden md:block ml-8" />

          <div className="glass-card p-10 md:pl-24 rounded-3xl hover-glow relative">
            {/* Timeline dot */}
            <div className="absolute left-6 top-10 w-5 h-5 rounded-full bg-primary hidden md:block ring-4 ring-background" />

            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      Bachelor of Technology (B.Tech)
                    </h3>
                    <p className="text-xl text-secondary font-semibold mb-2">
                      Computer Science and Engineering
                    </p>
                    <p className="text-lg text-muted-foreground font-medium">
                      CMR Institute of Technology, Hyderabad
                    </p>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-xl">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">2023 - Present</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold">CGPA: 8.56/10</span>
                      <span className="text-xs text-muted-foreground">(First Year)</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-xl">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-medium">Hyderabad, India</span>
                    </div>
                  </div>

                  {/* Coursework highlights */}
                  <div className="pt-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>Key Coursework</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-2">
                      {[
                        "Data Structures & Algorithms",
                        "Object-Oriented Programming",
                        "Database Management Systems",
                        "Computer Networks",
                        "Operating Systems",
                        "Software Engineering"
                      ].map((course, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-primary">▸</span>
                          <span className="text-sm">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
