import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { STORE_DATA } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Editorial Floating Tooltip */}
      {showTooltip && (
        <div className="relative bg-[#121212] text-[#FAFAFA] border border-[#C5A059] p-3.5 shadow-2xl max-w-xs text-left animate-in fade-in slide-in-from-bottom-2 duration-300 hidden sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 p-1 bg-[#FFFFFF] text-black rounded-full shadow-md hover:bg-neutral-200"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#C5A059] mb-1">
            <Sparkles className="w-3 h-3" />
            <span>Consultora Online</span>
          </div>
          <p className="text-xs text-neutral-300 font-light leading-snug">
            Dúvidas sobre tamanho, tecido ou semijoias? Fale diretamente com a equipe da Passarela em Diamantina.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-trigger"
        href={`https://wa.me/${STORE_DATA.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de atendimento personalizado com a equipe da Passarela Modas.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#121212] hover:bg-[#C5A059] text-white hover:text-black shadow-2xl transition-all duration-300 border border-[#C5A059] rounded-full hover:scale-105"
        aria-label="Falar no WhatsApp da Passarela Modas"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full border border-[#C5A059] animate-ping opacity-30"></span>

        <MessageCircle className="w-7 h-7 text-[#C5A059] group-hover:text-black transition-colors" />
      </a>
    </div>
  );
};
