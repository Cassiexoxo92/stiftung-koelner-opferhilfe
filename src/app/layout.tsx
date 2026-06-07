import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Stiftung Kölner Opferhilfe – Hilfe für Opfer von Gewalt und Unfällen",
    template: "%s | Stiftung Kölner Opferhilfe",
  },
  description:
    "Die Stiftung Kölner Opferhilfe bietet vertrauliche, unbürokratische und kostenlose Hilfe für Menschen im Raum Köln, die durch Gewalt oder Unfall zu Opfern geworden sind.",
  keywords: [
    "Opferhilfe",
    "Köln",
    "Krisenberatung",
    "Opferschutz",
    "Psychotherapie",
    "Soforthilfe",
    "Gewaltopfer",
    "Stiftung",
  ],
  openGraph: {
    title: "Stiftung Kölner Opferhilfe",
    description:
      "Vertrauliche, unbürokratische und kostenlose Hilfe für Opfer von Gewalt und Unfällen im Raum Köln.",
    url: "https://www.stiftung-koelner-opferhilfe.de",
    siteName: "Stiftung Kölner Opferhilfe",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.stiftung-koelner-opferhilfe.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        <ScrollToTop />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
