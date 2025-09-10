import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6",
        hover && "hover:cyber-glow hover:border-cyber-cyan/50 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}