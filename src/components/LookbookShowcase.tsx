import React, { useState } from 'react';
import { MessageCircle, Sparkles, Eye, X, Check, ArrowUpRight, Palette, Layers, Heart } from 'lucide-react';
import { LOOKBOOK_COLLECTIONS, STORE_DATA } from '../data/content';
import { LookItem } from '../types';

export const LookbookShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedLook, setSelectedLook] = useState<LookItem | null>(null);
  const [activeColorHex, setActiveColorHex] = useState<string | null>(null);

  const categories = ['Todos', 'Linho & Fibras', 'Alfaiataria', 'Semijoias & Ouro', 'Vestidos & Noite', 'Couro & Acessórios'];

  const filteredLooks = activeCategory === 'Todos'
    ? LOOKBOOK_COLLECTIONS
    : LOOKBOOK_COLLECTIONS.filter((l) => l.category === activeCategory);

  const handleOpenLook = (look: LookItem) => {
    setSelectedLook(look);
    setActiveColorHex(look.colorPalette[0]?.hex || null);
  };

  return (
    <section id="colecoes" className="py-24 bg-[#FFFFFF] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAFAFA] border border-[#C5A059]/40">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#121212]">
                Cápsula Diamantina • Acervo
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212]">
              Catálogo & Lookbook Editorial
            </h2>
            <p className="text-neutral-500 font-light text-base max-w-xl">
              Peças exclusivas com tiragem limitada. Clique em qualquer look para inspecionar o tecido, 
              as variações de cores e solicitar fotos reais no provador pelo WhatsApp.
            </p>
          </div>

          <a
            href={`https://wa.me/${STORE_DATA.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de receber o catálogo completo em PDF das novidades da Passarela Modas.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-[#FAFAFA] text-xs font-semibold uppercase tracking-widest transition-all duration-300 self-start md:self-auto shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#C5A059]" />
            <span>Solicitar Catálogo Completo</span>
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar text-left">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#121212] text-[#FAFAFA] border-[#121212] shadow-xs'
                  : 'bg-[#FAFAFA] text-neutral-600 border-neutral-200 hover:border-neutral-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Looks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLooks.map((look) => (
            <div
              key={look.id}
              className="bg-[#FAFAFA] border border-neutral-200 hover:border-[#C5A059] transition-all duration-500 flex flex-col group text-left shadow-xs hover:shadow-xl relative overflow-hidden"
            >
              {/* Image Frame with hover reveal button */}
              <div className="editorial-img-container aspect-[3/4] bg-neutral-200 relative overflow-hidden">
                <img
                  src={look.image}
                  alt={look.title}
                  className="editorial-img w-full h-full object-cover"
                />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-[#FFFFFF]/90 backdrop-blur-md px-3 py-1 border border-neutral-200 z-10">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#121212]">
                    {look.category}
                  </span>
                </div>

                {/* Inspect Action Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <button
                    onClick={() => handleOpenLook(look)}
                    className="w-full py-2.5 bg-white/95 backdrop-blur-md text-[#121212] hover:bg-[#C5A059] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Inspecionar Detalhes & Tecido</span>
                  </button>
                </div>
              </div>

              {/* Look Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#A47E35] uppercase tracking-wider">
                      {look.priceTag}
                    </span>
                    <div className="flex items-center gap-1">
                      {look.colorPalette.map((col) => (
                        <span
                          key={col.name}
                          className="w-2.5 h-2.5 rounded-full border border-neutral-300"
                          style={{ backgroundColor: col.hex }}
                          title={col.name}
                        ></span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-[#121212] group-hover:text-[#A47E35] transition-colors leading-tight">
                    {look.title}
                  </h3>

                  <p className="text-xs text-neutral-600 font-light leading-relaxed line-clamp-2">
                    {look.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-neutral-200/80">
                  <div className="text-[11px] text-neutral-700 font-medium flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{look.fabric}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => handleOpenLook(look)}
                    className="flex-1 py-2.5 bg-white border border-neutral-300 hover:border-black text-[#121212] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Detalhes</span>
                  </button>

                  <a
                    href={`https://wa.me/${STORE_DATA.whatsappRaw}?text=${encodeURIComponent(look.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-[#121212] hover:bg-[#C5A059] text-white hover:text-black text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Pedir</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Look Inspection Modal */}
      {selectedLook && (
        <div className="fixed inset-0 z-50 bg-[#121212]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] border border-[#C5A059] max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200 text-left max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setSelectedLook(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-black transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Image Preview Column */}
              <div className="md:col-span-5 relative">
                <div className="aspect-[3/4] bg-neutral-100 overflow-hidden border border-neutral-300 shadow-md relative">
                  <img
                    src={selectedLook.image}
                    alt={selectedLook.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#121212]/90 text-[#C5A059] px-2.5 py-1 text-[10px] uppercase font-bold tracking-widest">
                    {selectedLook.category}
                  </div>
                </div>
              </div>

              {/* Details Column */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#C5A059] font-bold">
                    Passarela Modas Diamantina • Acervo VIP
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#121212] mt-1">
                    {selectedLook.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 font-light italic">
                    “{selectedLook.tagline}”
                  </p>
                </div>

                <p className="text-sm text-neutral-700 font-light leading-relaxed">
                  {selectedLook.description}
                </p>

                {/* Fabric & Specs */}
                <div className="p-4 bg-[#FAFAFA] border border-neutral-200 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#C5A059]" />
                    <span>Composição & Matéria-Prima:</span>
                  </div>
                  <p className="text-xs text-neutral-700 font-medium">
                    {selectedLook.fabric}
                  </p>
                  <div className="text-xs text-neutral-500 pt-1">
                    <strong>Indicação de Uso:</strong> {selectedLook.occasion}
                  </div>
                </div>

                {/* Color Swatches */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-800">
                    Variações de Cor Disponíveis:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {selectedLook.colorPalette.map((col) => (
                      <button
                        key={col.name}
                        onClick={() => setActiveColorHex(col.hex)}
                        className={`px-3 py-1.5 border text-xs flex items-center gap-2 transition-all ${
                          activeColorHex === col.hex
                            ? 'border-[#C5A059] bg-[#FAFAFA] ring-1 ring-[#C5A059] font-bold text-neutral-900'
                            : 'border-neutral-200 bg-white text-neutral-600'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-neutral-300"
                          style={{ backgroundColor: col.hex }}
                        ></span>
                        <span>{col.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Look Highlights */}
                <div className="space-y-1.5">
                  <span className="text-xs uppercase tracking-wider font-bold text-neutral-800 block">
                    Diferenciais do Modelo:
                  </span>
                  {selectedLook.details.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-600">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Dispatch Button */}
                <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`https://wa.me/${STORE_DATA.whatsappRaw}?text=${encodeURIComponent(
                      `Olá Genilda! Gostaria de consultar a peça "${selectedLook.title}" (${selectedLook.category}) com detalhes de medidas e opções de entrega.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 bg-[#121212] hover:bg-[#C5A059] text-white hover:text-black text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C5A059] group-hover:text-black" />
                    <span>Solicitar Fotos / Reservar no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
