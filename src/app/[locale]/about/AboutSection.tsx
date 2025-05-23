"use client";
import Image from "next/image";
import { getItems } from "@/lib/getProjects";
import { useLocale, useTranslations } from "next-intl";
import Text from "@/designSystem/Texts";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

const AboutSection = () => {
  const t = useTranslations("aboutMe");
  const locale = useLocale();
  const texts = getItems(locale);

  const interestEmojis: Record<string, string> = {
    music: "🎶",
    gamepad: "🕹️",
    plane: "🌍",
    mountain: "🏔️",
    book: "📖",
  };
  return (
    <Section as="primary">
      <div className="flex flex-col-reverse py-12 items-center justify-between w-full max-w-6xl gap-12 lg:flex-row">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-end w-full lg:w-1/2 space-y-6 lg:items-start md:items-center"
        >
          <div className="flex flex-col gap-4">
            <Text
              as="h1"
              size="2xl"
              className="font-heading text-blue-600 text-center sm:text-left"
            >
              {t("title")}
            </Text>

            <Text as="p" className="text-center sm:text-left">
              {t("paragraph1")}
            </Text>

            <Text className="text-center sm:text-left">{t("paragraph2")}</Text>

            <Text as="p" className="text-center sm:text-left">
              {t("paragraph3")}
            </Text>

            <Text className="text-center sm:text-left">{t("paragraph4")}</Text>
            <ul className="ml-2 flex flex-col w-full">
              {texts.aboutMe.interests.map((interest, index) => (
                <li key={index} className="flex items-start justify-center sm:justify-start">
                  <span className="px-2 text-lg">{interestEmojis[interest.icon]}</span>
                  <Text className="text-left">{interest.text}</Text>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <Image src="/assets/hiking.svg" alt="Developer illustration" width={750} height={750} />
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;
