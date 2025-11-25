import React from "react";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { Features } from "./Components/Features";
import { Stats } from "./Components/Stats";
import { Testimonials } from "./Components/Testimonials";
import { CTA } from "./Components/CTA";
import { Footer } from "./Components/Footer";

export const Landing = (): React.ReactElement => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
