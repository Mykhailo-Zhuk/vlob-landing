import { Hero } from "@/components/sections/hero";
import { WhatYouGet } from "@/components/sections/what-you-get";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ForWho } from "@/components/sections/for-who";
import { Parents } from "@/components/sections/parents";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatYouGet />
      <HowItWorks />
      <ForWho />
      <Parents />
      <Cta />
      <Footer />
    </main>
  );
}
