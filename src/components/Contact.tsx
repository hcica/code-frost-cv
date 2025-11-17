import { useEffect, useMemo, useState } from "react";
import { GlassCard } from "./GlassCard";
import { PrimaryCTA } from "./PrimaryCTA";
import { portfolioContent } from "@/lib/content";
import { obfuscateEmail } from "@/lib/utils";

const typingMessages = [
  "Let's secure your stack together.",
  "Need a penetration test? Let's talk.",
  "Incident response on your mind?",
  "Ship features safely with a security review.",
  "Zero trust roadmap? I'm here to help."
];

export function Contact() {
  const { person } = portfolioContent;
  const [showEmail, setShowEmail] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentMessage = useMemo(() => typingMessages[messageIndex], [messageIndex]);
  const displayedText = useMemo(() => currentMessage.slice(0, charIndex), [currentMessage, charIndex]);

  useEffect(() => {
    const atEnd = charIndex === currentMessage.length;
    const atStart = charIndex === 0;

    const delay = !isDeleting && atEnd
      ? 12000 // hold full message for 12s before deleting
      : isDeleting && atStart
        ? 600
        : isDeleting
          ? 40
          : 80;

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        if (!atEnd) {
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (!atStart) {
          setCharIndex((prev) => Math.max(0, prev - 1));
        } else {
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % typingMessages.length);
        }
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [charIndex, currentMessage.length, currentMessage, isDeleting]);

  const handleEmailClick = () => {
    if (showEmail) {
      window.location.href = `mailto:${person.contacts.email}`;
    } else {
      setShowEmail(true);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="cyber-text">Touch</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg text-cyber-cyan font-mono max-w-2xl mx-auto">
            <span>{displayedText}</span>
            <span className="inline-block w-2 h-6 bg-cyber-cyan animate-pulse rounded-sm" aria-hidden="true" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard hover className="slide-up group">
            <h3 className="text-2xl font-semibold mb-6 cyber-text group-hover:text-cyber-violet transition-colors">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:cyber-glow transition-all">
                  <svg className="w-6 h-6 text-cyber-cyan group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <button 
                    onClick={handleEmailClick}
                    className="text-cyber-cyan hover:text-cyber-cyan-glow transition-colors"
                  >
                    {showEmail ? person.contacts.email : obfuscateEmail(person.contacts.email)}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:cyber-glow transition-all">
                  <svg className="w-6 h-6 text-cyber-cyan group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a 
                    href={`tel:${person.contacts.phone}`}
                    className="text-cyber-cyan hover:text-cyber-cyan-glow transition-colors"
                  >
                    {person.contacts.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:cyber-glow transition-all">
                  <svg className="w-6 h-6 text-cyber-cyan group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <span className="text-foreground">{person.contacts.address}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-glass-border/20">
              <div className="flex items-center gap-4">
                <a
                  href={`https://linkedin.com/in/${person.contacts.linkedin.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button p-3 hover:cyber-glow"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a
                  href={`https://github.com/${person.contacts.github.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button p-3 hover:cyber-glow"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </GlassCard>

          <GlassCard hover className="slide-up group">
            <h3 className="text-2xl font-semibold mb-6 cyber-text group-hover:text-cyber-violet transition-colors">Security & Privacy</h3>
            
            <div className="space-y-4">
              {/* Removed CV download action */}
              
              <div className="glass-card bg-glass-bg/40 p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Security Information
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• <a href="/.well-known/security.txt" className="text-cyber-cyan hover:text-cyber-cyan-glow">Security Policy</a></div>
                  <div>• <a href="/vulnerability-disclosure" className="text-cyber-cyan hover:text-cyber-cyan-glow">Vulnerability Disclosure</a></div>
                  <div>• End-to-end encrypted communications available</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
