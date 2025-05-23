"use client";
import { SvgDocumentDownload } from "@/icons/SvgDocumentDownload";
import { useTranslations } from "next-intl";

export const ButtonResume = () => {
  const t = useTranslations("experience");
  return (
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
  );
};
