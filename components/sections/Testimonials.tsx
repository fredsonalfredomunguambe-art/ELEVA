"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const container = useRef(null);
  const { t } = useLanguage();

  useGSAP(() => {
    gsap.fromTo(".quote-mark",
      { rotate: -30, scale: 0.5, opacity: 0 },
      { rotate: 0, scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.4)", scrollTrigger: { trigger: ".quote-mark", start: "top 80%" }}
    );
    
    gsap.fromTo(".testimonial-text",
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: ".testimonial-text", start: "top 85%" }}
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative py-32 md:py-48 px-6 md:px-[60px] bg-[#C5A059] text-[#0C0C0C] overflow-hidden">
      
      {/* Decorative massive elements */}
      <div className="quote-mark absolute top-[10%] left-[5%] text-[300px] md:text-[500px] font-serif leading-none opacity-20 text-[#0C0C0C] pointer-events-none select-none mix-blend-overlay">
        &quot;
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] font-bold mb-12 border border-[#0C0C0C]/20 rounded-[4px] px-6 py-2">
          {t("O Que Dizem de Nós", "What They Say About Us")}
        </p>
        
        <h2 className="testimonial-text font-serif text-[40px] sm:text-[60px] md:text-[80px] leading-[1.1] tracking-[-0.02em] font-medium max-w-5xl">
          {t(
            `"Confiámos-lhes a missão de mudar a forma como os nossos clientes nos viam online. O resultado superou tudo: um `,
            `"We trusted them with the mission of changing how our clients perceived us online. The result surpassed everything: a `
          )}
          <span className="italic">
            {t("aumento enorme de ", "massive increase in ")}
          </span>
          {t(
            `contactos qualificados e novas oportunidades de negócio."`,
            `qualified leads and new business opportunities."`
          )}
        </h2>
        
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-[#0C0C0C]/30 relative mb-2">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop" 
              alt="CEO Premium Consulting" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <p className="font-bold text-[14px] uppercase tracking-widest">Tiago Almeida</p>
          <p className="font-mono text-[11px] opacity-70 uppercase tracking-widest">CEO, Consulting Group Portugal</p>
        </div>
      </div>
      
    </section>
  );
}
