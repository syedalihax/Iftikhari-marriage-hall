import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iftikharihall.pk"),
  title: {
    default: "IFTIKHARI Marriage Hall Quetta | Premium Marriage & Banquet Venue",
    template: "%s | IFTIKHARI Marriage Hall Quetta",
  },
  description:
    "IFTIKHARI Marriage Hall is a wedding and event venue in Hazara Town, Quetta, with space for 50 to 500 guests, generator and UPS backup, parking, and event packages.",
  keywords: [
    "IFTIKHARI Marriage Hall",
    "IFTIKHARI Marriage Hall Quetta",
    "Banquet Hall Hazara Town",
    "Marriage Hall in Quetta",
    "Wedding Venue Quetta",
    "Hazara Town Banquet",
    "Nikah stage Quetta",
    "5XM5+F3J Quetta",
  ],
  authors: [{ name: "IFTIKHARI Marriage Hall" }],
  openGraph: {
    title: "IFTIKHARI Marriage Hall Quetta | Wedding & Banquet Venue",
    description:
      "IFTIKHARI Marriage Hall in Hazara Town, Quetta, has capacity for 50 to 500 guests, backup power, parking, and event packages.",
    url: "https://iftikharihall.pk",
    siteName: "IFTIKHARI Marriage Hall",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/stage-white.jpg",
        width: 1200,
        height: 630,
        alt: "IFTIKHARI Marriage Hall Quetta Stage Setup",
      },
    ],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col selection:bg-[#C89D3C] selection:text-[#062A24]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
