import { ExperienceItemProps } from "@/types/experince";
import { FC } from "react";
import Text from "@/designSystem/Texts";
import { motion } from "framer-motion";

const ExperienceItem: FC<ExperienceItemProps> = ({
  company,
  role,
  date,
  description,
  techStack,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl p-6 border-l-4 border-blue-600 shadow-md hover:shadow-lg hover:scale-[1.01] transition-all"
    >
      <Text as="h3" size="lg" className="font-heading text-softblue">
        {role} <span className="text-primary500">@ {company}</span>
      </Text>
      <div className="flex flex-col">
        <Text className="text-xs text-gray-500 mt-1 mb-3">{date}</Text>

        <Text className="text-sm mb-4">{description}</Text>
      </div>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="bg-pastelYellow text-black px-3 py-1 text-xs rounded-full font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
