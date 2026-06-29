import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tintmarketingpros.online"),
  title: {
    default: "Tint Marketing Pro | Window Tint Shop Marketing Agency",
    template: "%s | Tint Marketing Pro",
  },
  description:
    "We help window tint shops get more bookings with Google Ads, Local SEO, and Google Maps ranking. Specialized marketing exclusively for tint shops. Free trial available.",
  keywords: [
    "window tint marketing agency",
    "window tint shop marketing",
    "ceramic tint advertising",
    "auto tint leads",
    "window tinting SEO",
    "tint shop google ads",
    "car window tint marketing",
    "window tint digital marketing",
    "window tinting business growth",
    "tint shop local SEO",
    "window tint lead generation",
    "tint shop PPC management",
    "Google Maps ranking for tint shops",
    "window tint shop CRM automation",
    "residential window tint marketing",
    "Tesla window tint marketing",
    "ceramic tint leads",
    "window tint shop SEO agency",
  ],
  alternates: {
    canonical: "https://tintmarketingpros.online",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tintmarketingpros.online",
    siteName: "Tint Marketing Pro",
    title: "Tint Marketing Pro | Window Tint Shop Marketing Agency",
    description:
      "We help window tint shops get more bookings with Google Ads, Local SEO, and Google Maps ranking. Specialized marketing exclusively for tint shops.",
    images: [
      {
        url: "/images/optimized/hero-leads.jpg",
        width: 1200,
        height: 800,
        alt: "Window tint shop lead dashboard and marketing pipeline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tint Marketing Pro | Window Tint Shop Marketing Agency",
    description:
      "We help window tint shops get more bookings with Google Ads, Local SEO, and Google Maps ranking. Free trial available.",
    images: ["/images/optimized/hero-leads.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "sF5M4oI2-F0cLzNObw5goIyGfqFHR4UPvVMsObIiOAo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white text-text font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
