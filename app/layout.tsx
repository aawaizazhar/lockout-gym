import type { Metadata } from "next";
import { Archivo_Black, Fraunces, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-archivo" });
const fraunces = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-fraunces" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "LOCKOUT — Coach-Run Barbell Club, Pittsburgh",
  description:
    "A coach-run barbell club in Pittsburgh's Strip District. 180 lifters. 4 tracks. Zero contracts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${fraunces.variable} ${grotesk.variable} ${jetbrains.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}