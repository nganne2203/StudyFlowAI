import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudyFlow AI — Make every study session click",
  description: "A concept study workspace for clearer answers, better practice, and a plan that fits your week. Explore the interactive StudyFlow AI frontend demo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
