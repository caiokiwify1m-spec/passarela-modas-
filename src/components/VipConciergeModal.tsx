import React, { useState } from 'react';
import { X, Sparkles, MessageCircle, Calendar, User, Phone, CheckCircle, ShieldCheck } from 'lucide-react';
import { STORE_DATA } from '../data/content';

interface VipConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VipConciergeModal: React.FC<VipConciergeModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Alfaiataria & Moda Casual');
  const [serviceType, setServiceType] = useState('Mala Delivery em Casa');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Agendamento VIP - Passarela Modas*\n\n*Nome:* ${name}\n*Telefone:* ${phone}\n*Interesse:* ${interest}\n*Serviço Desejado:* ${serviceType}\n\nOlá! Gostaria de confirmar meu atendimento personalizado.`;
    const url = `https://wa.me/${STORE_DATA.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#121212]/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#FFFFFF] border border-[#C5A059] max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200 text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-black transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059] mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Experiência Exclusiva</span>
        </div>

        <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#121212] mb-2">
          Atendimento VIP & Mala Delivery
        </h3>

        <p className="text-xs text-neutral-600 font-light leading-relaxed mb-6">
          Agende um horário privativo na loja ou receba uma seleção curada de peças na sua residência para provar com conforto.
        </p>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
            <h4 className="font-editorial text-xl font-bold text-[#121212]">
              Solicitação Enviada com Sucesso!
            </h4>
            <p className="text-xs text-neutral-600">
              Redirecionando para o WhatsApp da Passarela Modas...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 mb-1.5">
                Seu Nome Completo
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Ana Beatriz Silva"
                  className="w-full pl-9 pr-4 py-2.5 bg-[#FAFAFA] border border-neutral-300 focus:border-[#C5A059] focus:outline-none text-sm text-neutral-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 mb-1.5">
                WhatsApp / Celular
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(38) 99999-9999"
                  className="w-full pl-9 pr-4 py-2.5 bg-[#FAFAFA] border border-neutral-300 focus:border-[#C5A059] focus:outline-none text-sm text-neutral-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 mb-1.5">
                  Modalidade
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#FAFAFA] border border-neutral-300 focus:border-[#C5A059] focus:outline-none text-xs text-neutral-900"
                >
                  <option value="Mala Delivery em Casa">Mala Delivery em Casa</option>
                  <option value="Provador Privativo na Loja">Provador Privativo na Loja</option>
                  <option value="Consultoria de Imagem Online">Consultoria de Imagem Online</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 mb-1.5">
                  Principal Interesse
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#FAFAFA] border border-neutral-300 focus:border-[#C5A059] focus:outline-none text-xs text-neutral-900"
                >
                  <option value="Alfaiataria & Linho">Alfaiataria & Linho</option>
                  <option value="Semijoias & Acessórios">Semijoias & Acessórios</option>
                  <option value="Vestidos de Festa & Eventos">Vestidos de Festa & Eventos</option>
                  <option value="Montagem de Looks Completos">Montagem de Looks Completos</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#121212] hover:bg-[#C5A059] text-white hover:text-black font-semibold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirmar Agendamento no WhatsApp</span>
              </button>
            </div>

            <div className="text-[11px] text-neutral-500 text-center flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Seus dados são confidenciais e protegidos.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
