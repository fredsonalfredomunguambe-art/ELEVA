"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/context/LanguageContext";

export default function Story() {
  const container = useRef<HTMLElement>(null);
  const leftCol = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useGSAP(() => {
    // Left column parallax
    gsap.to(leftCol.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Paragraph fade and slide up
    const paragraphs = gsap.utils.toArray<HTMLElement>('.story-p');
    paragraphs.forEach((p) => {
      gsap.fromTo(p, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: p,
            start: "top 85%",
          }
        }
      );
    });

    // Decorative lines draw effect
    const lines = gsap.utils.toArray<HTMLElement>('.story-line');
    lines.forEach((line) => {
      gsap.fromTo(line,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section ref={container} id="origem" className="relative py-32 md:py-48 px-6 md:px-[60px] bg-[#121110] text-[#EFECE6] border-t border-[#C5A059]/20 overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-0 bottom-0 left-[20px] right-[20px] md:left-[60px] md:right-[60px] z-0 grid grid-cols-4 md:grid-cols-12 pointer-events-none opacity-[0.03]">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-[#EFECE6] h-full hidden md:block"></div>
        ))}
      </div>
      
      <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] rounded-full bg-[#C5A059] opacity-[0.02] blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        {/* Left Sticky Column */}
        <div ref={leftCol} className="lg:w-4/12 flex flex-col items-start relative">
          <div className="sticky top-32">
            <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#C5A059] mb-4 block">
              {t("O Porquê", "The Why")}
            </span>
            <h2 className="font-serif text-[50px] md:text-[80px] leading-[0.85] tracking-[-0.04em] mb-8 group cursor-default">
              {t("A Nossa", "Our")}<br/>
              <span className="italic text-[#C5A059] transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]">{t("Origem.", "Origin.")}</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#C5A059]/50 mb-8"></div>
            
            {/* Elite micro-interaction deco */}
            <div className="hidden lg:flex flex-col gap-4 opacity-30">
              <div className="w-2 h-2 rounded-full bg-[#EFECE6] animate-pulse"></div>
              <div className="story-line w-[1px] h-32 bg-gradient-to-b from-[#EFECE6] to-transparent origin-top"></div>
            </div>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="lg:w-8/12 flex flex-col gap-12 text-[16px] md:text-[20px] leading-[1.7] font-light text-[#EFECE6]/80 pt-4 md:pt-12">
          
          <h3 className="story-p font-serif text-[30px] md:text-[45px] leading-[1.1] tracking-[-0.02em] text-[#EFECE6]">
            {t(
              "Somos um grupo de estudantes, mas este projeto nasceu de ",
              "We are a group of students, but this project was born from "
            )}
            <span className="italic text-[#C5A059]">{t("algo maior", "something greater")}</span>
            {t(" do que apenas uma ideia.", " than just an idea.")}
          </h3>

          <div className="relative pl-6 md:pl-10 border-l border-[#C5A059]/20 story-p">
            <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-[#C5A059] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-in-out"></div>
            <p>
              {t(
                "Vivemos numa era em que quase tudo começa online. No entanto, continuamos a ver negócios incríveis — de todos os tipos e áreas — que simplesmente não têm a presença digital que merecem. Empresas com potencial, qualidade e ambição, mas que acabam por perder oportunidades por não estarem bem posicionadas no mundo digital.",
                "We live in an era where almost everything starts online. Yet, we keep seeing incredible businesses — of all types and industries — that simply don't have the digital presence they deserve. Companies with potential, quality, and ambition that end up losing opportunities because they're not well-positioned in the digital world."
              )}
            </p>
          </div>

          <div className="story-p">
             <span className="font-mono text-[14px] uppercase tracking-[0.2em] text-[#C5A059] font-bold border border-[#C5A059]/30 py-2 px-4 rounded-full inline-block bg-[#C5A059]/5 backdrop-blur-sm cursor-default hover:bg-[#C5A059]/10 transition-colors">
               {t("Foi isso que nos fez avançar.", "That's what pushed us forward.")}
             </span>
          </div>

          <div className="space-y-8 story-p">
            <p>
              {t(
                "Criámos um negócio de soluções digitais com um objetivo claro: ",
                "We built a digital solutions business with one clear goal: "
              )}
              <strong className="font-normal text-[#EFECE6]">{t("ajudar empresas a crescer.", "helping businesses grow.")}</strong>
              {t(
                " Seja um negócio local ou uma marca em expansão, acreditamos que todos devem ter acesso a uma presença online forte, profissional e orientada para resultados.",
                " Whether it's a local business or an expanding brand, we believe everyone deserves access to a strong, professional, results-driven online presence."
              )}
            </p>
            <p>
              {t(
                "Não se trata apenas de criar websites. Trata-se de construir ",
                "It's not just about creating websites. It's about building "
              )}
              <strong className="font-normal text-[#EFECE6]">{t("presença, credibilidade e gerar impacto real", "presence, credibility, and generating real impact")}</strong>
              {t(
                " — mais visibilidade, mais clientes e mais lucro.",
                " — more visibility, more clients, and more profit."
              )}
            </p>
            <p>
              {t(
                "Cada projeto é diferente. Cada negócio tem a sua identidade. E é por isso que não seguimos fórmulas genéricas — criamos soluções pensadas para aquilo que cada cliente precisa para evoluir.",
                "Every project is different. Every business has its own identity. That's why we don't follow generic formulas — we create solutions tailored to what each client needs to evolve."
              )}
            </p>
          </div>

          <div className="story-p mt-12 pt-12 border-t border-[#EFECE6]/10 relative">
             <h4 className="font-serif text-[35px] md:text-[55px] leading-[1.1] tracking-[-0.03em] text-[#EFECE6] mb-6">
               {t("Mais do que serviços digitais, entregamos crescimento.", "More than digital services, we deliver growth.")}
             </h4>
             <p className="text-[20px] md:text-[24px] text-[#C5A059] italic">
               {t(
                 "Porque no final, não é só sobre estar online — é sobre destacar-se.",
                 "Because in the end, it's not just about being online — it's about standing out."
               )}
             </p>
          </div>
          
        </div>

      </div>
    </section>
  );
}
