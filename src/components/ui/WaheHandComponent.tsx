import React from "react";

interface WaveHandProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const WaveHand: React.FC<WaveHandProps> = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
    xl: "text-5xl",
  };

  return (
    <span
      className={`wave inline-block ${sizeClasses[size]} ${className}`}
      role="img"
      aria-label="wave"
    >
      👋🏻
    </span>
  );
};

export default WaveHand;
