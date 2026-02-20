import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // ✅ Use your actual domain here via env variable
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://antiportfolio-theta.vercel.app"),
  title: "Portfolio — Exploring Code, Security, and Beyond",
  description:
    "Personal portfolio of a developer & security enthusiast. Full-stack development, web app security, CTFs, scripting, and more.",
  keywords: [
    "portfolio",
    "developer",
    "cybersecurity",
    "full-stack",
    "CTF",
    "web security",
    "Next.js",
  ],
  authors: [{ name: "Jitender Kumar Das" }], // ✅ personalize author name
  openGraph: {
    title: "Portfolio — Exploring Code, Security, and Beyond",
    description: "Personal portfolio of a developer & security enthusiast.",
    type: "website",
    locale: "en_US",
    url: "/", // relative, Next.js will resolve against metadataBase
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Exploring Code, Security, and Beyond",
    description: "Personal portfolio of a developer & security enthusiast.",
  },
  alternates: {
    canonical: "/", // resolved against metadataBase
  },
  // ✅ Google Search Console verification tag
  verification: {
    google: "SexbTPKOj2d8RpiauOYtyK2w8hVJmC2BM8MZ4linZbg",
    // You can also add Bing here if you register with Bing Webmaster Tools:
    // bing: "your-bing-verification-code"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
