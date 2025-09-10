import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "cyber" | "skill";
  className?: string;
}

export function Tag({ children, variant = "default", className }: TagProps) {
  const variants = {
    default: "tag-chip",
    cyber: "tag-chip border-cyber-cyan/40 text-cyber-cyan",
    skill: "skill-badge"
  };

  return (
    <span className={cn(variants[variant], className)}>
      {children}
    </span>
  );
}