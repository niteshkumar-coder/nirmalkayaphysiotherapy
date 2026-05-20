import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, Target, Zap, 
  Heart, ShieldCheck, Stethoscope, 
  ChevronRight, Calendar, ArrowRight 
} from 'lucide-react';

const trustPoints = [
  {
    id: 'experienced',
    title: 'Experienced Physiotherapist',
    subtitle: 'Managed by Dr. Kundan Kumar, Senior Physiotherapist for BCCI Bihar Cricket Team with 20+ years clinical experience.',
    description: 'Patients receive care directly from a state-recognized medical professional entrusted with elite-level sports recovery and high-performance physical care.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    alt: 'Dr. Kundan Kumar Physiotherapy Consultation',
    icon: Users,
  },
  {
    id: 'personalized',
    title: 'Personalized Treatment',
    subtitle: 'Every patient gets a treatment plan designed according to their body condition and health needs.',
    description: 'Exercises and therapy are customized instead of using the same treatment for everyone.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVTex0NOMEQT-pQM5O5ZXQl19tvbdRg2BHw&s',
    alt: 'Personalized treatment session',
    icon: Target,
  },
  {
    id: 'modern',
    title: 'Modern Rehab Approach',
    subtitle: 'The clinic combines traditional manual therapy with advanced exercise science.',
    description: 'This approach aims to improve recovery speed and treatment effectiveness.',
    image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern Rehab therapy and exercise science',
    icon: Zap,
  },
  {
    id: 'friendly',
    title: 'Patient-Friendly Care',
    subtitle: 'The clinic provides a comfortable and supportive environment for patients.',
    description: 'The focus is on patient well-being, care, and a positive treatment experience.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
    alt: 'Comfortable patient-friendly environment',
    icon: Heart,
  },
  {
    id: 'results',
    title: 'Proven Results',
    subtitle: 'More than 5000+ patients have been successfully treated for both long-term (chronic) and short-term (acute) conditions.',
    description: 'This shows the clinic has experience in handling different health problems effectively.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    alt: 'Recovered healthy and active patient close up',
    icon: ShieldCheck,
  },
  {
    id: 'sports',
    title: 'Sports Injury Expertise',
    subtitle: 'Official athletic rehabilitation directed by BCCI Bihar Cricket Team\'s Senior Physiotherapist.',
    description: 'Athletes, fitness professionals, and active individuals receive tailored elite recovery plans designed for fast, safe, and robust return-to-play performance.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-RAeuI0cGhDv--ridY8rY4usjFnXbHissQ&s',
    alt: 'Sports therapist treating athlete shoulder injury',
    icon: Stethoscope,
  },
];

