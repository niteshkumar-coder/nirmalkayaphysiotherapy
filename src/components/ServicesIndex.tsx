import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/seoData';
import SEOHead from './SEOHead';
import { getBreadcrumbSchema } from '../utils/schemaGenerator';
import { Activity, ShieldCheck, ArrowRight, HeartPulse } from 'lucide-react';

export default function ServicesIndex() {
  const fullUrl = 'https://nirmalkaya.online/services';
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nirmalkaya.online/' },
    { name: 'Services', url: fullUrl }
  ]);

  return (
    <>
      <SEOHead
        title="Physiotherapy Services in Patna | Orthopedic & Paralysis Care"
        description="We provide separate specialized physiotherapy treatments in Patna for back pain, neck pain, knee joint arthritis, sports injuries, and stroke paralysis rehabilitation."
        canonicalUrl={fullUrl}
        schemas={[breadcrumbSchema]}
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-clinic-blue/10 text-clinic-blue text-[10px] px-3 py-1 bg-blue-100 rounded-full font-black tracking-widest uppercase mb-4 inline-block">Specialized Care</span>
            <h1 className="text-3xl md:text-5xl font-display font-extrabold text-clinic-blue leading-tight mb-4">
              Advanced Clinical Physiotherapy Specialties
            </h1>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
              Dr. Kundan Kumar (BPT, MPT, MIAP) combines 20+ years of high-grade clinical practice with elite BCCI athletic-grade sports medicine to deliver Patna's top physical rehabilitation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <div 
                key={service.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-clinic-blue/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden select-none">
                    <img 
                      src={service.image} 
                      alt={service.h1}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-4 left-4 bg-clinic-yellow text-clinic-blue text-[9px] px-2.5 py-1 rounded font-black tracking-wider uppercase">
                      Specialization {index + 1}
                    </span>
                  </div>

                  <div className="p-6 md:p-8">
                    <h2 className="text-lg md:text-xl font-display font-black text-clinic-blue leading-tight mb-3 group-hover:text-clinic-red transition-colors">
                      {service.h1.replace("Expert ", "")}
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed mb-4 line-clamp-3">
                      {service.metaDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 flex gap-4 items-center border-t border-slate-55 flex-row">
                  <Link 
                    to={`/services/${service.slug}`}
                    className="text-xs font-black text-clinic-blue group-hover:text-clinic-red transition-colors uppercase tracking-widest flex items-center gap-1.5"
                  >
                    View Details <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Prompt Action banner */}
          <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm text-center max-w-4xl mx-auto">
            <div className="w-12 h-12 bg-blue-50 text-clinic-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartPulse size={24} className="animate-pulse" />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-extrabold text-clinic-blue mb-3">Looking for home care visits in Patna?</h3>
            <p className="text-slate-500 font-medium text-xs md:text-sm max-w-lg mx-auto leading-relaxed mb-6">
              If severe spinal stiffness, stroke paralysis, or surgical wounds prevent traveling, receive complete clinical-level rehabilitation right in your bed.
            </p>
            <div className="flex gap-4 items-center justify-center flex-wrap">
              <Link to="/services/home-physiotherapy-services" className="btn-primary">Learn About Home Visit</Link>
              <Link to="/book" className="btn-outline">Book Clinical Consultation</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
