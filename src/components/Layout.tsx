import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      {/* Top Prominent Mobile Highlight Banner for Direct Call */}
      <div id="top-hotline" className="bg-clinic-yellow text-clinic-blue py-2 px-4 shadow-[0_2px_15px_rgba(30,58,138,0.08)] flex items-center justify-center gap-2 border-b border-clinic-blue/10 relative z-50 text-center flex-wrap">
        <span className="flex h-2.5 w-2.5 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-clinic-red"></span>
        </span>
        <span className="font-display font-black uppercase tracking-wider text-[10px] md:text-xs">
          Direct Doctor Consultation Call:
        </span>
        <a 
          href="tel:+918294059645" 
          id="hotline-phone-link"
          className="bg-clinic-red text-white py-1.5 px-3 rounded font-black tracking-widest text-[11px] md:text-xs hover:bg-red-700 transition-all shadow-md active:scale-95 flex items-center gap-1 animate-pulse"
        >
          <Phone size={12} className="shrink-0" />
          +91 8294059645
        </a>
      </div>

      {/* Dynamic Header */}
      <Navbar />

      {/* Main content body */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Dynamic Footer */}
      <Footer />

      {/* Sticky Bottom CTAs for Mobile and Tablet (Patient Lead Generation & Mobile SEO) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 grid grid-cols-3 gap-1 p-2 z-40 shadow-[0_-4px_24px_rgba(30,58,138,0.1)]">
        <a 
          href="tel:+919899532930" 
          className="flex flex-col items-center justify-center p-2 rounded bg-clinic-red text-white text-center select-none active:scale-95 transition-transform"
        >
          <Phone size={18} className="mb-0.5" />
          <span className="text-[10px] font-black uppercase tracking-wider">Call Now</span>
        </a>

        <a 
          href="https://wa.me/919899532930?text=Hi%20Nirmal%20Kaya%20Physiotherapy%20Clinic,%20I%20want%20to%20book%20an%20appointment." 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded bg-[#25D366] text-white text-center select-none active:scale-95 transition-transform"
        >
          <MessageCircle size={18} className="mb-0.5" />
          <span className="text-[10px] font-black uppercase tracking-wider font-sans">WhatsApp</span>
        </a>

        <Link 
          to="/book" 
          className="flex flex-col items-center justify-center p-2 rounded bg-clinic-blue text-white text-center select-none active:scale-95 transition-transform"
        >
          <Calendar size={18} className="mb-0.5" />
          <span className="text-[10px] font-black uppercase tracking-wider">Book Appt</span>
        </Link>
      </div>

      {/* Floating Desktop CTAs */}
      <div className="hidden lg:flex flex-col gap-3 fixed right-6 bottom-6 z-50">
        <a 
          href="https://wa.me/919899532930?text=Hi%20Nirmal%20Kaya%20Physiotherapy%20Clinic,%20I%20want%20to%20book%20an%20appointment." 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group relative"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">Chat with Dr. Kundan</span>
        </a>

        <a 
          href="tel:+919899532930" 
          className="w-14 h-14 bg-clinic-red text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-red-700 transition-all hover:scale-110 group relative"
          title="Direct Call"
        >
          <Phone size={26} />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">Call Clinic: 9899532930</span>
        </a>

        <Link 
          to="/book" 
          className="w-14 h-14 bg-clinic-blue text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-opacity-90 transition-all hover:scale-110 group relative"
          title="Book Appointment"
        >
          <Calendar size={26} />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">Schedule Visit Slip</span>
        </Link>
      </div>
      
      {/* Space at the bottom on mobile screens to prevent sticky CTA overlay blocking content */}
      <div className="lg:hidden h-20" />
    </div>
  );
}
