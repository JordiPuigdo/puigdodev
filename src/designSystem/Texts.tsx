import React from "react";
import clsx from "clsx";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xldr" | "2xl" | "default" | "l";
type As = "h1" | "h2" | "h3" | "p" | "span";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  size?: Size;
  as?: As;
  className?: string;
  children: React.ReactNode;
}

const iconMap: Record<string, string> = {
  "💻": "computer",
  "🚀": "rocket",
  "🏡": "house",
  "🌍": "globe",
  "✈️": "airplane",
};

const sizeMap: Record<Size, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  l: "text-l",
  xldr: "text-[1.375rem]",
  "2xl": "text-2xl",
  default: "",
};

const parseText = (text: string) => {
  return text.split(/(<\*[^*]+?\*>|\*[^*]+?\*|¡\*[^*]+?\*¡|[\u{1F300}-\u{1F9FF}])/gu);
};

const Text: React.FC<TextProps> = ({
  size = "default",
  as = "span",
  className,
  children,
  ...props
}) => {
  const Component = as;

  if (typeof children !== "string") {
    return (
      <Component className={clsx(sizeMap[size], className)} {...props}>
        {children}
      </Component>
    );
  }
  const parts = parseText(children);
  return (
    <Component className={clsx(sizeMap[size], className)} {...props}>
      {parts.map((part, index) => {
        if (part.startsWith("<*") && part.endsWith("*>")) {
          return (
            <span key={index} className="font-semibold text-primary">
              {part.slice(2, -2)}
            </span>
          );
        } else if (part.startsWith("¡*") && part.endsWith("*¡")) {
          return (
            <span key={index} className="font-bold text-blue-600">
              {part.slice(2, -2)}
            </span>
          );
        } else if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <span key={index} className="font-bold">
              {part.slice(1, -1)}
            </span>
          );
        } else if (iconMap[part]) {
          return (
            <span key={index} role="img" aria-label={iconMap[part]} className="inline-block mr-1">
              {part}
            </span>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </Component>
  );
};

export default Text;
