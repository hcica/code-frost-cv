import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { portfolioContent } from "@/lib/content";
import { obfuscateEmail } from "@/lib/utils";

export function References() {
  const { references } = portfolioContent;
  const [isExpanded, setIsExpanded] = useState(false);
  const [showEmails, setShowEmails] = useState<{ [key: number]: boolean }>({});

  const handleEmailClick = (index: number, email: string) => {
    if (showEmails[index]) {
      window.location.href = `mailto:${email}`;
    } else {
      setShowEmails(prev => ({ ...prev, [index]: true }));
    }
  };

  if (references.length < 1) return null;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard hover className="slide-up group">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between text-left"
            >
              <h3 className="text-2xl font-semibold cyber-text group-hover:text-cyber-violet transition-colors">
                Professional References
              </h3>
              <svg 
                className={`w-6 h-6 transition-transform duration-300 group-hover:text-cyber-cyan group-hover:scale-110 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isExpanded && (
              <div className="mt-6 space-y-6 animate-accordion-down">
                {references.map((ref, index) => (
                  <div key={index} className="glass-card bg-glass-bg/40 p-4 print-avoid-break">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {ref.name}
                    </h4>
                    <p className="text-cyber-cyan font-medium mb-3">
                      {ref.role}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <button
                          onClick={() => handleEmailClick(index, ref.email)}
                          className="text-muted-foreground hover:text-cyber-cyan transition-colors"
                        >
                          {showEmails[index] ? ref.email : obfuscateEmail(ref.email)}
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a 
                          href={`tel:${ref.phone}`}
                          className="text-muted-foreground hover:text-cyber-cyan transition-colors"
                        >
                          {ref.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}