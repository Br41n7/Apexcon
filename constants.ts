
import { Project, Product } from './types';

export const WHATSAPP_NUMBER = "2348000000000"; // Replace with actual owner number
export const OWNER_EMAIL = "sales@apexconstruction.com"; // Replace with actual owner email

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Skyline Heights',
    category: 'Residential',
    location: 'Lagos, Nigeria',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'A luxurious 24-story residential complex featuring sustainable energy solutions and panoramic city views.',
    longDescription: 'The Skyline Heights represents a pinnacle of modern urban living. This 24-story architectural marvel was designed with the philosophy of "Eco-Luxury." Every apartment features floor-to-ceiling smart glass that adjusts opacity based on sunlight intensity, significantly reducing HVAC costs while providing uninhibited views of the Lagos skyline.',
    materials: ['Recycled Steel Framing', 'Low-E Smart Glass', 'Vertical Garden Systems', 'Italian Marble Flooring'],
    challenges: ['Constructing on reclaimed land with unique soil density requirements.', 'Integrating a central gray-water recycling system for 200 individual units.']
  },
  {
    id: '2',
    title: 'Nexus Business Hub',
    category: 'Commercial',
    location: 'Abuja, Nigeria',
    year: '2022',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'State-of-the-art office space designed for high-performance teams with modular workspace technology.',
    longDescription: 'Nexus Business Hub was conceptualized as the "Office of 2030." We focused on modularity, allowing companies to reconfigure their floor plans in hours rather than weeks. The building operates on a 100% renewable energy microgrid, making it the first carbon-neutral commercial space in the region.',
    materials: ['Post-Tensioned Concrete', 'Photovoltaic Glass Panels', 'Modular Partition Systems', 'Acoustic Felt Insulation'],
    challenges: ['Meeting zero-carbon operational standards within a humid tropical climate.', 'Implementing a sub-second failover power system for data-heavy tenants.']
  },
  {
    id: '3',
    title: 'Eco-Industrial Park',
    category: 'Industrial',
    location: 'Ogun, Nigeria',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80',
    description: 'A massive 50,000 sqm manufacturing facility optimized for low carbon footprint operations.',
    longDescription: 'This facility sets a new global standard for industrial infrastructure. Spanning 50,000 sqm, the Eco-Industrial Park utilizes natural ventilation through custom-engineered roof vents and massive skylights, eliminating the need for daytime electric lighting and significantly reducing energy consumption.',
    materials: ['High-Performance Insulated Metal Panels', 'Polished Concrete with Recycled Aggregates', 'Custom HVAC Heat Recovery Systems'],
    challenges: ['Managing heavy machinery vibration isolation across a vast single-slab foundation.', 'Synchronizing construction with international logistics for specialized pre-fab components.']
  },
  {
    id: '4',
    title: 'Emerald Villa Estates',
    category: 'Residential',
    location: 'Enugu, Nigeria',
    year: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    description: 'Premium gated community focusing on modern minimalism and lush green landscaping.',
    longDescription: 'Emerald Villa Estates consists of 15 boutique luxury villas, each nestled in its own micro-ecosystem. The project emphasizes privacy through natural topography and local flora rather than traditional walls. Each home features a custom "floating roof" design that provides passive cooling and rain collection for garden irrigation.',
    materials: ['Local Sandstone Cladding', 'Teak Wood Accents', 'Hydro-Stone Paving', 'High-Efficiency Solar Water Heaters'],
    challenges: ['Maintaining existing old-growth trees while excavating for modern foundations.', 'Developing a localized smart irrigation system that adapts to seasonal humidity changes.']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Premium Granite Slabs',
    price: 15000,
    category: 'Materials',
    imageUrl: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=400&q=80',
    description: 'High-durability polished granite for countertops and flooring.'
  },
  {
    id: 'p2',
    name: 'Smart Door Lock Pro',
    price: 45000,
    category: 'Fittings',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1037906d9927?auto=format&fit=crop&w=400&q=80',
    description: 'Biometric and remote-access enabled security system for modern homes.'
  },
  {
    id: 'p3',
    name: 'Eco-Friendly Cement Mix',
    price: 5200,
    category: 'Materials',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
    description: 'High-strength cement with 30% recycled content.'
  },
  {
    id: 'p4',
    name: 'Industrial Safety Kit',
    price: 12000,
    category: 'Safety',
    imageUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=400&q=80',
    description: 'Complete PPE set including helmet, high-vis vest, and gloves.'
  }
];
