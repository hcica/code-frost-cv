import { GlassCard } from "./GlassCard";
import { Tag } from "./Tag";
import { portfolioContent } from "@/lib/content";

export function ProjectGrid() {
  const { projects, research } = portfolioContent;

  const allItems = [
    ...projects.map(p => ({ ...p, type: "project" as const })),
    ...research.map(r => ({ ...r, type: "research" as const, description: r.summary, tech: [] as string[] }))
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Projects & <span className="cyber-text">Research</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical implementations and security research initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allItems.map((item, index) => (
            <GlassCard key={index} hover className="slide-up group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-cyber-cyan transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs px-2 py-1 bg-cyber-cyan/20 text-cyber-cyan rounded-full">
                  {item.type}
                </span>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {item.description}
              </p>
              
              {item.tech.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tech.map((tech) => (
                    <Tag key={tech} className="text-xs">
                      {tech}
                    </Tag>
                  ))}
                </div>
              )}
              
              <div className="flex flex-wrap gap-1">
                {item.tags.map((tag) => (
                  <Tag key={tag} variant="cyber" className="text-xs">
                    {tag}
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