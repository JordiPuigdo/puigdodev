import Link from "next/link";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  translations: {
    viewCode: string;
    viewDemo: string;
  };
};

const ProjectCard = ({ project, translations }: ProjectCardProps) => {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
      <div className="h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-heading font-bold mb-2">{project.title} </h3>
        <div className="w-full max-w-[300px]">
          <p className="text-gray-600 mb-4 break-words">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {translations.viewCode}
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {translations.viewDemo}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
