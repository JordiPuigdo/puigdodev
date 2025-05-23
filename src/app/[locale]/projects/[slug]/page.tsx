"use client";

import { notFound, useParams } from "next/navigation";
import { useLocale } from "next-intl";

import { Project } from "@/types/project";
import { getProjects } from "@/lib/getProjects";
import ProjectHeader from "./ProjectHeader";
import ProjectHero from "./ProjectHero";
import Testimonials from "@/components/Trusted/TestimonialComponent";
import FooterProjectSection from "@/components/ui/FooterProjectSection";
import { ProjectContent } from "./ProjectContent";
import BackButton from "@/components/ui/BackButton";

export default function ProjectPage() {
  const locale = useLocale();
  const params = useParams();
  const slug = params?.slug as string;

  const projects: Project[] = getProjects(locale);
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-16 ">
        <ProjectHeader title={project.title} subtitle={project.subtitle} />
        <ProjectHero
          altText={project.altText || ""}
          description={project.description}
          imageUrl={project.detailImageUrl}
        />
        <ProjectContent project={project} />
        <BackButton />
      </div>
      <Testimonials />
      <FooterProjectSection />
    </div>
  );
}
