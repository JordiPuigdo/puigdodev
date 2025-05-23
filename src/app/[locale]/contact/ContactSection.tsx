"use client";
import { Mail, Phone, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import Text from "@/designSystem/Texts";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 1 } },
};

const ContactSection = () => {
  const t = useTranslations("contact");

  return (
    <section className="py-16 px-4 text-center">
      <motion.section
        className="py-16 px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Text as="h2" className="font-heading text-blue-600" size="2xl">
          {t("getInTouch")}
        </Text>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10"
          variants={containerVariants}
        >
          {[Phone, Clock, Mail].map((Icon, i) => (
            <motion.div key={i} className="flex flex-col items-center" variants={itemVariants}>
              <Icon className="w-8 h-8 text-blue-600 mb-2" />
              <p className="font-medium">
                {i === 0 && "+34 628 735 826"}
                {i === 1 && `08:00 - 17:00 (${t("monThu")})\n08:00 - 14:00 (${t("friday")})`}
                {i === 2 && "hola@puigdo.dev"}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </section>
  );
};

export default ContactSection;
