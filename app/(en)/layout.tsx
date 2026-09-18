import type { Metadata } from "next";
import { translations } from "@/data/i18n";
import "../globals.css";

export const metadata: Metadata = {
  ...translations.en.meta,
  alternates: { canonical: "/", languages: { en: "/", vi: "/vi" } },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="h-full antialiased"><body className="min-h-full flex flex-col">{children}</body></html>;
}
