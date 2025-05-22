"use client";

import { useTranslations } from "next-intl";
import Text from "@/designSystem/Texts";
import { motion } from "framer-motion";

export default function BlogHero() {
  const t = useTranslations("blog");
  //const texts = getItems(locale);
  return (
    <section className="relative bg-primary py-20 px-7 md:px-12 lg:px-48">
      <div className="flex">
        <div className="flex flex-col w-full items-start justify-start">
          <motion.div
            className="flex flex-col w-full items-start justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Text as="h1" size="2xl" className="font-heading text-blue-600">
              {t("title")}
            </Text>
            <Text as="p" size="l" className="">
              {t("subtitle")}
            </Text>
          </motion.div>
        </div>
        <div className="w-full">
          <motion.div
            className="w-full flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <img src="/assets/blog.svg" alt="Developer illustration" className="h-80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
