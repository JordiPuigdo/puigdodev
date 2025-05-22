// components/FormattedTextWithIcons.tsx
import React from "react";

const iconMap: Record<string, string> = {
  "💻": "computer",
  "🚀": "rocket",
  "🏡": "house",
  "🌍": "globe",
  "✈️": "airplane",
};

const FormattedTextWithIcons: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(<[*][^*]+[*]>|[*][^*]+[*]|[\u{1F300}-\u{1F9FF}])/gu);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("<*") && part.endsWith("*>")) {
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
        return part;
      })}
    </>
  );
};

export default FormattedTextWithIcons;
