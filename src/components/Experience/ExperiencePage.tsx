"use client";

import { useLocale, useTranslations } from "next-intl";

import ExperienceItem from "./ExperienceItem";
import Text from "@/designSystem/Texts";
import { getItems } from "@/lib/getProjects";

const ExperiencePage = () => {
  const t = useTranslations("experience");
  const locale = useLocale();
  const texts = getItems(locale);
  const experienceItems = texts.experience.items;
  return (
    <>
      <Text as="h2" size="2xl" className="font-heading text-blue-600 mb-16 text-center">
        {t("title")}
      </Text>

      <div className="relative border-l-2 border-white pl-6 space-y-12">
        {experienceItems.map((exp, index) => (
          <ExperienceItem
            key={index}
            company={exp.company}
            role={exp.role}
            date={exp.date}
            description={exp.description}
            techStack={exp.techStack}
          />
        ))}
      </div>
    </>
  );
};

export default ExperiencePage;
