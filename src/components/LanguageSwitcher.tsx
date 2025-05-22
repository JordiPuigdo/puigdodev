"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import clsx from "clsx";

const locales = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "ca", label: "CA" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = (newLocale: string) => {
    if (!pathname) return;
    const segments = pathname.split("/");
    segments[1] = newLocale; // update locale segment
    const newPath = segments.join("/");
    router.replace(newPath);
  };

  return (
    <div className="flex gap-2 items-center">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          className={clsx("px-2 py-1 rounded text-sm font-medium transition-colors", {
            "bg-black text-white": code === currentLocale,
            "bg-gray-200 hover:bg-gray-300 text-black": code !== currentLocale,
          })}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
