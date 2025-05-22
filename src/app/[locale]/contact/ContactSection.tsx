import { Mail, Phone, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import Text from "@/designSystem/Texts";

const ContactSection = () => {
  const t = useTranslations("contact");

  return (
    <section className="py-16 px-4 text-center">
      <Text as="h2" className="font-heading text-blue-600" size="2xl">
        {t("getInTouch")}{" "}
      </Text>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
        <div className="flex flex-col items-center">
          <Phone className="w-8 h-8 text-blue-600 mb-2" />
          <p className="font-medium">+34 628 735 826</p>
        </div>

        <div className="flex flex-col items-center">
          <Clock className="w-8 h-8 text-blue-600 mb-2" />
          <p>
            08:00 - 17:00 ({t("monThu")}) <br />
            08:00 - 14:00 ({t("friday")})
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Mail className="w-8 h-8 text-blue-600 mb-2" />
          <p>hola@puigdo.dev</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
