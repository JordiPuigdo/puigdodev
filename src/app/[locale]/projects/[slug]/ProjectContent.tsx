import Text from "designSystem/Texts";
import { Project } from "@/types/project";

type ProjectContentProps = {
  project: Project;
};

export const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <div className="flex w-full">
      <div className="w-full flex p-2 gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="w-full flex flex-row gap-6 mb-6 justify-center">
        <div className="flex flex-col">
          <Text as="p" className="font-semibold">
            Rol
          </Text>
          <Text as="p">{project.role}</Text>
        </div>
        <div className="flex flex-col">
          <Text as="p" className="font-semibold">
            Data
          </Text>
          <Text as="p">{project.duration}</Text>
        </div>
      </div>
    </div>
  );
};
