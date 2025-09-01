import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

const Logo = ({ size = "medium", className }: LogoProps) => {
  const sizeClasses = {
    small: "h-8 w-auto",
    medium: "h-12 w-auto", 
    large: "h-16 w-auto"
  };

  return (
    <img 
      src="/lovable-uploads/1e7b7bfa-923a-4a0d-953a-ef87b64f5f68.png"
      alt="REDSEYA - Reddit Marketing Agency"
      className={cn(
        "object-contain transition-transform duration-300 hover:scale-105",
        sizeClasses[size],
        className
      )}
    />
  );
};

export default Logo;