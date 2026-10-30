import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site, siteUrl } from "@/data/site";
import MotionProvider from "@/components/layout/MotionProvider";
import JsonLd from "@/components/seo/JsonLd";
import SmoothScroll from "@/components/layout/SmoothScroll";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

const description =
  "Gentle, modern dental care with experienced doctors, transparent pricing and easy online appointments.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: ["dentist", "dental clinic", "root canal", "braces", "teeth whitening", "kids dentistry"],
  openGraph: {
    title: site.name,
    description,
    url: siteUrl,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: site.name, description },
};

export const viewport: Viewport = {
  themeColor: "#0e7c86",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${jakarta.variable}`}>
        <JsonLd />
        <MotionProvider>
  <     SmoothScroll>{children}</SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}