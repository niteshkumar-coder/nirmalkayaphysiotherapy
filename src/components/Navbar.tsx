import { motion } from 'motion/react';
import { Phone, MessageCircle, HeartPulse, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Blog', to: '/blog' },
    { name: 'FAQ', to: '/faq' },
    { name: 'Success Stories', to: '/success-stories' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header className="nav-header px-4 md:px-8 py-4 flex justify-between items-center shrink-0">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-1">
          <img 
            src="https://i.ibb.co/8LPgDvJm/9c74e7a6-9f4d-45a0-a03c-ec692c643647-removebg-preview.png" 
            alt="Nirmal Kaya Logo" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-black leading-tight tracking-tight uppercase">NIRMAL KAYA</h1>
          <p className="text-[9px] md:text-[10px] tracking-widest uppercase opacity-90 font-bold">Physiotherapy & Rehabilitation Center</p>
        </div>
      </Link>

      {/* Desktop view */}
      <div className="hidden lg:flex gap-8 items-center">
        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className="text-xs uppercase font-bold tracking-widest hover:text-clinic-yellow transition-colors">{link.name}</Link>
          ))}
        </nav>
        <div className="flex gap-6 items-center border-l border-white/20 pl-8">
          <div className="text-right">
            <p className="text-[10px] opacity-100 uppercase font-black text-[#facc15] tracking-wider animate-pulse">🏏 BCCI Bihar Senior Physio</p>
            <p className="text-sm font-bold">Dr. Kundan Kumar <span className="text-[10px] font-normal text-clinic-yellow opacity-100">(BPT, MPT, MIAP)</span></p>
          </div>
          <div className="flex gap-2">
            <a href="tel:+919899532930" className="bg-clinic-red hover:bg-red-700 px-4 py-2 rounded font-bold text-xs transition-colors uppercase">Call: 9899532930</a>
            <a href="https://wa.me/919899532930" className="bg-[#25D366] hover:bg-green-600 px-4 py-2 rounded font-bold text-xs transition-colors flex items-center gap-1 uppercase">
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu toggle */}
      <button 
        className="lg:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-clinic-blue border-t border-clinic-yellow absolute top-full left-0 right-0 shadow-xl z-50 animate-fade-in"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-clinic-yellow font-bold uppercase tracking-widest text-sm py-3 border-b border-white/10 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
               <div className="text-center mb-2">
                 <p className="text-[10.5px] text-[#facc15] uppercase font-black tracking-wide">🏏 BCCI BIHAR SENIOR PHYSIO</p>
                 <p className="text-[11px] text-white font-bold opacity-90">Dr. Kundan Kumar (BPT, MPT, MIAP)</p>
               </div>
              <a href="tel:+919899532930" className="btn-secondary w-full justify-center text-xs">
                <Phone size={16} />
                CALL: 9899532930
              </a>
              <a href="https://wa.me/919899532930" className="bg-[#25D366] text-white py-3 px-6 rounded font-bold w-full flex items-center justify-center gap-2 text-xs">
                <MessageCircle size={18} />
                WHATSAPP US
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
