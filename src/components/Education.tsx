import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Education
        </h2>

        <div className="glass-card p-8 md:p-12 rounded-2xl hover-glow">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-lg text-secondary font-semibold">
                  Computer Science and Engineering
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-muted-foreground font-medium">
                  CMR Institute of Technology, Hyderabad
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>2023 - Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-secondary" />
                    <span className="font-semibold">CGPA: 8.56/10 (First Year)</span>
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
