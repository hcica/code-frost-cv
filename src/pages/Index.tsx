import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillMatrix } from "@/components/SkillMatrix";
import { Education } from "@/components/Education";
import { References } from "@/components/References";
import { Contact } from "@/components/Contact";
import { portfolioContent } from "@/lib/content";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        
        {portfolioContent.projects.length > 0 && <ProjectGrid />}
        {Object.values(portfolioContent.skills).some(arr => arr.length > 0) && <SkillMatrix />}
        {portfolioContent.education.length > 0 && <Education />}
        {portfolioContent.references.length > 0 && <References />}
        
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-glass-border/20 glass-nav">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="cyber-text font-semibold">
              Mohammed Thanfees
            </div>
            
            <div className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="/.well-known/security.txt" className="hover:text-cyber-cyan transition-colors">
                Security Policy
              </a>
              <span>•</span>
              <a href="/vulnerability-disclosure" className="hover:text-cyber-cyan transition-colors">
                Vulnerability Disclosure
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;