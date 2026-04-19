"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Faq() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".faq-intro",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: container.current, start: "top 80%" }}
    );
  }, { scope: container });

  const faqs = [
    {
      q: "Será que a Eleva é a parceira certa para o meu negócio?",
      a: "Trabalhamos com todo o tipo de negócios — desde empresas locais que precisam de dar o primeiro passo online, até marcas em crescimento que querem reforçar a sua presença digital. Se o seu objetivo é ter um site profissional que transmita confiança e traga resultados concretos, estamos cá para isso. Adaptamo-nos à realidade de cada cliente porque acreditamos que todos merecem uma presença online à altura do seu potencial."
    },
    {
      q: "Quanto tempo demora um projeto?",
      a: "Depende da complexidade, mas em média um projeto completo — com design personalizado, textos estratégicos e desenvolvimento — fica pronto entre 3 a 6 semanas. Preferimos dedicar o tempo necessário para entregar algo que realmente faça diferença no seu negócio, em vez de apressar o processo. Mantemos uma comunicação constante para que saiba sempre em que ponto estamos."
    },
    {
      q: "Já tenho uma agência de marketing. Faz sentido trabalhar convosco?",
      a: "Faz todo o sentido. Na verdade, é uma combinação poderosa. A sua agência traz visitantes ao seu site através de anúncios e estratégias de tráfego — nós garantimos que, quando esses visitantes chegam, ficam impressionados e tomam ação. Um site bem construído multiplica o retorno de qualquer investimento em marketing. Trabalhamos em conjunto com a sua agência para que os resultados sejam ainda melhores."
    },
    {
      q: "Preciso mesmo de um site novo? O meu ainda funciona.",
      a: "Funcionar e gerar resultados são coisas diferentes. Muitas vezes, um site desatualizado ou mal estruturado está a afastar potenciais clientes sem que se aperceba. Fazemos uma análise gratuita para perceber se o seu site atual está a trabalhar a seu favor ou contra si. Se já estiver bem, dizemos-lhe com toda a honestidade."
    },
    {
      q: "Qual é o investimento para um projeto convosco?",
      a: "Cada projeto é único, por isso o valor varia conforme o que precisa — desde um site institucional simples até uma plataforma mais robusta com funcionalidades avançadas. O que garantimos é que, independentemente do orçamento, entregamos sempre qualidade e um resultado que se paga a si próprio ao gerar mais visibilidade e mais clientes para o seu negócio. Entre em contacto e apresentamos uma proposta à medida, sem compromisso."
    }
  ];

  return (
    <section ref={container} id="faq" className="relative py-32 md:py-48 px-6 md:px-[60px] bg-[#EFECE6] text-[#0C0C0C]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        <div className="lg:w-1/2 faq-intro">
          <h2 className="font-serif text-[40px] sm:text-[60px] md:text-[80px] leading-[0.85] tracking-[-0.04em] mb-8">
            Dúvidas?<br />
            <span className="italic text-[#C5A059]">Esclarecidas.</span>
          </h2>
          <p className="text-[16px] md:text-[20px] leading-[1.6] font-light max-w-sm text-[#0C0C0C]/70">
            Acreditamos na transparência total. Aqui encontra as respostas às perguntas mais comuns antes de dar o próximo passo.
          </p>
        </div>

        <div className="lg:w-1/2 flex flex-col border-t border-[#0C0C0C]/10">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FaqItem({ faq, index }: { faq: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: 'auto', duration: 0.6, ease: "power3.out" });
      gsap.to(wrapRef.current, { opacity: 1, duration: 0.3, delay: 0.2 });
    } else {
      gsap.to(wrapRef.current, { opacity: 0, duration: 0.2 });
      gsap.to(contentRef.current, { height: 0, duration: 0.6, ease: "power3.inOut" });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-[#0C0C0C]/10 hover:bg-[#0C0C0C]/[0.02] transition-colors cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="py-8 md:py-10 flex justify-between items-center px-4">
        <h3 className={`font-serif text-[24px] md:text-[32px] tracking-[-0.02em] pr-8 transition-colors duration-500 ${isOpen ? 'text-[#C5A059] italic' : 'text-[#0C0C0C]'}`}>
           {faq.q}
        </h3>
        <div className="relative w-4 h-4 shrink-0 overflow-hidden flex items-center justify-center">
           <div className={`absolute w-full h-[1px] bg-[#0C0C0C] transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}></div>
           <div className={`absolute h-full w-[1px] bg-[#0C0C0C] transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`}></div>
        </div>
      </div>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <div ref={wrapRef} className="px-4 pb-10 pt-2 opacity-0 text-[15px] md:text-[18px] font-light leading-[1.6] text-[#0C0C0C]/70">
          {faq.a}
        </div>
      </div>
    </div>
  );
}
