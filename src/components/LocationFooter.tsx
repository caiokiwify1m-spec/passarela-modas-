import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Compass, ExternalLink, Heart } from 'lucide-react';
import { STORE_DATA } from '../data/content';

export const LocationFooter: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Rua Augusto Nelson, 116 A, Centro, Diamantina, MG')}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent('Rua Augusto Nelson, 116 A, Centro, Diamantina, MG')}`;

  return (
    <footer id="localizacao" className="bg-[#FFFFFF] text-[#121212] border-t border-neutral-200">
      {/* Location Showcase & Map Embed Area */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Address and Operational Hours */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAFAFA] border border-[#C5A059]/40">
                <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#121212]">
                  Nossa Flagship Física
                </span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-[#121212]">
                Visite a Passarela no Coração de Diamantina
              </h2>

              <p className="font-sans-clean text-neutral-600 text-base font-light leading-relaxed">
                Um espaço intimista, acolhedor e climatizado, desenhado para que a sua experiência de 
                moda seja calma, prazerosa e inesquecível.
              </p>
            </div>

            {/* Address Box */}
            <div className="p-6 bg-[#FAFAFA] border border-neutral-200 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-[#121212] text-[#C5A059] rounded-none shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-editorial text-lg font-bold text-[#121212]">
                    Endereço Completo
                  </h4>
                  <p className="text-sm text-neutral-700 font-medium mt-1">
                    {STORE_DATA.address.street}, {STORE_DATA.address.number} — {STORE_DATA.address.neighborhood}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {STORE_DATA.address.city} - {STORE_DATA.address.state}, CEP: {STORE_DATA.address.zipCode}
                  </p>
                  <p className="text-xs text-[#A47E35] mt-1 font-medium">
                    {STORE_DATA.address.landmark}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200/80 flex flex-wrap items-center gap-3">
                <a
                  id="footer-google-maps-btn"
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#121212] hover:bg-[#C5A059] text-white hover:text-black text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Traçar Rota no Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  id="footer-waze-btn"
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-300 hover:border-[#121212] text-[#121212] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Abrir no Waze</span>
                </a>
              </div>
            </div>

            {/* Operating Hours & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#FAFAFA] border border-neutral-200">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#121212] mb-3">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>Horários de Funcionamento</span>
                </div>
                <div className="space-y-1.5 text-xs text-neutral-600">
                  <div className="font-medium text-neutral-800">{STORE_DATA.hours.weekdays}</div>
                  <div>{STORE_DATA.hours.saturday}</div>
                  <div className="text-neutral-500 text-[11px] pt-1">{STORE_DATA.hours.sunday}</div>
                </div>
              </div>

              <div className="p-5 bg-[#FAFAFA] border border-neutral-200">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#121212] mb-3">
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Telefones & WhatsApp</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div>
                    <div className="text-neutral-500 text-[10px] uppercase tracking-wider">Telefone Fixo da Loja:</div>
                    <a href={`tel:3835311575`} className="font-bold text-neutral-900 text-sm hover:text-[#C5A059]">
                      {STORE_DATA.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-neutral-500 text-[10px] uppercase tracking-wider">WhatsApp & Encomendas:</div>
                    <a
                      href={`https://wa.me/${STORE_DATA.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de atendimento via WhatsApp.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#C5A059] text-sm hover:underline flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      {STORE_DATA.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Visual Map & Boutique Card */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Stylized Interactive Map Preview Card */}
            <div className="bg-[#121212] border border-[#C5A059]/40 p-6 shadow-xl relative overflow-hidden text-white">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs uppercase tracking-widest font-semibold text-neutral-300">
                    Diamantina • Centro Histórico
                  </span>
                </div>
                <span className="text-[11px] text-[#C5A059] font-mono">39100-000</span>
              </div>

              {/* Map Graphic Preview with pin on Rua Augusto Nelson */}
              <div className="relative aspect-[16/10] bg-[#1a1a1a] border border-neutral-800 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=85"
                  alt="Diamantina historic city map view"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                />

                {/* Diamantina Historical Coordinates Grid Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent"></div>

                {/* Central Pin Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce">
                  <div className="p-3 bg-[#C5A059] text-[#121212] rounded-full shadow-2xl border-2 border-white">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                  <div className="mt-1 px-3 py-1 bg-[#121212] border border-[#C5A059] text-white text-[10px] uppercase font-bold tracking-widest whitespace-nowrap shadow-md">
                    Passarela Modas • 116 A
                  </div>
                </div>

                {/* Map Action Overlay */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 px-4 py-2 bg-[#FFFFFF] text-[#121212] hover:bg-[#C5A059] text-[11px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 transition-colors"
                >
                  <span>Abrir Mapa Interativo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
                <span>Ponto de referência: Próximo aos principais casarões históricos</span>
                <span className="text-[#C5A059] font-medium">Estacionamento nas proximidades</span>
              </div>
            </div>

            {/* Boutique Atmosphere Card */}
            <div className="p-6 bg-[#FAFAFA] border border-neutral-200 text-left">
              <h4 className="font-editorial text-lg font-bold text-[#121212]">
                Experiência de Compra em Diamantina
              </h4>
              <p className="text-xs text-neutral-600 font-light mt-1.5 leading-relaxed">
                Ao visitar nossa loja física na Rua Augusto Nelson, você desfruta de café mineiro artesanal,
                provadores amplos, espelhos com iluminação neutra e atendimento focado nas suas preferências reais de estilo.
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Editorial Bottom Credits */}
        <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center md:text-left">
          <div className="space-y-1">
            <div className="font-editorial text-sm font-bold text-[#121212]">
              PASSARELA MODAS — DIGITAL FLAGSHIP
            </div>
            <div>
              Razão Social: <strong>Genilda Costa</strong> • CNPJ: <strong>04.114.752/0001-34</strong>
            </div>
            <div>
              Rua Augusto Nelson, 116 A, Centro — Diamantina, MG • CEP 39100-000 • Tel: (38) 3531-1575
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-neutral-500">
            <span className="text-[11px]">Desde 2000 em Diamantina, MG</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[11px] text-[#A47E35] font-medium">Todos os direitos reservados © {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
