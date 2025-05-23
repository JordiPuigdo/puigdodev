import { DefaultSeoProps } from "next-seo";

const defaultSEO: DefaultSeoProps = {
  title: "My Portfolio",
  description: "Fullstack developer portfolio built with Next.js and TypeScript",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "My Portfolio",
    images: [
      {
        url: "https://yourdomain.com/default-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Portfolio Banner",
      },
    ],
  },
  twitter: {
    handle: "@yourhandle",
    site: "@yourhandle",
    cardType: "summary_large_image",
  },
};

export default defaultSEO;