export default function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mobileOpenIdx, setMobileOpenIdx] = useState(0);

  return (
    <section id="trust" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Title Heading */}
        <div className="text-center mb-16">
          <p className="text-clinic-red font-bold uppercase tracking-widest text-xs lg:text-sm mb-3">
            The Nirmal Kaya Advantage
          </p>
          <h2 className="section-title text-clinic-blue">
            Why Trust Our Clinic?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Click on any segment below to learn why families and athletes in Patna choose Nirmal Kaya Center for complete recovery.
          </p>
        </div>

        {/* 1. Mobile/Tablet Layout: Accordion Menu */}
        <div className="space-y-2.5 md:hidden">
          {trustPoints.map((point, idx) => {
            const IconComponent = point.icon;
            const isOpen = mobileOpenIdx === idx;
            return (
              <div 
                key={point.id} 
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-blue-200 bg-blue-50/5' : 'border-slate-100 bg-white'
                }`}
              >
                <button
                  onClick={() => setMobileOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-3.5 text-left focus:outline-hidden"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                      isOpen ? 'bg-clinic-blue text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-bold text-clinic-blue text-sm leading-snug">{point.title}</span>
                  </div>
                  <div className={`p-1 rounded-full ${isOpen ? 'bg-blue-100/50 text-clinic-blue' : 'text-slate-400'}`}>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-90 text-clinic-blue' : ''}`} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-3.5 pb-4 pt-1 border-t border-slate-100/50 space-y-3 bg-slate-50/20">
                        <div className="relative rounded-lg overflow-hidden shadow-xs h-32 bg-slate-100">
                          <img
                            src={point.image}
                            alt={point.alt}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                        </div>
                        <div className="space-y-1.5">
                          <h5 className="font-bold text-clinic-blue text-xs leading-relaxed">
                            {point.subtitle}
                          </h5>
                          <p className="text-[11px] text-gray-500 leading-relaxed">
                            {point.description}
                          </p>
                          <div className="pt-1">
                            <a 
                              href="#contact" 
                              onClick={(e) => {
                                e.preventDefault();
                                const contactSec = document.getElementById('contact');
                                if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="inline-flex items-center gap-1.5 text-[10px] font-bold text-clinic-blue hover:text-blue-800 transition-colors bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-xs"
                            >
                              <Calendar className="w-3 h-3" /> Book Customized Session
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* 2. Desktop Layout: Split Navigation Panel */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-8 lg:gap-12 items-start">
          
          {/* Left Buttons Selection (5 columns) */}
          <div className="md:col-span-5 space-y-3 relative">
            {trustPoints.map((point, idx) => {
              const IconComponent = point.icon;
              const isActive = activeIdx === idx;
              return (
                <button
                  key={point.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-5 rounded-2xl flex items-center gap-4 transition-all relative outline-none ${
                    isActive 
                      ? 'text-clinic-blue shadow-md border-r-4 border-r-clinic-yellow bg-white' 
                      : 'text-gray-600 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-glow"
                      className="absolute inset-0 bg-blue-50/40 rounded-2xl border border-blue-100/80 z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center relative z-10 transition-colors ${
                    isActive ? 'bg-clinic-blue text-white shadow-xs' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1 relative z-10 pr-2">
                    <h4 className="font-bold text-md leading-snug">{point.title}</h4>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform shrink-0 relative z-10 ${
                    isActive ? 'text-clinic-blue translate-x-1' : 'text-slate-300'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Details Display Panel (7 columns with AnimatePresence transition) */}
          <div className="md:col-span-7">
            <div className="bg-slate-50/50 rounded-3xl p-5 lg:p-7 border border-slate-100 min-h-[510px] flex flex-col justify-between shadow-xs">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6 h-full flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Visual context image with rounded border, shadow and overlay */}
                    <div className="relative rounded-2xl overflow-hidden shadow-sm h-64 lg:h-72 bg-slate-100 group">
                      <img
                        src={trustPoints[activeIdx].image}
                        alt={trustPoints[activeIdx].alt}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-clinic-blue/80 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-white/10">
                        {trustPoints[activeIdx].title}
                      </div>
                    </div>

                    {/* Bold subtitle text & description */}
                    <div className="space-y-4 px-2">
                      <h4 className="text-xl lg:text-2.5xl font-display font-extrabold text-clinic-blue leading-relaxed">
                        {trustPoints[activeIdx].subtitle}
                      </h4>
                      <div className="h-px bg-slate-200/60 w-full" />
                      <p className="text-gray-500 font-normal leading-relaxed text-base lg:text-lg">
                        {trustPoints[activeIdx].description}
                      </p>
                    </div>
                  </div>

                  {/* High quality customized bottom card with Call to Action link */}
                  <div className="pt-4 px-2">
                    <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-clinic-red flex items-center justify-center shrink-0">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-medium font-sans">Ready to consult?</p>
                          <p className="text-sm font-bold text-clinic-blue font-sans">Schedule your appointment</p>
                        </div>
                      </div>
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          const contactSec = document.getElementById('contact');
                          if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn-accent py-2.5 px-5 !text-xs text-clinic-blue flex items-center gap-2 hover:-translate-y-0.5 shadow-sm hover:shadow-md transition-all font-bold"
                      >
                        Book Now <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
