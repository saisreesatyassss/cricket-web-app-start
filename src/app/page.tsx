import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
// import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { EarlyAccess } from "@/components/early-access";
// import { LiveMatches } from "@/components/live-matches";
import { MiniGame } from "@/components/mini-game";
import { RegionalSupport } from "@/components/regional-support";
import { ScanPayJoin } from "@/components/scan-pay-join";
import { CountdownTimer } from "@/components/countdown-timer";
import { AITeamMaker } from "@/components/ai-team-maker";
import { MobileAppPreview } from "@/components/mobile-app-preview";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <main className="flex-1 mt-10 md:mt-0">
        <HeroSection />
        <div className="py-8 md:py-12 bg-white">
          <div className="container max-w-8xl mx-auto px-4 md:px-6 2xl:px-8">
            <CountdownTimer />
          </div>
        </div>
        <EarlyAccess />
        {/* <LiveMatches /> */}
        <ScanPayJoin />
        <AITeamMaker />
        <MobileAppPreview/>
        <Features />
        <HowItWorks />
        <MiniGame />
        {/* <Testimonials /> */}
        <RegionalSupport />
        <FAQ />
      </main>
    </div>
  );
}
