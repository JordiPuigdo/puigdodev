import { useTranslations } from "next-intl";
import Text from "@/designSystem/Texts";

const tools = [
  { name: "C Sharp", icon: "/tools/csharp.svg" },
  { name: "React", icon: "/tools/reactjs.svg" },
  { name: "Azure Functions", icon: "/tools/azureFunctions.svg" },
  { name: "Redis", icon: "/tools/redis.svg" },
  { name: "SQL Server", icon: "/tools/sqlserver.svg" },
  { name: "Mongo DB", icon: "/tools/mongodb.svg" },
  { name: "Node Js", icon: "/tools/node.svg" },
  { name: "Playwright", icon: "/tools/playwright.svg" },
  { name: "Postman", icon: "/tools/postman.svg" },
  { name: "Docker", icon: "/tools/docker.svg" },
  { name: "Python", icon: "/tools/python.svg" },
  { name: "Solidity", icon: "/tools/solidity.svg" },
  { name: "Angular", icon: "/tools/angular.svg" },
  { name: "Figma", icon: "/tools/figma.svg" },
  { name: "Git", icon: "/tools/git.svg" },
  { name: "Github", icon: "/tools/github.svg" },
  { name: "GraphQL", icon: "/tools/graphql.svg" },
  { name: "Java", icon: "/tools/java.svg" },
  { name: "Jira", icon: "/tools/jira.svg" },
  { name: "Wordpress", icon: "/tools/wordpress.svg" },
];

export const TechStack = () => {
  const t = useTranslations("aboutMe");
  return (
    <section className="w-full py-20 bg-neutral-900/80">
      <div className="max-w-5xl mx-auto text-center">
        <Text as="h2" className="font-sans text-2xl font-bold mb-12 text-white">
          {t("tecnologies")}
        </Text>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {tools.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center gap-2">
              <img src={tool.icon} alt={tool.name} className="h-12 w-12 object-contain" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
