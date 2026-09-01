import { CuratedItem, LookItem, TimelineMilestone, StoreInfo } from '../types';

export const STORE_DATA: StoreInfo = {
  name: 'Passarela Modas',
  legalName: 'Genilda Costa',
  cnpj: '04.114.752/0001-34',
  foundationYear: 2000,
  phone: '(38) 3531-1575',
  whatsapp: '(38) 3531-1575',
  whatsappRaw: '553835311575',
  address: {
    street: 'Rua Augusto Nelson',
    number: '116 A',
    neighborhood: 'Centro',
    city: 'Diamantina',
    state: 'MG',
    zipCode: '39100-000',
    landmark: 'Coração do Centro Histórico, próximo à Praça JK e casarões coloniais',
  },
  hours: {
    weekdays: 'Segunda a Sexta: 09:00 às 18:30',
    saturday: 'Sábado: 09:00 às 13:00',
    sunday: 'Domingo e Feriados: Fechado (Atendimento WhatsApp sob consulta)',
  },
};

export const CURATED_PILLARS: CuratedItem[] = [
  {
    id: 'casual-premium',
    category: 'Coleção Exclusiva',
    title: 'Moda Casual Premium',
    subtitle: 'Fluidez, alfaiataria atemporal e fibras nobres.',
    description:
      'Peças pensadas para a mulher dinâmica que não abre mão da sofisticação. Linho puro, sedas, tricots refinados e cortes de alfaiataria contemporânea que transitam do ambiente executivo a ocasiões casuais com naturalidade.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85',
    alt: 'High-end fashion boutique interior, soft lighting, minimalist racks',
    tags: ['Linho Puro', 'Alfaiataria Moderna', 'Seda & Tricot', 'Modelagem Impecável'],
    fabricSpecs: ['100% Linho Natural Premium', 'Viscose Acetinada Importada', 'Tricot Modal com elastano'],
    whatsappMessage: 'Olá! Gostaria de receber fotos e novidades da linha de Moda Casual Premium da Passarela Modas.',
  },
  {
    id: 'acessorios-luxo',
    category: 'Design & Brilho',
    title: 'Acessórios de Luxo',
    subtitle: 'O toque de ouro e elegância que assina a sua presença.',
    description:
      'Curadoria seleta de semijoias com banho nobre de ouro 18k e ródio, pedras naturais lapidadas, clutches estruturadas, cintos em couro legítimo e lenços de seda. Cada peça complementa e eleva qualquer composição.',
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85',
    alt: 'Close up of luxury jewelry and accessories on a marble surface',
    tags: ['Semijoias Banhadas a Ouro', 'Pedras Naturais', 'Bolsas em Couro', 'Clutches Exclusivas'],
    fabricSpecs: ['Banho Ouro 18k Antialérgico', 'Pedras Naturais de Minas Gerais', 'Couro Bovino Legítimo Texturizado'],
    whatsappMessage: 'Olá! Quero conhecer os Acessórios de Luxo e Semijoias disponíveis na Passarela Modas.',
  },
  {
    id: 'atendimento-vip',
    category: 'Experiência Singular',
    title: 'Atendimento Personalizado',
    subtitle: 'Consultoria de imagem e acolhimento com a alma de Diamantina.',
    description:
      'Há mais de duas décadas, cada cliente é recebida como única. Oferecemos consultoria de estilo individualizada, serviço de mala delivery exclusiva para sua casa e atendimento sob medida com a equipe liderada por Genilda Costa.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    alt: 'Elegant woman walking in a historic Brazilian street, sun flare',
    tags: ['Consultoria de Imagem', 'Mala Delivery VIP', 'Provador Privativo', 'Envio Seguro'],
    fabricSpecs: ['Atendimento com Hora Marcada', 'Entrega em Domicílio em Diamantina', 'Envio Express com Seguro para todo o Brasil'],
    whatsappMessage: 'Olá Genilda e equipe! Gostaria de agendar um atendimento personalizado ou solicitar uma Mala VIP.',
  },
];

