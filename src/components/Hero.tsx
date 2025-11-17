import { useEffect, useMemo, useState } from "react";
import { PrimaryCTA } from "./PrimaryCTA";
import { portfolioContent } from "@/lib/content";
import heroBg from "@/assets/red-team-bg.jpg";

const stoicQuotes = [
  { text: "You have power over your mind—not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
  { text: "We suffer more often in imagination than in reality.", author: "Seneca" },
  { text: "The impediment to action advances action. What stands in the way becomes the way.", author: "Marcus Aurelius" },
  { text: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus" },
  { text: "First say to yourself what you would be; and then do what you have to do.", author: "Epictetus" },
  { text: "Make the mind tougher by exposing it to adversity.", author: "Robert Greene" },
  { text: "If it is not right, do not do it; if it is not true, do not say it.", author: "Marcus Aurelius" },
  { text: "No man is free who is not master of himself.", author: "Epictetus" },
  { text: "Man conquers the world by conquering himself.", author: "Zeno of Citium" },
  { text: "Luck is what happens when preparation meets opportunity.", author: "Seneca" },
  { text: "He suffers more than necessary, who suffers before it is necessary.", author: "Seneca" },
  { text: "Don't explain your philosophy. Embody it.", author: "Epictetus" },
  { text: "How long are you going to wait before you demand the best for yourself?", author: "Epictetus" },
  { text: "We should always be asking ourselves: Is this something that is, or is not, in my control?", author: "Epictetus" },
  { text: "Waste no more time arguing what a good man should be. Be one.", author: "Marcus Aurelius" },
  { text: "Never outshine the master.", author: "Robert Greene" },
  { text: "Always say less than necessary.", author: "Robert Greene" },
  { text: "Conceal your intentions.", author: "Robert Greene" },
  { text: "Reputation is the cornerstone of power.", author: "Robert Greene" },
  { text: "When asking for help, appeal to people’s self-interest.", author: "Robert Greene" },
  { text: "Don't demand that things happen as you wish, but wish that they happen as they do, and you will go on well.", author: "Epictetus" },
  { text: "Sometimes even to live is an act of courage.", author: "Seneca" },
  { text: "No great thing is created suddenly.", author: "Epictetus" },
  { text: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca" },
  { text: "A gem cannot be polished without friction, nor a man perfected without trials.", author: "Seneca" },
  { text: "Self-control is strength. Right thought is mastery. Calmness is power.", author: "James Allen" },
  { text: "Fate leads the willing, and drags along the unwilling.", author: "Seneca" },
  { text: "Be tolerant with others and strict with yourself.", author: "Marcus Aurelius" },
  { text: "The best revenge is to be unlike your enemy.", author: "Marcus Aurelius" },
  { text: "If you want to improve, be content to be thought foolish and stupid.", author: "Epictetus" },
  { text: "It is not the man who has too little that is poor, but the one who hankers after more.", author: "Seneca" },
  { text: "Begin at once to live, and count each separate day as a separate life.", author: "Seneca" },
  { text: "A man who fears suffering is already suffering from what he fears.", author: "Michel de Montaigne" },
  { text: "Anger, if not restrained, is more hurtful than the injury that provokes it.", author: "Seneca" },
  { text: "Think of yourself as dead. You have lived your life. Now take what's left and live it properly.", author: "Marcus Aurelius" },
  { text: "The whole future lies in uncertainty: live immediately.", author: "Seneca" },
  { text: "The more we value things outside our control, the less control we have.", author: "Epictetus" },
  { text: "Only the educated are free.", author: "Epictetus" },
  { text: "Practice yourself, for heaven's sake, in little things; and thence proceed to greater.", author: "Epictetus" },
  { text: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.", author: "Marcus Aurelius" },
  { text: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius" },
  { text: "Seek not the good in external things; seek it in yourselves.", author: "Epictetus" },
  { text: "Receive without pride, let go without attachment.", author: "Marcus Aurelius" },
  { text: "Do not disturb yourself by picturing your life as a whole.", author: "Marcus Aurelius" },
  { text: "If anyone tells you that a certain person speaks ill of you, do not make excuses but answer: he was ignorant of my other faults.", author: "Epictetus" },
  { text: "We are more often frightened than hurt; and we suffer more from imagination than from reality.", author: "Seneca" },
  { text: "What injures the hive injures the bee.", author: "Marcus Aurelius" },
  { text: "When jarred, unavoidably, revert at once to yourself.", author: "Marcus Aurelius" }
];

export function Hero() {
  const { person } = portfolioContent;
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentQuote = useMemo(() => stoicQuotes[quoteIndex], [quoteIndex]);
  const displayedQuote = useMemo(() => currentQuote.text.slice(0, charIndex), [currentQuote.text, charIndex]);

  useEffect(() => {
    const atEnd = charIndex === currentQuote.text.length;
    const atStart = charIndex === 0;

    const delay = !isDeleting && atEnd
      ? 12000 // hold full quote for 12s
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
          setQuoteIndex((prev) => (prev + 1) % stoicQuotes.length);
        }
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [charIndex, currentQuote.text, isDeleting]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background/95 backdrop-blur-[2px]" />
      
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
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-50 drop-shadow-lg">
            <span className="block">{person.name}</span>
            <span className="cyber-text text-cyber-cyan">{person.title.split('|')[0].trim()}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-100/90 mb-8 max-w-3xl mx-auto transition-opacity duration-500">
            “{displayedQuote}”
            <span className="inline-block w-2 h-6 bg-cyber-cyan animate-pulse rounded-sm align-middle ml-1" aria-hidden="true" />
            <span className="text-cyber-cyan block mt-2">— {currentQuote.author}</span>
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12 text-slate-200">
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
