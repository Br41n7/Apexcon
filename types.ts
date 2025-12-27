
export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial';
  imageUrl: string;
  description: string;
  longDescription?: string;
  materials?: string[];
  challenges?: string[];
  location: string;
  year: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  type: string;
  message: string;
  date: string;
  status: 'New' | 'Replied' | 'Archived';
}

export enum Section {
  HERO = 'hero',
  SERVICES = 'services',
  PORTFOLIO = 'portfolio',
  SHOP = 'shop',
  CONTACT = 'contact',
  AI_ADVISOR = 'ai-advisor'
}
