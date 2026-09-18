import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Problem } from "@/components/sections/Problem";
import { Features } from "@/components/sections/Features";
import { AIDemo } from "@/components/sections/AIDemo";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Statistics } from "@/components/sections/Statistics";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { translations, type Locale } from "@/data/i18n";

export function LandingPage({ locale }: { locale: Locale }) {
  const copy = translations[locale];
  return (
    <>
      <a className="skip-link" href="#main">{copy.skip}</a>
      <div id="top" />
      <Navbar locale={locale} copy={copy.nav} />
      <main id="main">
        <Hero copy={copy.hero} />
        <SocialProof copy={copy.social} />
        <Problem copy={copy.problem} />
        <Features copy={copy.features} />
        <AIDemo locale={locale} copy={copy.demo} />
        <HowItWorks copy={copy.how} />
        <DashboardPreview copy={copy.dashboard} />
        <Statistics copy={copy.stats} />
        <Testimonials copy={copy.testimonials} />
        <Pricing copy={copy.pricing} />
        <FAQ copy={copy.faq} />
        <FinalCTA copy={copy.final} />
      </main>
      <Footer copy={copy.footer} />
    </>
  );
}
