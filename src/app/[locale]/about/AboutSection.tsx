import { getItems } from "@/lib/getProjects";
import { useLocale, useTranslations } from "next-intl";
import Text from "@/designSystem/Texts";

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
    <section className="flex flex-col sm:flex-row w-full justify-center bg-primary px-7 md:px-12 lg:px-48 shadow-md py-20">
      <div className="flex flex-col-reverse items-center justify-between w-full max-w-6xl gap-12 lg:flex-row ">
        <div className="flex flex-col items-center justify-end w-full space-y-6 lg:items-start md:items-center sm:mr-16">
          <Text as="h1" size="2xl" className="font-heading text-blue-600">
            {t("title")}
          </Text>

          <Text as="p" className="text-center sm:text-left">
            {t("paragraph1")}
          </Text>

          <Text>{t("paragraph2")}</Text>

          <Text as="p" className="text-left">
            {t("paragraph3")}
          </Text>

          <Text>{t("paragraph4")}</Text>
          <ul className="ml-2 flex flex-col w-full">
            {texts.aboutMe.interests.map((interest, index) => (
              <li key={index} className="flex items-start justify-center sm:justify-start">
                <span className="px-2 text-lg">{interestEmojis[interest.icon]}</span>
                <Text className="text-left">{interest.text}</Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img src="/assets/hiking.svg" alt="Developer illustration" className="h-96 mt-12 sm:mt-0" />
      </div>
    </section>
  );
};

export default AboutSection;
