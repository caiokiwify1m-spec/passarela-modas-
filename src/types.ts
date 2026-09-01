export interface CuratedItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  fabricSpecs: string[];
  whatsappMessage: string;
}

export interface LookItem {
  id: string;
  title: string;
  category: 'Linho & Fibras' | 'Alfaiataria' | 'Semijoias & Ouro' | 'Vestidos & Noite' | 'Couro & Acessórios';
  tagline: string;
  description: string;
  image: string;
  details: string[];
  fabric: string;
  occasion: string;
  colorPalette: { name: string; hex: string }[];
  priceTag?: string;
  whatsappMessage: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  highlight: string;
}

export interface StoreInfo {
  name: string;
  legalName: string;
  cnpj: string;
  foundationYear: number;
  phone: string;
  whatsapp: string;
  whatsappRaw: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    landmark: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export interface StylingQuizState {
  style: string;
  occasion: string;
  size: string;
  preferredPalette: string;
  deliveryType: string;
  customerName: string;
  customerPhone: string;
}