export const LOOKBOOK_COLLECTIONS: LookItem[] = [
  {
    id: 'capsula-linho-diamantina',
    title: 'Conjunto Riviera em Puro Linho',
    category: 'Linho & Fibras',
    tagline: 'Tons areia e fiação nobre inspirados nas pedras históricas de Minas.',
    description: 'Camisaria fluida em puro linho europeu com corte solto e calça palazzo de cintura alta estruturada. Frescor absoluto e presença marcante.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85',
    details: ['100% Linho com pré-encolhimento', 'Botões em madrepérola natural', 'Bolsos faca alfaiataria'],
    fabric: '100% Linho Puro Rústico',
    occasion: 'Dia, Resort, Almoço Executivo, Reuniões Elegantes',
    colorPalette: [
      { name: 'Areia Diamantina', hex: '#D8CAB8' },
      { name: 'Off-White Puro', hex: '#F5F5F0' },
      { name: 'Terracota Suave', hex: '#B87D65' }
    ],
    priceTag: 'Curadoria Exclusiva',
    whatsappMessage: 'Olá! Gostaria de ver disponibilidade e tamanhos do Conjunto Riviera em Puro Linho.',
  },
  {
    id: 'alfaiataria-noite-diamantina',
    title: 'Terno Feminino Crepe Imperial',
    category: 'Alfaiataria',
    tagline: 'Preto absoluto e caimento pesado que alonga e emoldura.',
    description: 'Blazer acinturado com entretela italiana e calça reta com fendas discretas na barra. O auge do Quiet Luxury contemporâneo.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
    details: ['Crepe encorpado com elastano', 'Lapela em cetim fosco nobre', 'Forro acetinado macio'],
    fabric: 'Crepe de Seda Encorpado com Elastano',
    occasion: 'Eventos Noturnos, Palestras, Jantares Nobres',
    colorPalette: [
      { name: 'Eerie Black', hex: '#121212' },
      { name: 'Marfim Nobre', hex: '#EDE8DF' },
      { name: 'Azul Meia-Noite', hex: '#1B2430' }
    ],
    priceTag: 'Curadoria Exclusiva',
    whatsappMessage: 'Olá! Tenho interesse no Terno Feminino Crepe Imperial da Passarela Modas.',
  },
  {
    id: 'semijoias-ouro-diamantina',
    title: 'Gargantilha Elo Português & Pingente Quartzo',
    category: 'Semijoias & Ouro',
    tagline: 'Homenagem à tradição ourives e lapidação de pedras de Diamantina.',
    description: 'Corrente robusta banhada a 10 milésimos de ouro 18k com acabamento diamantado e fecho boia de segurança. Garantia vitalícia de banho.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85',
    details: ['Banho 10 milésimos Ouro 18k', 'Verniz cataforético antialérgico', 'Pedra natural lapidada'],
    fabric: 'Metal Nobre com Banho Ouro 18k & Pedras Naturais',
    occasion: 'Uso Diário & Ocasiões Especiais',
    colorPalette: [
      { name: 'Ouro 18k Polido', hex: '#C5A059' },
      { name: 'Ouro Champagne', hex: '#DFCA95' },
      { name: 'Ródio Branco', hex: '#E2E8F0' }
    ],
    priceTag: 'Seleção Ouro',
    whatsappMessage: 'Olá! Quero conhecer as Semijoias com banho de Ouro 18k da Passarela Modas.',
  },
  {
    id: 'vestido-festa-seda',
    title: 'Vestido Midi Plissado em Chiffon Acetinado',
    category: 'Vestidos & Noite',
    tagline: 'Movimento escultural e gola alta com drapeado manual.',
    description: 'Fluidez poética em tons esmeralda e dourado. Modelagem que abraça o corpo sem marcar, ideal para casamentos e recepções requintadas.',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=85',
    details: ['Plissado permanente italiano', 'Faixa para amarração na cintura', 'Decote sutil nas costas'],
    fabric: 'Chiffon Acetinado com Toque de Seda',
    occasion: 'Casamentos, Bodas, Noites Especiais',
    colorPalette: [
      { name: 'Verde Esmeralda', hex: '#1E4D40' },
      { name: 'Ouro Envelhecido', hex: '#C5A059' },
      { name: 'Bordeaux Nobre', hex: '#5C1D24' }
    ],
    priceTag: 'Curadoria Exclusiva',
    whatsappMessage: 'Olá! Gostaria de detalhes e fotos do Vestido Midi Plissado em Chiffon.',
  },
  {
    id: 'bolsa-couro-artesanal',
    title: 'Bolsa Baguette em Couro Legítimo & Metais Dourados',
    category: 'Couro & Acessórios',
    tagline: 'Estrutura geométrica e alça regulável para versatilidade diurna e noturna.',
    description: 'Confeccionada em couro legítimo floater com costuras manuais reforçadas. Espaço interno inteligente e forro em camurça aveludada.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85',
    details: ['Couro bovino legítimo', 'Ferragens banhadas em ouro fosco', 'Alça tiracolo removível'],
    fabric: '100% Couro Bovino Genuíno',
    occasion: 'Dia a Dia Sofisticado, Viagens, Eventos',
    colorPalette: [
      { name: 'Caramelo Sela', hex: '#8B5A2B' },
      { name: 'Preto Caviar', hex: '#121212' },
      { name: 'Nude Areia', hex: '#D2B48C' }
    ],
    priceTag: 'Seleção Couro',
    whatsappMessage: 'Olá! Tenho interesse na Bolsa Baguette em Couro Legítimo.',
  },
  {
    id: 'tricot-modal-cashmere',
    title: 'Cardigan de Fiação Modal & Botões Joia',
    category: 'Linho & Fibras',
    tagline: 'Aconchego térmico com caimento leve para o clima ameno de Diamantina.',
    description: 'Trama fina com toque de cashmere, perfeito para sobreposições em noites frescas da serra mineira. Botões resinados com borda dourada.',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1200&q=85',
    details: ['Fiação modal super soft', 'Decote V elegante', 'Punhos canelados delicados'],
    fabric: 'Modal Nobre com Toque de Cashmere',
    occasion: 'Clima Ameno, Viagens, Ambiente Corporativo',
    colorPalette: [
      { name: 'Manteiga Soft', hex: '#F7E7CE' },
      { name: 'Cinza Mescla Claro', hex: '#D3D3D3' },
      { name: 'Preto Clássico', hex: '#121212' }
    ],
    priceTag: 'Curadoria Exclusiva',
    whatsappMessage: 'Olá! Gostaria de consultar cores e tamanhos do Cardigan Modal com Botões Joia.',
  }
];

