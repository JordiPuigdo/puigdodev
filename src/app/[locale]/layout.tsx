import "app/globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Layout from "@/components/layout/Layout";
import { Viewport } from "next";
import { daysSans } from "@/styles/font";
import Head from "next/head";
// import { getLocalizedMetadata } from "@/lib/seo/getMetadata";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
};

/*export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return getLocalizedMetadata(params.locale);
}*/
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${daysSans.variable} bg-white `}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <NextIntlClientProvider>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
