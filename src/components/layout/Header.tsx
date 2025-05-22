"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import LanguageSwitcher from "../LanguageSwitcher";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", key: "home" },
  { href: "/projects", key: "projects" },
  { href: "/about", key: "about" },
  { href: "/experience", key: "experience" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
];

export default function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto w-full px-7 md:px-12 lg:px-48 py-7 shadow-sm bg-white flex items-center justify-between">
        <Link href="/">
          <img src={"/assets/puigdodev.png"} alt="Logo" className="h-8" />
        </Link>

        <nav className="hidden md:flex gap-6">
          {navItems.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              className={clsx(
                "font-sans font-semibold text-l tracking-tight transition-colors border-b-4 hover:text-blue-600 hover:border-blue-600",
                (pathname.split("/")[2] == undefined && href === "/") ||
                  pathname.split("/")[2] === href.replace("/", "")
                  ? "text-blue-600 border-blue-600"
                  : "text-neutral-700"
              )}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "block text-base font-medium py-2 border-b border-gray-300",
                pathname === href ? "text-primary" : "text-neutral-700"
              )}
            >
              {t(key)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
