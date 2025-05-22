"use client";

import { useEffect, useState } from "react";

type Props = {
  texts: string[];
  speed?: number;
  pause?: number;
  deletingSpeed?: number;
};

export default function Typewriter({ texts, speed = 80, pause = 2000, deletingSpeed = 40 }: Props) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (isPausing) {
      timeout = setTimeout(() => {
        setIsPausing(false);
        setIsDeleting(true);
      }, pause);
    } else if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      setIsPausing(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, isPausing, texts, speed, pause, deletingSpeed]);

  return (
    <span
      className="whitespace-pre font-mono text-blue-600 font-semibold"
      style={{ fontFamily: "JetBrains Mono, monospace" }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
