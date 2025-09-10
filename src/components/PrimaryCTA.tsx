import { cn } from "@/lib/utils";

interface PrimaryCTAProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "default" | "cyber" | "outline";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function PrimaryCTA({ 
  children, 
  onClick, 
  href, 
  variant = "default", 
  className,
  size = "md"
}: PrimaryCTAProps) {
  const variants = {
    default: "glass-button cyber-glow bg-gradient-cyber text-primary-foreground hover:shadow-glow-violet",
    cyber: "glass-button border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/10 hover:shadow-glow",
    outline: "glass-button border-glass-border/50 hover:border-cyber-cyan/50 hover:shadow-glow"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        "font-medium transition-all duration-300 inline-flex items-center justify-center",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </Component>
  );
}