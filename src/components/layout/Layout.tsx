"use client";

import { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">{children}</main>

      <footer className="w-full border-t bg-whiteSecondary border-neutral-200 px-4 py-4 text-sm text-center">
        <div className="max-w-5xl mx-auto">
          © {new Date().getFullYear()} Made with ❤️ by [⚡] PuigdoDev.
        </div>
      </footer>
    </div>
  );
}
