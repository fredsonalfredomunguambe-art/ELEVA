"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Story from "@/components/sections/Story";
import Faq from "@/components/sections/Faq";

// Register ScrollTrigger globally once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Elegant smooth scroll mapping to Bruno Simon style immersive interaction
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <LanguageProvider>
    <main ref={mainRef} className="relative min-h-screen bg-[#121110] selection:bg-[#C5A059] selection:text-[#121110] overflow-hidden font-sans">
      {/* Noise Texture Overlay for Editorial Print Feel */}
      <div
        className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-10 mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Overlay Preloader */}
      <div className="preloader-overlay fixed inset-0 z-[60] bg-[#121110] flex flex-col items-center justify-center pointer-events-none">
        <div className="text-[#C5A059] font-serif text-[40px] md:text-[60px] tracking-[-0.04em] overflow-hidden">
          <span className="preloader-text inline-block transform translate-y-full">Eleva.</span>
        </div>
      </div>

      <Header />
      <div className="bg-[#EFECE6]">
        <Hero />
      </div>
      <Manifesto />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <Team />
      <Story />
      <Faq />
      <Footer />
    </main>
    </LanguageProvider>
  );
}
