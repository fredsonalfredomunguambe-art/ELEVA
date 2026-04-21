"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/context/LanguageContext";

export default function Faq() {
  const container = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useGSAP(() => {
    gsap.fromTo(".faq-intro-elem",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 75%" } }
    );

    gsap.fromTo(".faq-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: ".faq-list", start: "top 80%" } }
    );
  }, { scope: container });

  const faqs = [
    {
      q: t(
        "Será que a Eleva é a parceira certa para o meu negócio?",
        "Is Eleva the right partner for my business?"
      ),
      a: t(
        "Trabalhamos com todo o tipo de negócios — desde empresas locais que precisam de dar o primeiro passo online, até marcas em crescimento que querem reforçar a sua presença digital. Se o seu objetivo é ter um site profissional que transmita confiança e traga resultados concretos, estamos cá para isso. Adaptamo-nos à realidade de cada cliente porque acreditamos que todos merecem uma presença online à altura do seu potencial.",
        "We work with all types of businesses — from local companies taking their first step online, to growing brands looking to strengthen their digital presence. If your goal is a professional website that builds trust and delivers concrete results, we're here for that. We adapt to each client's reality because we believe everyone deserves an online presence that matches their potential."
      )
    },
    {
      q: t(
        "Quanto tempo demora um projeto?",
        "How long does a project take?"
      ),
      a: t(
        "Depende da complexidade, mas em média um projeto completo — com design personalizado, textos estratégicos e desenvolvimento — fica pronto entre 3 a 6 semanas. Preferimos dedicar o tempo necessário para entregar algo que realmente faça diferença no seu negócio, em vez de apressar o processo. Mantemos uma comunicação constante para que saiba sempre em que ponto estamos.",
        "It depends on complexity, but on average a complete project — with custom design, strategic copy, and development — is ready in 3 to 6 weeks. We prefer to dedicate the necessary time to deliver something that truly makes a difference in your business, rather than rushing the process. We maintain constant communication so you always know where things stand."
      )
    },
    {
      q: t(
        "Já tenho uma agência de marketing. Faz sentido trabalhar convosco?",
        "I already have a marketing agency. Does it make sense to work with you?"
      ),
      a: t(
        "Faz todo o sentido. Na verdade, é uma combinação poderosa. A sua agência traz visitantes ao seu site através de anúncios e estratégias de tráfego — nós garantimos que, quando esses visitantes chegam, ficam impressionados e tomam ação. Um site bem construído multiplica o retorno de qualquer investimento em marketing. Trabalhamos em conjunto com a sua agência para que os resultados sejam ainda melhores.",
        "Absolutely. In fact, it's a powerful combination. Your agency brings visitors to your site through ads and traffic strategies — we make sure that when those visitors arrive, they're impressed and take action. A well-built website multiplies the return on any marketing investment. We work alongside your agency to make the results even better."
      )
    },
    {
      q: t(
        "Preciso mesmo de um site novo? O meu ainda funciona.",
        "Do I really need a new website? Mine still works."
      ),
      a: t(
        "Funcionar e gerar resultados são coisas diferentes. Muitas vezes, um site desatualizado ou mal estruturado está a afastar potenciais clientes sem que se aperceba. Fazemos uma análise gratuita para perceber se o seu site atual está a trabalhar a seu favor ou contra si. Se já estiver bem, dizemos-lhe com toda a honestidade.",
        "Working and generating results are two different things. Often, an outdated or poorly structured website is driving potential clients away without you even realising it. We offer a free analysis to determine whether your current site is working for you or against you. If it's already good, we'll tell you honestly."
      )
    },
    {
      q: t(
        "Qual é o investimento para um projeto convosco?",
        "What is the investment for a project with you?"
      ),
      a: t(
        "Cada projeto é único, por isso o valor varia conforme o que precisa — desde um site institucional simples até uma plataforma mais robusta com funcionalidades avançadas. O que garantimos é que, independentemente do orçamento, entregamos sempre qualidade e um resultado que se paga a si próprio ao gerar mais visibilidade e mais clientes para o seu negócio. Entre em contacto e apresentamos uma proposta à medida, sem compromisso.",
        "Every project is unique, so the cost varies depending on what you need — from a simple institutional website to a more robust platform with advanced features. What we guarantee is that, regardless of the budget, we always deliver quality and a result that pays for itself by generating more visibility and more clients for your business. Get in touch and we'll present a tailored proposal, no commitment required."
      )
    }
  ];

  const col1 = faqs.slice(0, 3);
  const col2 = faqs.slice(3, 5);

  return (
    <section ref={container} id="faq" className="relative py-24 md:py-32 px-6 md:px-[60px] bg-[#EFECE6] text-[#121110] overflow-hidden border-t border-[#121110]/10">

      {/* Background Grid Lines logic for Elegance */}
      <div className="absolute top-0 bottom-0 left-[20px] right-[20px] md:left-[60px] md:right-[60px] z-0 grid grid-cols-4 md:grid-cols-12 pointer-events-none opacity-[0.04]">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-[#121110] h-full hidden md:block"></div>
        ))}
      </div>

      {/* Full Width Top Header */}
      <div className="relative z-10 max-w-[1600px] mx-auto mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#121110]/10 pb-12 faq-intro-elem">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] md:text-[11px] uppercase font-mono tracking-[0.3em] text-[#121110]/50 font-bold">
              {t("Transparência", "Transparency")}
            </span>
            <div className="w-12 h-[1px] bg-[#121110]/20"></div>
          </div>
          <h2 className="font-serif text-[60px] md:text-[100px] lg:text-[130px] leading-[0.8] tracking-[-0.04em] text-[#121110]">
            {t("Dúvidas?", "Questions?")}<br />
            <span className="italic text-[#C5A059]">{t("Esclarecidas.", "Answered.")}</span>
          </h2>
        </div>
        <p className="text-[16px] md:text-[18px] leading-[1.6] font-light max-w-sm text-[#121110]/70 text-left lg:text-right pb-4">
          {t(
            "Nenhum detalhe deve ficar esquecido. Reunimos as questões mais frequentes para garantir que a sua decisão é tomada com absoluta clareza.",
            "No detail should be overlooked. We've gathered the most frequently asked questions to ensure your decision is made with absolute clarity."
          )}
        </p>
      </div>

      {/* 2-Column Grid Layout for FAQs */}
      <div className="relative z-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-0 faq-list">

        <div className="flex flex-col">
          {col1.map((faq, i) => <FaqItem key={i} faq={faq} index={i} />)}
        </div>

        <div className="flex flex-col">
          {col2.map((faq, i) => <FaqItem key={i + 3} faq={faq} index={i + 3} />)}

          {/* Elegant filler block to balance out the 3 items vs 2 items gap */}
          <FaqFillerBlock />
        </div>

      </div>
    </section>
  );
}

