// tu función de carga de traducción por idioma
import { Metadata } from "next";
import { getItems } from "../getProjects";

export async function getLocalizedMetadata(locale: string): Promise<Metadata> {
  const t = await getItems(locale);

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    icons: {
      icon: t.metadata.icons.icon,
    },
    alternates: {
      languages: {
        en: "https://puigdo.dev/en",
        es: "https://puigdo.dev",
        ca: "https://puigdo.dev/ca",
      },
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: `https://puigdo.dev/${locale}`,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Captura del portafolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.title,
      description: t.metadata.description,
      images: ["/og-image.jpg"],
    },
  };
}
