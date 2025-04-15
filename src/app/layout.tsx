import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";  // Import Head from next/head
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cricket Panga - Fantasy Cricket Game",
  themeColor: "#0F3CA1",
  description:
    "Join India's fastest growing fantasy cricket platform. Create your dream team, compete with friends, and win real cash prizes.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: [
      { url: "/Logo.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192x192.png", type: "image/png" },
      { url: "/icons/icon-384x384.png", type: "image/png" },
      { url: "/icons/icon-512x512.png", type: "image/png" },
    ]
  },
  apple: {
    icon: [
      { url: "/icons/icon-192x192.png", type: "image/png" },
      { url: "/icons/icon-384x384.png", type: "image/png" },
      { url: "/icons/icon-512x512.png", type: "image/png" },
    ]
  },
  opengraph: {
    title: "Cricket Panga - Fantasy Cricket Game",
    description:
      "Join India's fastest growing fantasy cricket platform. Create your dream team, compete with friends, and win real cash prizes.",
    url: "https://cricketpanga.com",
    siteName: "Cricket Panga",
    locale: "en_IN",
    type: "website",
    images: [
      { url: "/icons/icon-512x512.png", width: 1200, height: 630, alt: "Cricket Panga - Fantasy Cricket Game" },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cricket Panga - Fantasy Cricket Game",
    description:
      "Join India's fastest growing fantasy cricket platform. Create your dream team, compete with friends, and win real cash prizes.",
    images: [
      { url: "/icons/icon-512x512.png", width: 1200, height: 630, alt: "Cricket Panga - Fantasy Cricket Game" },
    ]
  },
  appleWebApp: {
    capable: true,
    title: "Cricket Panga",
    statusBarStyle: "default",
    navigationBarColor: "#0F3CA1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
      <Footer />

        </ThemeProvider>

        {/* Google Analytics Script */}
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-BE71J3TM4W"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BE71J3TM4W');
            `}
          </script>
        </Head>
      </body>
    </html>
  );
}
