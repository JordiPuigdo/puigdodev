import { notFound } from "next/navigation";

import { Project } from "@/types/project";
import { getProjects } from "@/lib/getProjects";
import { useLocale } from "next-intl";
import ProjectHeader from "./ProjectHeader";
import ProjectHero from "./ProjectHero";
import Testimonials from "@/components/Trusted/TestimonialComponent";
import FooterProjectSection from "@/components/ui/FooterProjectSection";
import { ProjectContent } from "./ProjectContent";
import BackButton from "@/components/ui/BackButton";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const locale = useLocale();
  const projects: Project[] = getProjects(locale);
  const project = (projects as Project[]).find((p) => p.slug === params.slug);

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
