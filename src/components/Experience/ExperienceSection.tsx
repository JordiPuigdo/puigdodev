"use client";

import ExperiencePage from "./ExperiencePage";
import { Section } from "../layout/Section";

import { ButtonResume } from "../ui/ButtonResume";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function ExperienceSection() {
  const isMobile = useIsMobile();
  return (
    <Section id="Hero" as="primary">
      <div className="flex  flex-col-reverse items-center justify-between w-full max-w-6xl gap-12 lg:flex-row px-4 sm:p-0 ">
        <div className="flex py-16 flex-col items-center justify-end w-full space-y-6 lg:items-start md:items-center sm:mr-16">
          <ExperiencePage />
          {isMobile && (
            <div className="p-12">
              <ButtonResume />
            </div>
          )}
        </div>
      </div>

      {!isMobile && (
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-center">
          <img
            src="/assets/knowledge.svg"
            alt="Developer illustration"
            className="h-96 mt-12 sm:mt-0"
          />
          <ButtonResume />
        </div>
      )}
    </Section>
  );
}
