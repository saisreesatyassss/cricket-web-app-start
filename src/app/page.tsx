import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { EarlyAccess } from "@/components/early-access";
import { Footer } from "@/components/footer";
import { LiveMatches } from "@/components/live-matches";
import { MiniGame } from "@/components/mini-game";
import { RegionalSupport } from "@/components/regional-support";
import { ScanPayJoin } from "@/components/scan-pay-join";
import { MobileMenu } from "@/components/mobile-menu";
import { CountdownTimer } from "@/components/countdown-timer";
import { AITeamMaker } from "@/components/ai-team-maker";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <header className="fixed top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-8xl mx-auto flex h-16 items-center justify-between px-4 md:px-6 2xl:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/Logo.svg"
              alt="Cricket Panga Logo"
              width={130}
              height={60}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-blue-700 group-hover:text-blue-600 transition-colors">
              Cricket Panga{" "}
              <span className="text-orange-500 text-sm font-semibold">
                India Edition
              </span>
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 lg:gap-8">
            <Link
              href="#features"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              How It Works
            </Link>
            <Link
              href="#live-matches"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Live Matches
            </Link>
            <Link
              href="#ai-team-maker"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              AI Team Maker
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-700 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* <Button
              asChild
              variant="outline"
              className="hidden sm:flex hover:border-blue-700 hover:text-blue-700 transition-all duration-300"
            >
              <Link href="/login">Login</Link>
            </Button> */}
            <Button
              asChild
              className="hidden sm:flex bg-blue-700 hover:bg-blue-800 shadow-lg hover:shadow-blue-200 transition-all duration-300"
            >
              <Link href="#scan-pay-join">Pre Launch Offer</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <div className="py-8 md:py-12 bg-white">
          <div className="container max-w-8xl mx-auto px-4 md:px-6 2xl:px-8">
            <CountdownTimer />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Button
            asChild
            className="sm:flex max-w-80 bg-blue-700 hover:bg-blue-800 shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:translate-y-0 active:scale-95"
          >
            <Link href="#scan-pay-join" className="flex items-center gap-2">
              Pre Launch Offer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </Button>
        </div>
        <LiveMatches />
        <ScanPayJoin />
        <AITeamMaker />
        <Features />
        <HowItWorks />
        <MiniGame />
        <Testimonials />
        <RegionalSupport />
        <FAQ />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}
