"use client";
import { useTranslations } from "next-intl";
import ExperiencePage from "./ExperiencePage";
import { SvgDocumentDownload } from "@/icons/SvgDocumentDownload";

export default function ExperienceSection() {
  const t = useTranslations("experience");
  return (
    <section className="flex flex-col sm:flex-row w-full justify-center bg-primary px-7 md:px-12 lg:px-48 shadow-md py-20">
      <div className="flex flex-col-reverse items-center justify-between w-full max-w-6xl gap-12 lg:flex-row px-4 sm:p-0 ">
        <div className="flex flex-col items-center justify-end w-full space-y-6 lg:items-start md:items-center sm:mr-16">
          <ExperiencePage />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-center">
        <img
          src="/assets/knowledge.svg"
          alt="Developer illustration"
          className="h-96 mt-12 sm:mt-0"
        />
        <div
          className="flex p-4 bg-white rounded-xl gap-2 hover:cursor-pointer border-2 border-blue-600 transition-all"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/resume/jordpuigdollers.pdf";
            link.download = "/resume/jordpuigdollers.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          <SvgDocumentDownload className="flex h-6 text-blue-600" />
          <button className="font-sans h-7 font-semibold text-l ">{t("download")}</button>
        </div>
      </div>
    </section>
  );
}
