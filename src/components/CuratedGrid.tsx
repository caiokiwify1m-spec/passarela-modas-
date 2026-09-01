import React, { useState } from 'react';
import { MessageCircle, ArrowUpRight, Sparkles, Check, X, Shield, Star } from 'lucide-react';
import { CURATED_PILLARS, STORE_DATA } from '../data/content';
import { CuratedItem } from '../types';

export const CuratedGrid: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<CuratedItem | null>(null);

  return (
    <section id="curadoria" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Title */}
        <div className="max-w-3xl text-left space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#C5A059]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#121212]">
              Os Três Pilares da Passarela
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212]">
            Curadoria & Excelência
          </h2>

          <p className="font-sans-clean text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
            Cada item selecionado para o acervo da Passarela Modas passa pelo olhar criterioso de 
            Genilda Costa, aliando matéria-prima nobre, corte contemporâneo e a alma sofisticada de Diamantina.
          </p>
        </div>

        {/* 3 Visual Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CURATED_PILLARS.map((pillar, index) => (
            <div
              key={pillar.id}
              className="bg-[#FFFFFF] border border-neutral-200 hover:border-[#C5A059] transition-all duration-500 flex flex-col group overflow-hidden shadow-xs hover:shadow-xl text-left"
            >
              {/* Image Frame with Strict Alt Tag Requirement */}
              <div className="editorial-img-container aspect-[4/5] bg-neutral-100 relative overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  className="editorial-img w-full h-full object-cover"
                />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10 bg-[#121212]/90 backdrop-blur-md px-3 py-1.5 border border-[#C5A059]/40">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C5A059]">
                    0{index + 1} • {pillar.category}
                  </span>
                </div>

                {/* Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-editorial text-2xl font-bold text-[#121212] group-hover:text-[#A47E35] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs uppercase tracking-wider font-semibold text-[#C5A059]">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-neutral-600 font-light leading-relaxed line-clamp-3">
                    {pillar.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 bg-[#FAFAFA] border border-neutral-200 text-neutral-600 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedPillar(pillar)}
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-800 hover:text-[#C5A059] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Ver Detalhes</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/${STORE_DATA.whatsappRaw}?text=${encodeURIComponent(pillar.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#121212] hover:bg-[#C5A059] text-white hover:text-[#121212] text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Pedir no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Pillar Details */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 bg-[#121212]/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] border border-[#C5A059] max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200 text-left max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{selectedPillar.category} • Diamantina</span>
            </div>

            <h3 className="font-editorial text-3xl font-bold text-[#121212] mb-3">
              {selectedPillar.title}
            </h3>

            <p className="text-sm font-semibold text-[#A47E35] uppercase tracking-wider mb-6">
              {selectedPillar.subtitle}
            </p>

            <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100 mb-6 border border-neutral-200">
              <img
                src={selectedPillar.image}
                alt={selectedPillar.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-sans-clean text-neutral-700 text-base leading-relaxed mb-6 font-light">
              {selectedPillar.description}
            </p>

            <div className="space-y-2 mb-8">
              <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-900">
                Destaques da Curadoria:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedPillar.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-sm text-neutral-700">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-xs text-neutral-500">
                Atendimento direto com a equipe de Diamantina
              </div>

              <a
                href={`https://wa.me/${STORE_DATA.whatsappRaw}?text=${encodeURIComponent(selectedPillar.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#121212] hover:bg-[#C5A059] text-white hover:text-black font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar com Personal Shopper</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
