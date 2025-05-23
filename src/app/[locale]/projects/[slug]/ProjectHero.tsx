import Image from "next/image";

type ProjectHeroProps = {
  description: string;
  imageUrl: string;
  altText: string;
};
export default function ProjectHero({ description, imageUrl, altText }: ProjectHeroProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 py-6">
      <div className="flex w-full">
        <Image
          src={imageUrl}
          alt={altText}
          width={1200}
          height={600}
          className="rounded-lg w-full object-cover"
        />
      </div>
      <div className="flex w-full justify-end">{description}</div>
    </div>
  );
}
