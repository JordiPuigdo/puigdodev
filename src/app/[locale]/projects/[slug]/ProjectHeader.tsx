import Text from "designSystem/Texts";

type ProjectHeaderProps = {
  title: string;
  subtitle: string;
};

export default function ProjectHeader({ title, subtitle }: ProjectHeaderProps) {
  return (
    <div className="flex flex-col">
      <Text as="h1" className="text-3xl font-bold font-heading text-gray-900 mb-4">
        {title}
      </Text>
      <Text as="p" className="text-lg text-gray-900/50">
        {subtitle}
      </Text>
    </div>
  );
}
