"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const container = useRef(null);
  
  useGSAP(() => {
    gsap.fromTo(".panel-item", 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', stagger: 0.1, scrollTrigger: { trigger: container.current, start: 'top 70%' } }
    );
  }, { scope: container });

  const services = [
    { tag: "01", title: "Design que\nTransmite Confiança", desc: "Cada detalhe visual é pensado para que o seu negócio transmita profissionalismo e credibilidade desde o primeiro olhar. Um bom design não é apenas bonito — é uma ferramenta que inspira confiança e destaca o seu valor no mercado." },
    { tag: "02", title: "Textos que\nConvencem", desc: "Conhecemos o seu público. Escrevemos mensagens claras e persuasivas que captam a atenção, eliminam dúvidas e motivam os visitantes a entrar em contacto ou a comprar. Cada palavra tem um propósito." },
    { tag: "03", title: "Navegação\nIntuitiva", desc: "Um site confuso perde visitantes. Criamos experiências de navegação fluidas e naturais, com animações subtis que guiam o utilizador até à ação que importa — seja contactar, orçamentar ou comprar." },
    { tag: "04", title: "Resultados\nConcretos", desc: "Um site bonito que não traz clientes é apenas decoração. Otimizamos cada página para gerar mais visibilidade nos motores de busca, mais contactos e mais negócio real — enquanto a sua marca brilha online." }
  ];

  return (
    <section ref={container} id="servicos" className="relative py-20 md:py-32 bg-[#C5A059] text-[#121110] transition-colors duration-1000 overflow-hidden">
      <div className="relative z-10 w-full px-6 md:px-[60px] max-w-[1800px] mx-auto">
        
        {/* Minimalist Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16 panel-item">
          <div>
            <div className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.3em] mb-4 flex items-center gap-3 text-[#121110]/50">
              <span className="w-8 h-[1px] bg-[#121110]/30"></span>
              O Que Fazemos
            </div>
            <h2 className="font-serif text-[50px] md:text-[80px] leading-[0.9] tracking-[-0.03em] text-[#121110]">
              As Nossas<br/>Especialidades.
            </h2>
          </div>
          <p className="text-[#121110]/70 text-[14px] md:text-[16px] leading-[1.6] font-light max-w-[320px] text-left md:text-right">
            Combinamos estética que capta a atenção com estratégia que transforma visitantes em clientes.
          </p>
        </div>

        {/* Horizontal Expanding Panels */}
        <div className="w-full flex flex-col lg:flex-row lg:h-[550px] border-t border-b border-[#121110]/20 mt-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="panel-item group relative flex-1 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hover:flex-[2.5] border-b lg:border-b-0 lg:border-r border-[#121110]/20 last:border-0 flex overflow-hidden cursor-pointer bg-[#C5A059] hover:bg-[#121110] hover:text-[#C5A059] text-[#121110]"
            >
              
              {/* Content Inner Box */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between h-auto lg:h-full w-full min-w-[300px]">
                
                {/* Top Number & Icon */}
                <div className="flex justify-between items-start mb-12 lg:mb-0">
                  <span className="font-mono text-[14px] md:text-[16px] opacity-70 group-hover:text-[#EFECE6] transition-colors duration-500">
                    // {service.tag}
                  </span>
                  <div className="w-10 h-10 border border-[#121110]/20 rounded-full flex items-center justify-center group-hover:border-[#C5A059]/30 transition-colors duration-500">
                    <ArrowUpRight strokeWidth={1.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 opacity-50 group-hover:opacity-100" />
                  </div>
                </div>

                {/* Bottom Title & Revealing Text */}
                <div className="mt-auto">
                  <h3 className="font-serif text-[32px] md:text-[40px] tracking-[-0.02em] leading-[1.1] mb-0 group-hover:mb-6 transition-all duration-500 whitespace-pre-line group-hover:text-[#EFECE6]">
                    {service.title}
                  </h3>
                  
                  {/* Subtle hover expanding text for desktop, always visible on mobile but elegant */}
                  <div className="grid grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]">
                    <div className="overflow-hidden">
                      <p className="font-light text-[15px] opacity-80 leading-[1.6] max-w-[320px] pb-4">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
