
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import AIAdvisor from './components/AIAdvisor';
import FadeInSection from './components/FadeInSection';
import AdminPanel from './components/AdminPanel';
import { PROJECTS as INITIAL_PROJECTS, PRODUCTS as INITIAL_PRODUCTS } from './constants';
import { Product, CartItem, Project } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  
  // Dynamic Data State
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatingBtn(true);
      } else {
        setShowFloatingBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="bg-white">
          <FadeInSection>
            <About />
          </FadeInSection>
        </section>

        <section id="services" className="bg-gray-50">
          <FadeInSection>
            <Services />
          </FadeInSection>
        </section>

        <section id="portfolio" className="bg-white">
          <FadeInSection>
            <Portfolio projects={projects} />
          </FadeInSection>
        </section>

        <section id="testimonials" className="bg-gray-50">
          <FadeInSection>
            <Testimonials />
          </FadeInSection>
        </section>

        <section id="ai-advisor" className="bg-blue-900">
          <FadeInSection>
            <AIAdvisor />
          </FadeInSection>
        </section>

        <section id="shop" className="bg-white">
          <FadeInSection>
            <Shop products={products} onAddToCart={addToCart} />
          </FadeInSection>
        </section>

        <section id="contact" className="bg-gray-900">
          <FadeInSection>
            <Contact />
          </FadeInSection>
        </section>
      </main>

      <Footer onAdminClick={() => setIsAdminOpen(true)} />

      {/* Floating Contact Sales Button */}
      <a
        href="#contact"
        className={`fixed bottom-8 right-8 z-40 flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full shadow-2xl transition-all duration-500 transform ${
          showFloatingBtn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <span className="font-bold tracking-wide">Contact Sales</span>
      </a>

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      {isAdminOpen && (
        <AdminPanel 
          projects={projects}
          setProjects={setProjects}
          products={products}
          setProducts={setProducts}
          onClose={() => setIsAdminOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
