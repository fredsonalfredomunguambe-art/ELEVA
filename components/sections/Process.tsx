"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const container = useRef(null);
  const { t } = useLanguage();

  useGSAP(() => {
    // Parallax on the steps
    const steps = gsap.utils.toArray<HTMLElement>('.process-step');
    steps.forEach((step, index) => {
      const numCircle = step.querySelector('.process-num-circle');
      const numText = step.querySelector('.process-num-text');
      const content = step.querySelector('.process-content');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
        }
      });

      tl.fromTo(numCircle,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)" }
      )
      .fromTo(numText,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.2"
      )
      .fromTo(content,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "expo.out" }, "-=0.3"
      );
    });

    // Animate the main vertical progress line based on scroll
    gsap.fromTo(".process-progress-line", 
      { scaleY: 0 },
      { 
        scaleY: 1, 
        ease: "none",
        scrollTrigger: {
          trigger: ".process-steps-container",
          start: "top 70%",
          end: "bottom 80%",
          scrub: true
        }
      }
    );
  }, { scope: container });

  const processes = [
    { 
      num: "01", 
      title: t("Análise Inicial", "Initial Analysis"), 
      desc: t(
        "Começamos por compreender o seu negócio, os seus objetivos e o seu público. Analisamos o que pode ser melhorado e definimos o caminho certo para o seu projeto.",
        "We start by understanding your business, your goals, and your audience. We analyse what can be improved and define the right path for your project."
      )
    },
    { 
      num: "02", 
      title: t("Estratégia e Conteúdo", "Strategy & Content"), 
      desc: t(
        "Antes de desenhar, escrevemos. Estruturamos os textos e a mensagem do seu site para comunicar de forma clara e persuasiva com quem realmente importa: os seus clientes.",
        "Before we design, we write. We structure your site's copy and messaging to communicate clearly and persuasively with who truly matters: your clients."
      )
    },
    { 
      num: "03", 
      title: t("Design e Desenvolvimento", "Design & Development"), 
      desc: t(
        "Criamos um design único e moderno, com animações fluidas e uma experiência de navegação que transmite profissionalismo e prende a atenção do visitante.",
        "We create a unique, modern design with fluid animations and a navigation experience that conveys professionalism and holds the visitor's attention."
      )
    },
    { 
      num: "04", 
      title: t("Lançamento e Otimização", "Launch & Optimisation"), 
      desc: t(
        "Testamos tudo ao detalhe, otimizamos a velocidade e o posicionamento nos motores de busca, e lançamos o seu site pronto para gerar resultados.",
        "We test everything down to the last detail, optimise speed and search engine positioning, and launch your site ready to deliver results."
      )
    }
  ];

  return (
    <section ref={container} id="processo" className="relative py-32 md:py-48 px-6 md:px-[60px] bg-[#EFECE6] text-[#0C0C0C] border-t border-[#0C0C0C]/10">
      <div className="absolute top-0 bottom-0 left-[20px] right-[20px] md:left-[60px] md:right-[60px] z-0 grid grid-cols-4 md:grid-cols-12 pointer-events-none opacity-[0.05]">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-[#0C0C0C] h-full hidden md:block"></div>
        ))}
      </div>
      
      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-32">
        <div className="lg:w-5/12 flex flex-col">
          <h2 className="font-serif text-[50px] md:text-[80px] leading-[0.85] tracking-[-0.04em] mb-8 sticky top-32">
            {t("Como", "How We")}<br/><span className="italic text-[#C5A059]">{t("Trabalhamos.", "Work.")}</span>
          </h2>
          <p className="text-[#0C0C0C]/70 text-[16px] md:text-[20px] leading-[1.6] max-w-sm sticky top-[300px]">
             {t(
               "Seguimos um método comprovado para que cada projeto seja entregue com qualidade e sem surpresas.",
               "We follow a proven method so every project is delivered with quality and no surprises."
             )}
          </p>
        </div>
        
        <div className="process-steps-container lg:w-7/12 flex flex-col gap-12 md:gap-24 relative mt-12 lg:mt-0 pt-10">
          {/* Vertical progress line background */}
          <div className="absolute left-[15px] md:left-[35px] top-0 bottom-0 w-[1px] bg-[#0C0C0C]/10"></div>
          {/* Vertical progress line active */}
          <div className="process-progress-line absolute left-[15px] md:left-[35px] top-0 bottom-0 w-[2px] bg-[#C5A059] origin-top z-0"></div>
          
          {processes.map((step, i) => (
            <div key={i} className="process-step relative flex gap-8 md:gap-16 items-start">
              <div className="process-num-circle w-[30px] h-[30px] md:w-[70px] md:h-[70px] rounded-full bg-[#EFECE6] border border-[#0C0C0C]/20 flex items-center justify-center shrink-0 z-10 relative shadow-[0_0_15px_rgba(239,236,230,1)]">
                 <span className="process-num-text font-mono text-[10px] md:text-[14px] text-[#C5A059] font-bold">{step.num}</span>
              </div>
              <div className="process-content flex flex-col mt-2 md:mt-4 z-10 relative bg-[#EFECE6] pl-2 -ml-2 rounded-lg">
                <h3 className="text-[28px] md:text-[45px] font-serif tracking-[-0.02em] mb-4 group-hover:italic">{step.title}</h3>
                <p className="text-[15px] md:text-[18px] text-[#0C0C0C]/70 leading-[1.6] font-light max-w-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
