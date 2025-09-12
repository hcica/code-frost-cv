import { GlassCard } from "./GlassCard";
import { Tag } from "./Tag";
import { portfolioContent } from "@/lib/content";

export function SkillMatrix() {
  const { skills } = portfolioContent;

  const skillCategories = [
    { title: "Programming Languages", skills: skills.programming, icon: "💻" },
    { title: "Web Technologies", skills: skills.web, icon: "🌐" },
    { title: "Databases", skills: skills.databases, icon: "🗄️" },
    { title: "Operating Systems", skills: skills.operatingSystems, icon: "🖥️" },
    { title: "Version Control", skills: skills.versionControl, icon: "📝" },
    { title: "Security Tools", skills: skills.securityTools, icon: "🛡️" },
    { title: "Expertise Areas", skills: skills.expertise, icon: "🎯" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            <span className="cyber-text">Skills</span> Matrix
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies across cybersecurity, development, and system administration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <GlassCard key={category.title} hover className="slide-up group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl group-hover:scale-110 transition-transform">{category.icon}</span>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-cyber-cyan transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Tag key={skill} variant="skill">
                    {skill}
                  </Tag>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}