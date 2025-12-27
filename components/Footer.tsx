
import React from 'react';

interface FooterProps {
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
            <span className="text-2xl font-extrabold tracking-tight text-white">
              APEX<span className="text-blue-500 font-light">CON</span>
            </span>
          </div>

          <div className="flex space-x-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <button 
              onClick={onAdminClick}
              className="text-gray-800 hover:text-blue-600/50 transition-colors text-xs font-bold"
            >
              Admin Portal
            </button>
          </div>

          <div className="flex space-x-4">
            {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all border border-white/5"
              >
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5 bg-gray-400"></div>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} Apex Construction & Developments Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
