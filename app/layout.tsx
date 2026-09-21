import type { Metadata, Viewport } from "next";
import {
  Anton,
  Monsieur_La_Doulaise,
  Space_Grotesk,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import Grain from "./components/Grain";
import Cursor from "./components/Cursor";
import RevealObserver from "./components/RevealObserver";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const doulaise = Monsieur_La_Doulaise({
  variable: "--font-doulaise",
  subsets: ["latin"],
  weight: "400",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Electric Orchid — Tattoo & Fine Line Studio, Portland",
  description:
    "Custom tattoo studio in southeast Portland. Fine line, neo-traditional, blackwork and black & grey realism, drawn for one body only.",
  // a fictional business — keep it out of every search index
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export const viewport: Viewport = {
  themeColor: "#07050e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${doulaise.variable} ${grotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-bone">
        <Grain />
        <Cursor />
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
