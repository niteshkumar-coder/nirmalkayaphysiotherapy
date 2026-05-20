import { motion } from 'motion/react';
import { 
  Activity, Zap, UserPlus, Footprints, 
  Dribbble, Accessibility, Ban, Syringe,
  Timer, Users, Move, HeartPulse
} from 'lucide-react';

export default function Services() {
  const services = [
    { title: 'Knee & Back Pain', icon: '01', desc: 'Non-surgical relief for arthritis, disc pain, and chronic stiffness.' },
    { title: 'Paralysis Rehab', icon: '02', desc: 'Expert stroke (Hemiplegia) & nerve recovery protocols.' },
    { title: 'Sports Injuries', icon: '03', desc: 'Fast return-to-field therapy for sprains, strains & ACL.' },
    { title: 'Post-Fracture', icon: '04', desc: 'Joint stiffness therapy & muscle strength restoration.' },
    { title: 'Neck & Shoulder', icon: '05', desc: 'Effective care for cervical & frozen shoulder mobility.' },
    { title: 'Pediatric Walking', icon: '06', desc: 'Specialized childhood mobility & milestone support.' },
    { title: 'Spine Health', icon: '07', desc: 'Comprehensive sciatica & disc health management.' },
    { title: 'Muscle Weakness', icon: '08', desc: 'Targeted strength restoration & neuromuscular rehab.' },
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-100 px-4 py-4 md:px-8 md:py-5 flex flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-black text-clinic-blue uppercase text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em]">Specialized Services</h3>
              <p className="text-[9px] md:text-xs text-slate-500 font-bold uppercase mt-0.5 md:mt-1">Evidence-Based Clinical Treatments</p>
            </div>
            <span className="bg-clinic-blue text-white text-[8px] md:text-[10px] px-2 py-1 rounded-full font-black tracking-wider md:tracking-widest uppercase italic shrink-0">15+ Treatments Available</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white p-3.5 sm:p-6 md:p-8 flex flex-col gap-2.5 md:gap-4 hover:bg-slate-50 transition-colors group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 text-clinic-blue rounded flex items-center justify-center text-xs sm:text-base font-black transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <div>
                  <h4 className="font-black text-clinic-blue text-xs sm:text-base md:text-lg mb-1 group-hover:text-clinic-red transition-colors line-clamp-1 sm:line-clamp-none">{service.title}</h4>
                  <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 leading-normal sm:leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-4 md:mt-8 bg-white p-4 md:p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
           <div className="flex items-center gap-3 md:gap-4">
              <div className="w-9 h-9 md:w-12 md:h-12 bg-clinic-yellow/20 rounded-full flex items-center justify-center text-clinic-blue shrink-0">
                 <HeartPulse className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <p className="text-xs md:text-sm text-slate-600 font-bold max-w-md italic">
                "Our clinic focuses on functional recovery. We don't just treat symptoms; we restore the joy of movement."
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}
