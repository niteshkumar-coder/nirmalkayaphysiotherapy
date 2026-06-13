import { motion } from 'motion/react';
import SEOHead from './SEOHead';
import { getBreadcrumbSchema, getLocalClinicSchema } from '../utils/schemaGenerator';
import { Award, GraduationCap, Briefcase, UserCheck, ShieldCheck, Mail, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const fullUrl = 'https://nirmalkaya.online/about';
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nirmalkaya.online/' },
    { name: 'About', url: fullUrl }
  ]);
  const clinicSchema = getLocalClinicSchema();

  const credentials = [
    { icon: <GraduationCap />, title: 'Advanced Qualification', desc: 'BPT, MPT, MIAP (Master of Physiotherapy specializing in orthopedic rehabilitation)' },
    { icon: <Briefcase />, title: 'Unmatched Clinical Experience', desc: 'Over 20+ years of active healthcare service across prestigious Delhi and Patna institutes.' },
    { icon: <Award />, title: 'Senior BCCI Sports Physio', desc: 'Directly appointed Senior Physiotherapist for the BCCI Bihar Senior Cricket Team.' },
    { icon: <UserCheck />, title: 'Clinical Specialties', desc: 'Expert in non-surgical spinal decompression, manual adjustments, neural flossing and neuro rehab.' },
  ];

  return (
    <>
      <SEOHead
        title="About Dr. Kundan Kumar (BCCI Physio) | Nirmal Kaya Patna"
        description="Learn about Dr. Kundan Kumar (BPT, MPT, MIAP), the Senior BCCI Bihar Cricket Team Physiotherapist. Discover his 20+ years of orthopedic recovery expertise."
        canonicalUrl={fullUrl}
        schemas={[breadcrumbSchema, clinicSchema]}
      />

      {/* Hero Header Banner */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-5/12">
              <div className="relative">
                <img 
                  src="https://i.ibb.co/5WsBF9S3/593d8ed7-0af1-4760-ab8f-84dd0608d1d8.png" 
                  alt="Dr. Kundan Kumar - BCCI Bihar Senior Physio" 
                  className="rounded-3xl shadow-xl w-full h-[450px] md:h-[550px] object-cover object-top border-4 border-white"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-clinic-blue text-white p-6 rounded-2xl shadow-lg border border-slate-700/20 select-none">
                  <p className="text-4xl font-extrabold font-display">20+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mt-1">Years Clinical Praxis</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-clinic-blue font-extrabold text-xs md:text-sm mb-6 shadow-sm hover:scale-105 transition-transform duration-300">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-clinic-blue"></span>
                </span>
                🏏 Official Senior Physiotherapist for BCCI Bihar Cricket Team
              </div>
              
              <h1 className="text-3xl md:text-5xl font-display font-extrabold text-clinic-blue leading-tight mb-4">
                About Dr. Kundan Kumar
              </h1>
              <h2 className="text-sm md:text-base text-clinic-red font-black uppercase tracking-widest mb-6">
                BPT, MPT, MIAP — Acclaimed Orthopedic & Sports Medicine Expert
              </h2>
              
              <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed font-sans font-medium">
                Dr. Kundan Kumar is a nationally acclaimed physical rehabilitation leader who brings elite sports-grade medicine directly to the residents of Patna. As the <strong className="text-clinic-blue font-extrabold underline decoration-clinic-yellow decoration-3">Senior Physiotherapist for the BCCI Bihar Cricket Team</strong>, he is trusted by peak performing cricket athletes to restore joint angles, treat direct muscular trauma, and design conditioning pathways.
              </p>
              <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed font-sans font-medium">
                Before establishing the modern clinical center of <strong className="text-clinic-blue font-extrabold">Nirmal Kaya in Rajendra Nagar, Patna</strong>, Dr. Kumar practiced alongside premium orthopedic surgeons and neuro-specialists in top-tier facilities of Delhi. He specializes in clinical manual therapy, providing chiropractic adjustments, slip disc decompressions, and nerve-flossing sequences to cure conditions without surgery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {credentials.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 border border-slate-200 hover:border-clinic-blue/25 rounded-2xl transition-colors bg-white shadow-sm">
                    <div className="w-12 h-12 bg-blue-50 text-clinic-blue rounded-xl flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-clinic-blue text-sm md:text-base">{item.title}</h3>
                      <p className="text-xs text-slate-500 font-medium leading-normal mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Clinical Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-12 h-12 bg-clinic-yellow/30 rounded-full flex items-center justify-center text-clinic-blue mx-auto mb-6">
            <Sparkles size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-clinic-blue mb-4">Our Clinic Philosophy</h2>
          <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed italic">
            "Pain is highly complex and mechanical. At Nirmal Kaya, we align ourselves, first and foremost, with your physiological blueprint. We don't just supply superficial heat or mask symptoms. We identify structural core weakness, release restricted nerve passages manual-first, and equip patients with the orthopedic conditioning needed to lead independent, slouch-free, active lifestyles."
          </p>
          <div className="flex gap-4 items-center justify-center flex-wrap mt-10">
            <Link to="/services" className="btn-primary">Explore All 12 Services</Link>
            <Link to="/book" className="btn-outline">Schedule Consultation Slip</Link>
          </div>
        </div>
      </section>
    </>
  );
}
