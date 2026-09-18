import type { Metadata } from "next";
import { translations } from "@/data/i18n";
import "../globals.css";

export const metadata: Metadata = {
  ...translations.vi.meta,
  alternates: { canonical: "/vi", languages: { en: "/", vi: "/vi" } },
};

export default function VietnameseLayout({ children }: { children: React.ReactNode }) {
  return <html lang="vi" className="h-full antialiased"><body className="min-h-full flex flex-col">{children}</body></html>;
}
