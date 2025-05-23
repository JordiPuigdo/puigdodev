"use client";
import { useTranslations } from "next-intl";
import ExperiencePage from "./ExperiencePage";
import { SvgDocumentDownload } from "@/icons/SvgDocumentDownload";
import { Section } from "../layout/Section";
import { isMobile } from "react-device-detect";

export default function ExperienceSection() {
  const t = useTranslations("experience");
  return (
    <Section id="Hero" as="primary">
      <div className="flex  flex-col-reverse items-center justify-between w-full max-w-6xl gap-12 lg:flex-row px-4 sm:p-0 ">
        <div className="flex py-16 flex-col items-center justify-end w-full space-y-6 lg:items-start md:items-center sm:mr-16">
          <ExperiencePage />
        </div>
      </div>

      {!isMobile && (
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-center">
          <img
            src="/assets/knowledge.svg"
            alt="Developer illustration"
            className="h-96 mt-12 sm:mt-0"
          />
          <div
            className="flex p-3 px-4 bg-white rounded-xl gap-2 hover:cursor-pointer border-2 border-blue-600 transition-all hover:bg-blue-600 hover:text-white"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume/jordpuigdollers.pdf";
              link.download = "/resume/jordpuigdollers.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <SvgDocumentDownload className="flex " />
            <button className="font-sans  font-semibold text-l ">{t("download")}</button>
          </div>
        </div>
      )}
    </Section>
  );
}
