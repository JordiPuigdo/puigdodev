import React from "react";
import { useTranslations } from "next-intl";
import FormattedText from "./FormattedText";

const IntroductionSection: React.FC = () => {
  const t = useTranslations("home");

  return (
    <section className="flex flex-col md:flex-row gap-12 w-full justify-center items-center px-8 py-24 lg:px-40 ">
      <div className="rounded-full w-[350px] sm:w-[350px] md:w-[550px] lg:w-[450px] xl:w-[350px]  ">
        <img
          src="/assets/jordi.puigdollers.webp"
          alt="Developer illustration"
          className="h-auto rounded-full hover:animate-bounceY"
        />
      </div>
      <div className="flex flex-col items-start px-8">
        <h2 className="text-2xl font-semibold text-gray-800">{t("introduction.heading")}</h2>
        {[1, 2, 3, 4].map((paragraph) => (
          <p key={paragraph} className="text-gray-700 mt-4">
            <FormattedText text={t(`introduction.paragraph${paragraph}`)} />
          </p>
        ))}
      </div>
    </section>
  );
};

export default IntroductionSection;
