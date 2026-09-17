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

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div id="top" />
      <Navbar />
      <main id="main">
        <Hero />
        <SocialProof />
        <Problem />
        <Features />
        <AIDemo />
        <HowItWorks />
        <DashboardPreview />
        <Statistics />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
