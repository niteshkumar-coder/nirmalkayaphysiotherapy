import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { SERVICES_DATA } from '../data/seoData';
import SEOHead from './SEOHead';
import { getPhysioServiceSchema, getFAQSchema, getBreadcrumbSchema } from '../utils/schemaGenerator';
import { ChevronDown, ArrowRight, Phone, MessageCircle, CalendarCheck, ShieldCheck, Star } from 'lucide-react';
import Contact from './Contact';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-display font-extrabold text-clinic-blue mb-4">Service Not Found</h2>
        <p className="text-slate-500 mb-8 font-medium">The requested physiotherapy service page does not exist or has been relocated.</p>
        <Link to="/services" className="btn-primary inline-flex">View All Services</Link>
      </div>
    );
  }

  // Generate dynamic schemas
  const fullUrl = `https://nirmalkaya.online/services/${service.slug}`;
  const serviceSchema = getPhysioServiceSchema(service.h1, fullUrl, service.metaDescription);
  const faqSchema = getFAQSchema(service.faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nirmalkaya.online/' },
    { name: 'Services', url: 'https://nirmalkaya.online/services' },
    { name: service.title.split('|')[0].trim(), url: fullUrl }
  ]);

  const otherServices = SERVICES_DATA.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Dynamic SEO tags & schemas */}
      <SEOHead
        title={service.title}
        description={service.metaDescription}
        canonicalUrl={fullUrl}
        schemas={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-7/12">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-clinic-blue font-black text-xs uppercase tracking-wider mb-6 shadow-sm">
                <ShieldCheck size={14} className="text-clinic-blue animate-pulse" /> Certified Treatment
              </div>
              
              {/* SEO Optimised Headings (H1, H2, H3) */}
              <h1 className="text-3xl md:text-5xl font-display font-extrabold text-clinic-blue leading-tight mb-4">
                {service.h1}
              </h1>
              <h2 className="text-lg md:text-xl font-bold text-clinic-red mb-6 uppercase tracking-wide">
                {service.h2}
              </h2>
              <h3 className="text-base text-slate-600 font-bold leading-relaxed mb-6 font-mono border-l-4 border-clinic-yellow pl-4">
                {service.h3}
              </h3>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/book" className="btn-primary">
                  <CalendarCheck size={16} /> Book Clinic Session
                </Link>
                <a href="tel:+919899532930" className="btn-outline">
                  <Phone size={16} /> Call Dr. Kundan
                </a>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.h1}
                  className="rounded-2xl shadow-xl w-full h-[320px] md:h-[400px] object-cover border-4 border-white"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-clinic-yellow/30 rounded-full flex items-center justify-center text-clinic-blue font-bold">
                    <Star size={18} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-clinic-blue uppercase">Patient Success Rate</p>
                    <p className="text-lg font-extrabold text-clinic-red">98.2% Recovered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-clinic-blue font-black uppercase text-sm tracking-[0.2em] mb-4">Clinical Case Insights</h3>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              "{service.intro}"
            </p>
          </div>

          {/* Benefits Grid (H2 optimized) */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-clinic-blue text-center mb-4">
              6 Key Clinical Benefits of Our Approach
            </h2>
            <p className="text-slate-500 text-sm text-center font-bold uppercase tracking-widest mb-12">Evidence-Based Patient Outcomes</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-clinic-blue/20 hover:shadow transition-all">
                  <div>
                    <div className="w-10 h-10 bg-blue-50 text-clinic-blue rounded-lg flex items-center justify-center font-black text-sm mb-4 group-hover:bg-clinic-blue group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <h4 className="font-extrabold text-clinic-blue mb-2 text-base md:text-lg group-hover:text-clinic-red transition-colors">{benefit.title}</h4>
                    <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-clinic-blue mb-3">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest leading-relaxed">
              Clear Medical Answers Regarding Your Rehabilitation & Pain Relief
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:border-clinic-blue/40 transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-extrabold text-clinic-blue text-sm md:text-base leading-snug">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 shrink-0 ml-3"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-slate-100 text-slate-500 text-xs md:text-sm leading-relaxed font-medium font-sans bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking Nav Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h3 className="text-center font-display font-black text-clinic-blue text-xl mb-10 uppercase tracking-tight">Explore Other Physiotherapy Specialties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-clinic-blue/40 p-6 rounded-xl hover:shadow-md transition-all group"
              >
                <h4 className="font-extrabold text-clinic-blue mb-2 transition-colors group-hover:text-clinic-red text-sm md:text-base line-clamp-1">{item.h1.replace("Expert ", "")}</h4>
                <p className="text-slate-400 text-xs font-medium line-clamp-2 mb-4 leading-normal">{item.metaDescription}</p>
                <span className="text-clinic-blue text-xs font-black uppercase tracking-wider flex items-center gap-1 group-hover:text-clinic-red transition-colors">
                  Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Dynamic Form CTA */}
      <Contact />
    </>
  );
}
