import FormattedText from "@/app/[locale]/home/FormattedText";
import SocialLogoSection from "./SocialLogoSection";
import { useTranslations } from "next-intl";

export default function FooterProjectSection() {
  const t = useTranslations("projects");
  return (
    <div className="flex flex-col items-center justify-center bg-primary p-10 gap-4">
      <p>
        <FormattedText text={t(`footer`)} />
      </p>
      <SocialLogoSection />
    </div>
  );
}
