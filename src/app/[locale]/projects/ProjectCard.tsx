"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { motion } from "framer-motion";

type ProjectCardProps = {
  project: Project;
  translations: {
    viewCode: string;
    viewDemo: string;
  };
};

const ProjectCard = ({ project, translations }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl hover:cursor-pointer"
    >
      <Link href={"/projects/" + project.slug} className="block">
        <div className="h-48 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-heading font-bold mb-2">{project.title} </h3>
          <div className="w-full max-w-[300px]">
            <p className="text-gray-600 mb-4 break-words">{project.shortDescription}</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
      <div className="flex space-x-4 p-6">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium focus:underline focus:outline-none"
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
    </motion.article>
  );
};

export default ProjectCard;
