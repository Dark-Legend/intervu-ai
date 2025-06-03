import { Separator } from "@/components/ui/separator/separator";
import { Hero } from "./components/hero/Hero";
import { HowItWorks } from "./components/how-it-works/HowItWorks";
import { Navbar } from "./components/navbar/Navbar";
import { Pricing } from "./components/pricing/Pricing";
import { Footer } from "./components/footer/Footer";

export default function Home() {
  return (
    <section className="text-black w-full">
      <Navbar />
      <Hero />
      <Separator />
      <HowItWorks />
      <Separator />
      <Pricing />
      <Separator />
      <Footer />
    </section>
  );
}
