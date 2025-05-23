"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import { Project } from "@/types/project";
import ProjectsHero from "./ProjectsHero";
import { getProjects } from "@/lib/getProjects";
import FooterProjectSection from "@/components/ui/FooterProjectSection";

export default function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: Project[] = getProjects(locale);

  projects.forEach((project) => {
    project.id = Math.random();
  });

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category.includes(activeFilter) || project.tags.includes(activeFilter)
        );

  return (
    <main className="flex bg-white flex-col w-full">
      <ProjectsHero />
      <ProjectFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        filters={[
          { id: "all", label: t("filters.all") },
          { id: "web", label: t("filters.web") },
          { id: "app", label: t("filters.app") },
          { id: "blockchain", label: t("filters.blockchain") },
          { id: "ia", label: t("filters.ia") },
        ]}
      />
      <section
        id="projects-grid"
        className="flex px-8 sm:px-0 py-12 md:p-28 bg-neutral-900/20 items-center justify-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              translations={{
                viewCode: t("viewCode"),
                viewDemo: t("viewDemo"),
              }}
            />
          ))}
        </div>
      </section>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">{t("noProjects")}</p>
        </div>
      )}
      <FooterProjectSection />
    </main>
  );
}