export const HISTORY_MILESTONES: TimelineMilestone[] = [
  {
    year: '2000',
    title: 'Fundação da Passarela Modas',
    description:
      'Genilda Costa abre as portas no Centro de Diamantina com a visão de trazer marcas de moda autêntica e um atendimento acolhedor para as mulheres do Vale do Jequitinhonha.',
    highlight: 'Início da trajetória',
  },
  {
    year: '2012',
    title: 'Expansão da Linha de Acessórios & Luxo',
    description:
      'A loja consolida sua curadoria de semijoias finas, bolsas de couro e marcas de destaque nacional, tornando-se referência obrigatória na cidade.',
    highlight: 'Consolidação de Estilo',
  },
  {
    year: '2024+',
    title: '24 Anos de Tradição e Digital Flagship',
    description:
      'Com quase um quarto de século de credibilidade e o CNPJ 04.114.752/0001-34, a Passarela Modas une a tradição presencial à experiência de compra digital por WhatsApp.',
    highlight: 'Tradição & Inovação',
  },
];

export const TESTIMONIALS = [
  {
    author: 'Dra. Maria Helena Silveira',
    role: 'Cliente desde 2004 • Diamantina',
    timeLabel: '20 Anos de Fidelidade',
    content:
      'A Passarela Modas faz parte dos momentos mais especiais da minha vida há 20 anos. O bom gosto da Genilda e a qualidade das peças são inigualáveis.',
    rating: 5,
    location: 'Diamantina, MG',
  },
  {
    author: 'Camila Guimarães',
    role: 'Arquiteta • Belo Horizonte / Diamantina',
    timeLabel: 'Cliente Frequente',
    content:
      'Sempre que visito Diamantina, minha primeira parada é na Passarela. Encontro roupas de um corte impecável e semijoias que parecem joias de família.',
    rating: 5,
    location: 'Belo Horizonte / Diamantina',
  },
  {
    author: 'Beatriz Fonseca',
    role: 'Advogada • Diamantina',
    timeLabel: '12 Anos de Parceria',
    content:
      'O atendimento é impecável. A equipe sabe exatamente o que combina com meu estilo e a qualidade dos tecidos dura anos intacta.',
    rating: 5,
    location: 'Diamantina, MG',
  },
  {
    author: 'Renata Vasconcelos',
    role: 'Empresária • Montes Claros',
    timeLabel: 'Compradora VIP',
    content:
      'O serviço de Mala Delivery e o atendimento via WhatsApp são rápidos e impecáveis. As peças chegam perfumadas, impecavelmente passadas e cheias de requinte.',
    rating: 5,
    location: 'Montes Claros / Diamantina',
  },
];

export const HISTORIC_LANDMARKS_NEARBY = [
  {
    name: 'Praça JK',
    distance: '150 metros',
    description: 'Ponto de encontro icônico no coração do Centro Histórico.',
  },
  {
    name: 'Casa de Chica da Silva',
    distance: '300 metros',
    description: 'Monumento histórico e arquitetura colonial de Diamantina.',
  },
  {
    name: 'Basílica de Santo Antônio',
    distance: '250 metros',
    description: 'Catedral principal da cidade histórica.',
  },
  {
    name: 'Passarela Modas (Rua Augusto Nelson, 116 A)',
    distance: 'Sua Destinação',
    description: 'Fachada discreta e acolhedora com atendimento exclusivo.',
  },
];
