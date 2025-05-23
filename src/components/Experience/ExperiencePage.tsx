"use client";

import { useLocale, useTranslations } from "next-intl";

import ExperienceItem from "./ExperienceItem";
import Text from "@/designSystem/Texts";
import { getItems } from "@/lib/getProjects";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  const t = useTranslations("experience");
  const locale = useLocale();
  const texts = getItems(locale);
  const experienceItems = texts.experience.items;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Text as="h2" size="2xl" className="font-heading text-blue-600 mb-16 text-center">
          {t("title")}
        </Text>
      </motion.div>
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
