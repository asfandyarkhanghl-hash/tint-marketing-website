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
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tintmarketingpros.com",
    siteName: "Tint Marketing Pro",
  },
  robots: {
    index: true,
    follow: true,
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
