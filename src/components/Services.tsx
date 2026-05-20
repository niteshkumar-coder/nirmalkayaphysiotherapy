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
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-100 px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-black text-clinic-blue uppercase text-sm tracking-[0.2em]">Specialized Services</h3>
              <p className="text-xs text-slate-500 font-bold uppercase mt-1">Evidence-Based Clinical Treatments</p>
            </div>
            <span className="bg-clinic-blue text-white text-[10px] px-3 py-1 rounded-full font-black tracking-widest uppercase italic">15+ Treatments Available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 flex flex-col gap-4 hover:bg-slate-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-50 text-clinic-blue rounded flex items-center justify-center font-black transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <div>
                  <h4 className="font-black text-clinic-blue text-lg mb-2 group-hover:text-clinic-red transition-colors">{service.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-clinic-yellow/20 rounded-full flex items-center justify-center text-clinic-blue">
                 <HeartPulse size={24} />
              </div>
              <p className="text-sm text-slate-600 font-bold max-w-md italic">
                "Our clinic focuses on functional recovery. We don't just treat symptoms; we restore the joy of movement."
              </p>
           </div>

        </div>

      </div>
    </section>
  );
}
