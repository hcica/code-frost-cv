import { PrimaryCTA } from "./PrimaryCTA";
import { portfolioContent } from "@/lib/content";
import heroBg from "@/assets/red-team-bg.jpg";

export function Hero() {
  const { person } = portfolioContent;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/40" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-cyan/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-violet/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-4 text-center relative z-10 pb-24 sm:pb-32">
        <div className="max-w-4xl mx-auto fade-in">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 border border-cyber-cyan/30">
            <div className="w-2 h-2 bg-cyber-success rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for Security Opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">{person.name}</span>
            <span className="cyber-text">{person.title.split('|')[0].trim()}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {person.summary}
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12 text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{person.location}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 sm:mb-8 z-20 relative">
            <PrimaryCTA 
              variant="cyber" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
            </PrimaryCTA>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 glow-pulse pointer-events-none select-none hidden md:block z-0" aria-hidden="true">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
