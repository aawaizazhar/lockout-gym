import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Programs from "@/components/Programs";
import Coaches from "@/components/Coaches";
import Pricing from "@/components/Pricing";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Manifesto />
        <Programs />
        <Coaches />
        <Pricing />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}