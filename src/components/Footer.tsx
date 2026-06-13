import { Facebook, Youtube, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Intro */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center p-1 shadow-sm border border-slate-100 overflow-hidden">
                <img 
                  src="https://i.ibb.co/8LPgDvJm/9c74e7a6-9f4d-45a0-a03c-ec692c643647-removebg-preview.png" 
                  alt="Nirmal Kaya Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h1 className="font-black text-clinic-blue text-2xl uppercase tracking-tighter">NIRMAL KAYA</h1>
            </div>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
              Patna's premier physical rehabilitation and specialized pain clinic. Led by Dr. Kundan Kumar, combining 20+ years of healing practice with athletic-tier sports medicine.
            </p>
          </div>

          {/* Quick clinical paths */}
          <div>
            <h3 className="text-xs font-black text-clinic-blue uppercase tracking-widest mb-4">Core Clinic Pages</h3>
            <ul className="space-y-2.5 text-xs font-bold text-slate-500 uppercase">
              <li><Link to="/" className="hover:text-clinic-red transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-clinic-red transition-colors">About Dr. Kundan</Link></li>
              <li><Link to="/services" className="hover:text-clinic-red transition-colors">Treatments</Link></li>
              <li><Link to="/blog" className="hover:text-clinic-red transition-colors">Health Blog</Link></li>
              <li><Link to="/faq" className="hover:text-clinic-red transition-colors">Knowledge Base FAQ</Link></li>
              <li><Link to="/success-stories" className="hover:text-clinic-red transition-colors">Success Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-clinic-red transition-colors">Clinic Contact</Link></li>
            </ul>
          </div>

          {/* Specialized treatments */}
          <div>
            <h3 className="text-xs font-black text-clinic-blue uppercase tracking-widest mb-4">Key Specialties</h3>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-500">
              <li><Link to="/services/back-pain-physiotherapy" className="hover:text-clinic-blue transition-colors">Back Pain Physiotherapy</Link></li>
              <li><Link to="/services/neck-pain-treatment" className="hover:text-clinic-blue transition-colors">Neck Pain Spondylosis</Link></li>
              <li><Link to="/services/knee-pain-physiotherapy" className="hover:text-clinic-blue transition-colors">Knee Joint Osteoarthritis</Link></li>
              <li><Link to="/services/sports-injury-rehabilitation" className="hover:text-clinic-blue transition-colors">Sports Medicine Rehab</Link></li>
              <li><Link to="/services/stroke-rehabilitation" className="hover:text-clinic-blue transition-colors">Stroke Paralysis Care</Link></li>
              <li><Link to="/services/home-physiotherapy-services" className="hover:text-clinic-blue transition-colors">Home Physiotherapist Visits</Link></li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="text-xs font-black text-clinic-blue uppercase tracking-widest mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[9px] text-slate-400 uppercase font-black tracking-wide">Emergency / Quick Call</p>
                <p className="text-lg font-black text-clinic-red">+91 9899532930</p>
                <p className="text-sm font-black text-clinic-blue mt-0.5">+91 8294059645</p>
              </div>
              <div>
                <p className="text-[9px] text-slate-400 uppercase font-black tracking-wide">Clinic Location</p>
                <p className="text-xs font-bold text-slate-600 leading-normal">
                  Road No. 11D, Rajendra Nagar, Patna - 800016, Bihar, India
                </p>
              </div>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/profile.php?id=100063772314198" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-clinic-blue text-white flex items-center justify-center hover:bg-clinic-red transition-colors" title="Facebook Page"><Facebook size={14} /></a>
                <a href="https://www.youtube.com/@dr.kundankumar9926/videos" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-clinic-blue text-white flex items-center justify-center hover:bg-clinic-red transition-colors" title="YouTube Channel"><Youtube size={14} /></a>
                <a href="https://in.linkedin.com/in/dr-kundan-kumar-a44211247" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-clinic-blue text-white flex items-center justify-center hover:bg-clinic-red transition-colors" title="LinkedIn Profile"><Linkedin size={14} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider italic">
              © {new Date().getFullYear()} Nirmal Kaya Physiotherapy. Registered Medical Practice.
            </div>
            <Link 
              to="/admin" 
              className="text-[9px] font-black text-slate-300 hover:text-clinic-blue transition-colors uppercase tracking-[0.2em] mt-1"
            >
              Admin Dashboard
            </Link>
          </div>
          <div className="text-[10px] text-slate-400 max-w-xl text-center md:text-right italic leading-snug">
            Medical Disclaimer: Treatment outcomes depend on individual health condition. Information shared on this platform is for health-awareness purpose only. Always consult Dr. Kundan Kumar for primary diagnostic evaluation.
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-clinic-blue hover:bg-clinic-blue hover:text-white transition-all shadow-sm shrink-0"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
