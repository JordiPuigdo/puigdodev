"use client";

import React from "react";
import Typewriter from "@/components/TypeWriter";
import { useTranslations } from "next-intl";
import WaveHand from "../../../components/ui/WaheHandComponent";
import SocialLogoSection from "@/components/ui/SocialLogoSection";
import { Title } from "@/designSystem/Title";
import Text from "@/designSystem/Texts";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

const HeroSection: React.FC = () => {
  const t = useTranslations("home");
  const typewriterTexts = t.raw("typewriterTexts");

  return (
    <Section id="Hero" as="primary">
      <div className="flex flex-col-reverse items-center justify-between w-full max-w-6xl gap-12 lg:flex-row">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-end w-full lg:w-1/2 space-y-6 lg:items-start md:items-center"
        >
          <div className="flex items-center">
            <Title as="h1" size="2xl" className="font-heading font-bold text-blue-600">
              {t("title")}
            </Title>
            <WaveHand size="lg" className="ml-2" />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <Text size="xl" className="font-pop">
              {t("name")}
            </Text>
            <Text size="l">{t("description")}</Text>
          </div>
          <Typewriter texts={typewriterTexts} speed={100} />
          <SocialLogoSection />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <img src="/assets/developer.svg" alt="Developer illustration" className="h-auto" />
        </motion.div>
      </div>
    </Section>
  );
};

export default HeroSection;
