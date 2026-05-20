import { motion } from 'motion/react';
import { Phone, MessageCircle, Calendar, ChevronRight, HeartPulse } from 'lucide-react';

export default function Hero() {
  const trustPoints = [
    'Personalized Treatment Plans',
    'Modern Rehabilitation Approach',
    'Expert Sports Injury Care',
  ];

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/clinic_hero_1779204781890.png" 
          alt="Nirmal Kaya Clinic Background"
          className="w-full h-full object-cover"
        />
        {/* Very subtle gradient overlay just for text legibility */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 py-12 lg:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end w-full"
        >
          {/* Right: Points and Buttons */}
          <div className="w-full lg:max-w-md flex flex-col gap-4 md:gap-8">
            <div className="space-y-2 md:space-y-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-black text-clinic-blue bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-white/50 shadow-lg">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#facc15] flex items-center justify-center text-[8px] md:text-[10px] text-clinic-blue shrink-0 shadow-sm">
                    <span className="font-bold">✓</span>
                  </div>
                  <span>{point.toUpperCase()}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4">
               <a href="#contact" className="bg-[#facc15] hover:bg-[#eab308] text-clinic-blue font-black py-3 px-6 md:py-5 md:px-10 rounded-lg shadow-xl shadow-yellow-500/40 hover:shadow-2xl transition-all uppercase text-[11px] md:text-sm tracking-widest flex items-center justify-center flex-1">
                 SCHEDULE VISIT
               </a>
               <a href="tel:+919899532930" className="bg-white text-slate-700 border-2 border-slate-200 font-black py-3 px-6 md:py-5 md:px-10 rounded-lg shadow-sm hover:shadow-md transition-all uppercase text-[11px] md:text-sm tracking-widest flex items-center justify-center flex-1">
                 Call Now
               </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
