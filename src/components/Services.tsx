import { motion } from 'motion/react';
import { HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    { title: 'Back Pain Relief', icon: '01', desc: 'Expert non-surgical spinal decompression for slipped discs and back pain.', to: '/services/back-pain-physiotherapy' },
    { title: 'Paralysis Rehab', icon: '02', desc: 'Advanced stroke, hemiplegia, and neurological motor re-learning therapy.', to: '/services/stroke-rehabilitation' },
    { title: 'Sports Injuries', icon: '03', desc: 'Targeted field-grade muscle sprain and ligament recovery by BCCI Bihar Physio.', to: '/services/sports-injury-rehabilitation' },
    { title: 'Post-Surgery care', icon: '04', desc: 'Critical post-knee/hip replacements and fracture mobility programs.', to: '/services/post-surgery-rehabilitation' },
    { title: 'Neck & Cervical', icon: '05', desc: 'Clinical traction and postural correction for cervical spondylosis stiffness.', to: '/services/neck-pain-treatment' },
    { title: 'Sciatica Treatment', icon: '06', desc: 'Specific sciatic nerve root decompression and nerve flossing adjustments.', to: '/services/sciatica-treatment' },
    { title: 'Joint Arthritis', icon: '07', desc: 'Thermal clinical unloading therapy to restore osteoarthritic knee cartilage.', to: '/services/arthritis-physiotherapy' },
    { title: 'Home visits Care', icon: '08', desc: 'Professional bedside clinical recovery visits across Patna with portable SWD/IFT.', to: '/services/home-physiotherapy-services' },
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-100 px-4 py-4 md:px-8 md:py-5 flex flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-black text-clinic-blue uppercase text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em]">{`Advanced Clinical Specialties`}</h3>
              <p className="text-[9px] md:text-xs text-slate-500 font-bold uppercase mt-0.5 md:mt-1">Evidence-Based Patient Outcomes • Patna</p>
            </div>
            <Link 
              to="/services" 
              className="bg-clinic-blue text-white text-[8px] md:text-[10px] px-3 py-1.5 rounded font-black tracking-wider md:tracking-widest uppercase italic shrink-0 hover:bg-clinic-red transition-all flex items-center gap-1"
            >
              View All 12 Specialties <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white p-3.5 sm:p-6 md:p-8 flex flex-col justify-between hover:bg-slate-50 transition-colors group"
              >
                <div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 text-clinic-blue rounded flex items-center justify-center text-xs sm:text-base font-black transition-transform group-hover:scale-110 group-hover:bg-clinic-blue group-hover:text-white">
                    {service.icon}
                  </div>
                  <h4 className="font-black text-clinic-blue text-xs sm:text-base md:text-lg mt-3 md:mt-4 mb-1 group-hover:text-clinic-red transition-colors line-clamp-1 sm:line-clamp-none">{service.title}</h4>
                  <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 leading-normal sm:leading-relaxed font-semibold line-clamp-3 sm:line-clamp-none">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-4 mt-2">
                  <Link 
                    to={service.to} 
                    className="text-[9px] sm:text-[10px] font-black uppercase text-clinic-blue group-hover:text-clinic-red transition-all flex items-center gap-1 tracking-widest"
                  >
                    Medical Guide <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
 
      </div>
    </section>
  );
}
