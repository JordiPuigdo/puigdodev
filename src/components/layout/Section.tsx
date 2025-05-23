import { ReactNode } from "react";

type As = "primary" | "secondary" | "tertiary";

export const Section = ({
  id = "",
  children,
  as,
}: {
  id?: string;
  children: ReactNode;
  as?: As;
}) => {
  let className = "flex w-full justify-center px-7 md:px-12 lg:px-48  shadow-md py-6 ";
  if (as === "primary") {
    className += "bg-primary";
  }
  if (as === "secondary") {
    className += "bg-gray-900";
  }
  if (as === "tertiary") {
    className += "bg-tertiary";
  }
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};
