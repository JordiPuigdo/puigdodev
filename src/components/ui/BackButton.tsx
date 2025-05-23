"use client";

import { SvgArrow } from "@/icons/SvgArrow";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <div className="flex mt-4">
      <button
        onClick={() => router.back()}
        className="group inline-flex items-center text-sm text-blue-600 border-2 border-blue-600 p-2 rounded-xl transition-colors duration-200 hover:bg-blue-600 focus:outline-none"
      >
        <SvgArrow className="w-5 h-5 transition-colors duration-200 group-hover:fill-white transform scale-x-[-1]" />
      </button>
    </div>
  );
}