function FaqFillerBlock() {
  const { t } = useLanguage();
  
  return (
    <div className="faq-item hidden lg:flex flex-col items-center justify-center flex-1 min-h-[220px] border-b border-[#121110]/10 mt-0 bg-[#C5A059]/5 hover:bg-[#C5A059]/10 transition-colors duration-500 rounded-b-[4px]">
      <div className="text-center group p-8 cursor-pointer relative" onClick={() => window.location.href = '#contacto'}>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#121110]/50 mb-4 transition-colors group-hover:text-[#C5A059]">
          {t("Ainda não encontrou o que procura?", "Haven't found what you're looking for?")}
        </p>
        <span className="font-serif text-[32px] md:text-[40px] italic text-[#121110] transition-colors group-hover:text-[#C5A059]">
          {t("Falar diretamente com a Equipa", "Talk directly with the Team")}
        </span>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C5A059] group-hover:w-1/2 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
      </div>
    </div>
  );
}

function FaqItem({ faq, index }: { faq: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: 'auto', duration: 0.6, ease: "power3.out" });
      gsap.to(wrapRef.current, { opacity: 1, y: 0, duration: 0.4, delay: 0.1, ease: "power2.out" });
    } else {
      gsap.to(wrapRef.current, { opacity: 0, y: -10, duration: 0.2, ease: "power2.in" });
      gsap.to(contentRef.current, { height: 0, duration: 0.4, ease: "power3.inOut" });
    }
  }, [isOpen]);

  const numIndex = (index + 1).toString().padStart(2, '0');

  return (
    <div
      className={`faq-item group border-b border-[#121110]/10 transition-all duration-500 cursor-pointer overflow-hidden ${isOpen ? 'bg-[#121110]/[0.02]' : 'hover:bg-[#121110]/[0.02]'}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="py-8 md:py-10 flex items-start gap-4 md:gap-6 px-4 md:px-6">

        <div className="font-mono text-[11px] md:text-[13px] text-[#C5A059] font-bold tracking-[0.2em] pt-2 md:pt-3">
          {numIndex}
        </div>

        <h3 className={`font-serif text-[20px] md:text-[28px] tracking-[-0.02em] leading-[1.2] flex-1 transition-all duration-500 group-hover:translate-x-2 ${isOpen ? 'text-[#C5A059] italic transform translate-x-2' : 'text-[#121110]'}`}>
          {faq.q}
        </h3>

        <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full border border-[#121110]/10 flex items-center justify-center group-hover:border-[#C5A059]/50 transition-all duration-500 bg-[#EFECE6] mt-1">
          <div className={`absolute w-3 h-[1.5px] bg-[#121110] transition-transform duration-500 ${isOpen ? 'rotate-180 bg-[#C5A059]' : 'group-hover:bg-[#C5A059]'}`}></div>
          <div className={`absolute h-3 w-[1.5px] bg-[#121110] transition-transform duration-500 ${isOpen ? 'rotate-90 scale-0' : 'group-hover:bg-[#C5A059]'}`}></div>
        </div>

      </div>

      <div ref={contentRef} className="h-0 overflow-hidden">
        <div ref={wrapRef} className="px-4 md:px-6 pb-10 pt-2 opacity-0 -translate-y-2 md:pl-[3.5rem] lg:pl-[4.5rem]">
          <p className="text-[15px] md:text-[17px] font-light leading-[1.7] text-[#121110]/70 max-w-xl">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}
