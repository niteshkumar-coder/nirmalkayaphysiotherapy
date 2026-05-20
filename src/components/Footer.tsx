import { HeartPulse, Facebook, Youtube, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center p-1 shadow-sm overflow-hidden">
                <img 
                  src="https://i.ibb.co/NzRN34x/9c74e7a6-9f4d-45a0-a03c-ec692c643647-removebg-preview.png" 
                  alt="Nirmal Kaya Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h1 className="font-black text-clinic-blue text-2xl uppercase tracking-tighter">NIRMAL KAYA</h1>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              A premier destination for physical rehabilitation and specialized pain management in Patna. Led by Dr. Kundan Kumar, we combine clinical expertise with patient-centric care to restore mobility and quality of life.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
             <div className="flex flex-col gap-6">
                <div className="text-right">
                  <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Emergency / Quick Call</p>
                  <p className="text-xl font-black text-clinic-red">+91 82940 59645</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400 uppercase font-black mb-1">Clinic Hours</p>
                  <p className="text-xl font-black text-clinic-blue italic">09:00 AM - 08:00 PM</p>
                </div>
             </div>
             
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-right">
                <p className="text-[10px] text-clinic-blue uppercase font-black mb-2 tracking-widest">Connect with us</p>
                <div className="flex gap-2 justify-end">
                  <a href="https://www.facebook.com/profile.php?id=100063772314198" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-clinic-blue text-white flex items-center justify-center hover:bg-clinic-red transition-colors" title="Facebook Page"><Facebook size={16} /></a>
                  <a href="https://www.youtube.com/@dr.kundankumar9926/videos" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-clinic-blue text-white flex items-center justify-center hover:bg-clinic-red transition-colors" title="YouTube Channel"><Youtube size={16} /></a>
                  <a href="https://in.linkedin.com/in/dr-kundan-kumar-a44211247" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-clinic-blue text-white flex items-center justify-center hover:bg-clinic-red transition-colors" title="LinkedIn Profile"><Linkedin size={16} /></a>
                </div>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider italic">
              © {new Date().getFullYear()} Nirmal Kaya Physiotherapy. Registered Medical Practice.
            </div>
            <a 
              href="/admin" 
              className="text-[9px] font-black text-slate-300 hover:text-clinic-blue transition-colors uppercase tracking-[0.2em] mt-1"
            >
              Admin Dashboard
            </a>
          </div>
          <div className="text-[10px] text-slate-400 max-w-xl text-center md:text-right italic leading-snug">
            Medical Disclaimer: Treatment results depend on individual health condition. This website is for informational purposes. Please consult Dr. Kundan Kumar for a proper clinical evaluation.
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-clinic-blue hover:bg-clinic-blue hover:text-white transition-all"
          >
            <ArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
}
