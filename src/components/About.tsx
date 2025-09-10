import { GlassCard } from "./GlassCard";
import { Tag } from "./Tag";
import { portfolioContent } from "@/lib/content";

export function About() {
  const { person, professionalDevelopment, languages, softSkills } = portfolioContent;

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="cyber-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about cybersecurity with hands-on experience across multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <GlassCard className="slide-up">
            <h3 className="text-2xl font-semibold mb-4 cyber-text">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              {person.summary}
            </p>
          </GlassCard>

          <GlassCard className="slide-up">
            <h3 className="text-2xl font-semibold mb-4 cyber-text">Professional Development</h3>
            <div className="space-y-3">
              {professionalDevelopment.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyber-cyan rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="slide-up">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>🗣️</span>
              Languages
            </h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <span className="text-foreground">{lang.name}</span>
                  <Tag className="text-xs">{lang.proficiency}</Tag>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="slide-up">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span>🎯</span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Tag key={skill} variant="skill">
                  {skill}
                </Tag>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}