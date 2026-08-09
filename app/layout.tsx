import type { Metadata, Viewport } from "next";
import { Archivo_Black, Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-archivo" });
const fraunces = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-fraunces" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lockout-gym.vercel.app"),
  title: "LOCKOUT: Coach-Run Barbell Club | Pittsburgh, PA",
  description:
    "A coach-run barbell club in Pittsburgh's Strip District featuring powerlifting, general strength, peaking cycles, and structured coaching tracks with zero contracts.",
  keywords: [
    "Barbell Club Pittsburgh",
    "Powerlifting Gym Strip District",
    "Strength Training Pittsburgh",
    "Coach-Run Gym",
    "Powerlifting Coaching",
    "Pittsburgh Gym",
    "Barbell Coaching",
  ],
  authors: [{ name: "LOCKOUT Barbell Club" }],
  creator: "LOCKOUT Barbell Club",
  publisher: "LOCKOUT Barbell Club",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "LOCKOUT: Coach-Run Barbell Club | Pittsburgh, PA",
    description:
      "Coach-run barbell club in Pittsburgh's Strip District. 180 lifters, 4 coaching tracks, zero contracts.",
    url: "/",
    siteName: "LOCKOUT Barbell Club",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 630,
        alt: "LOCKOUT Barbell Club Pittsburgh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOCKOUT: Coach-Run Barbell Club | Pittsburgh, PA",
    description:
      "Coach-run barbell club in Pittsburgh's Strip District. 180 lifters, 4 coaching tracks, zero contracts.",
    images: ["/icon.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${fraunces.variable} ${grotesk.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}