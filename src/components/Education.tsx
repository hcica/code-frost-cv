import { GlassCard } from "./GlassCard";
import { portfolioContent } from "@/lib/content";

export function Education() {
  const { education } = portfolioContent;

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            <span className="cyber-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in cybersecurity and information technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <GlassCard key={index} className="slide-up">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-cyber-cyan font-medium">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-muted-foreground mb-2">{edu.dates}</div>
                  <div className="glass-card px-3 py-1 bg-cyber-cyan/20 text-cyber-cyan text-sm font-medium inline-block">
                    GPA: {edu.gpa}
                  </div>
                </div>
              </div>
              
              <div className="border-t border-glass-border/20 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <span className="text-muted-foreground">
                    Specialized focus on cybersecurity, penetration testing, and digital forensics
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}