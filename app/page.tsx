import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Programs from "@/components/Programs";
import Coaches from "@/components/Coaches";
import Pricing from "@/components/Pricing";
import AdmissionCriteria from "@/components/AdmissionCriteria";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "LOCKOUT Barbell Club",
  "description": "Coach-run barbell club in Pittsburgh's Strip District featuring powerlifting, strength training, and direct coaching with zero contracts.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4127 Smallman St",
    "addressLocality": "Pittsburgh",
    "addressRegion": "PA",
    "postalCode": "15201",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.4578,
    "longitude": -79.9772
  },
  "openingHours": [
    "Mo-Fr 05:00-21:00",
    "Sa 07:00-18:00"
  ],
  "priceRange": "$$",
  "telephone": "+1-412-555-0199",
  "url": "https://lockout-gym.vercel.app"
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Manifesto />
        <Programs />
        <Coaches />
        <Pricing />
        <AdmissionCriteria />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}