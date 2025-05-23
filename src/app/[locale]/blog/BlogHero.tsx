"use client";

import { useTranslations } from "next-intl";
import Text from "@/designSystem/Texts";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

export default function BlogHero() {
  const t = useTranslations("blog");
  //const texts = getItems(locale);
  return (
    <Section as="primary">
      <div className="flex flex-col-reverse py-12 items-center justify-between w-full max-w-6xl gap-12 lg:flex-row">
        <motion.div
          className="flex flex-col items-center justify-end w-full lg:w-1/2 space-y-6 lg:items-start md:items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Text as="h1" size="2xl" className="font-heading text-blue-600 text-center sm:text-left">
            {t("title")}
          </Text>
          <Text as="p" size="l" className="text-center sm:text-left">
            {t("subtitle")}
          </Text>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <img src="/assets/blog.svg" alt="Developer illustration" className="h-96" />
        </motion.div>
      </div>
    </Section>
  );
}
