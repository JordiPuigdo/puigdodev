import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const AnimateOnViewport = dynamic(() => import("components/ui/AnimatedOnViewPort"), { ssr: false });

export const Title = ({
  size = "xl",
  as = "h3",
  className = "",
  wrapperClassName = "",
  isAnimated = false,
  origin = "bottom",
  onClick = undefined,
  children,
  id = "",
}: {
  size?: "3xl" | "2xl" | "xl" | "xldr";
  weight?: string;
  as?: "h3" | "h2" | "h1";
  className?: string;
  wrapperClassName?: string;
  isAnimated?: boolean;
  origin?: "top" | "right" | "bottom" | "left";
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (...args: any[]) => void;
  id?: string;
}) => {
  const HtmlComponent = as;

  const STYLES = {
    "3xl": "text-4xl lg:text-6xl",
    "2xl": "text-3xl lg:text-5xl",
    xl: "text-xl lg:text-2xl",
    xldr: "text-[28px] leading-[36px]",
  };

  const styles = twMerge(
    `font-heading text-hg-secondary font-bold text-balance ${STYLES[size]} ${className}`
  );

  if (isAnimated) {
    return (
      <AnimateOnViewport className={wrapperClassName} origin={origin}>
        <HtmlComponent className={styles} onClick={onClick} id={id}>
          {children}
        </HtmlComponent>
      </AnimateOnViewport>
    );
  }

  return (
    <HtmlComponent className={styles} onClick={onClick} id={id}>
      {children}
    </HtmlComponent>
  );
};
