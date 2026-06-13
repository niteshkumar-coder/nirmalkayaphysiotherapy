import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SEOHead from './SEOHead';
import { getBreadcrumbSchema, getFAQSchema } from '../utils/schemaGenerator';
import { ChevronDown, MessageCircle, HelpCircle, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const fullUrl = 'https://nirmalkaya.online/faq';

  const generalFaqs = [
    {
      question: 'What is physiotherapy and when should I see a therapist?',
      answer: 'Physiotherapy is an evidence-based medical science focused on restoring movement, muscle strength, and managing joints. You should consult a therapist if you experience chronic musculoskeletal pain, spinal stiffness, neurological restrictions, or are recovering from orthopedic surgery or fractures.'
    },
    {
      question: 'How many physiotherapy sessions are typically required?',
      answer: 'Acute muscular strains show major relief within 3 to 5 daily sessions. Chronic disorders like slip disc sciatica or joint arthritis can require 10 to 15 sessions of manual alignment and electrotherapy for complete physiological stability.'
    },
    {
      question: 'Can physiotherapy reduce pain permanently?',
      answer: 'Yes. Unlike medications that block pain signals in the brain temporarily, clinical physical therapy corrects the actual physical compression of nerve roots, releases muscle spasms, and builds core strength to prevent future overloading.'
    },
    {
      question: 'Do you provide home physiotherapy services in Patna?',
      answer: 'Yes. Nirmal Kaya offers advanced portable home-care doctor visits in Patna for senior citizens or patients suffering from severe spinal stiffness, stroke paralysis, or surgical wounds, ensuring professional rehabilitation direct at your bedside.'
    },
    {
      question: 'What conditions can Nirmal Kaya Physiotherapy Clinic treat?',
      answer: 'Under Dr. Kundan Kumar, our clinic specializes in Lower Back Pain, Cervical Spondylosis, Knee Osteoarthritis, Frozen Shoulder, Sports Injuries (ACL, sprains), Stroke Paralysis (Hemiplegia) Recovery, Post-Surgical rehab, Sciatica, and Posture imbalances.'
    },
    {
      question: 'Do I need an orthopedic surgeon referral to visit your clinic?',
      answer: 'No referral is required. Under Indian Medical codes, you can directly consult a licensed physical therapist (BPT, MPT, MIAP) like Dr. Kundan Kumar for primary clinical assessment and rehab management.'
    },
    {
      question: 'Does electrotherapy carry major side-effects?',
      answer: 'Not at all. Standard clinic modalities including Interferential Therapy (IFT), TENS, shortwave diathermy, and medical ultrasound are completely non-invasive, painless, and highly safe.'
    },
    {
      question: 'What is manual therapy and how does it help?',
      answer: 'Manual therapy is a highly specialized hands-on physical therapy. Using osteopathic joint mobilization, chiropractic alignments, and deep myofascial release, we structurally release locked facet joints and relax rigid muscle bands.'
    },
    {
      question: 'Are clinic receipts accepted in medical insurance claims?',
      answer: 'Yes. We issue full computerized medical diagnostic bills, clinical attendance checklists, and payment receipts carrying medical registration numbers for quick corporate or health insurance claims.'
    },
    {
      question: 'How do I book a counseling and checkup session?',
      answer: 'You can secure your clinical slot directly using our online scheduler on our book page or call directly at +91 9899532930.'
    }
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nirmalkaya.online/' },
    { name: 'FAQ', url: fullUrl }
  ]);
  const faqSchema = getFAQSchema(generalFaqs);

  return (
    <>
      <SEOHead
        title="Physiotherapy FAQs Patna | Clinic Questions & Answers"
        description="Have questions about back pain rehabilitation, session fees, home visits, or non-surgical slip disc treatments in Patna? Read expert answers by Dr. Kundan Kumar."
        canonicalUrl={fullUrl}
        schemas={[breadcrumbSchema, faqSchema]}
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16">
            <span className="bg-clinic-blue/10 text-clinic-blue text-[10px] px-3 py-1 bg-blue-100 rounded-full font-black tracking-widest uppercase mb-4 inline-block">Support portal</span>
            <h1 className="text-3xl md:text-5xl font-display font-extrabold text-clinic-blue leading-tight mb-4">
              Frequently Asked Questions (FAQ)
            </h1>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
              Find transparent, clinically accurate information about treatments, clinical durations, and home visit guidelines.
            </p>
          </div>

          <div className="space-y-4 mb-16">
            {generalFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-clinic-blue/40 transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-extrabold text-clinic-blue text-sm md:text-base leading-snug flex items-center gap-3">
                    <HelpCircle size={18} className="text-clinic-blue hover:text-clinic-red shrink-0" />
                    {faq.question}
                  </span>
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
                      <div className="px-6 pb-6 pt-1 border-t border-slate-100 text-slate-500 text-xs md:text-sm leading-relaxed font-sans font-medium bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Banner Help */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl text-center shadow-sm max-w-2xl mx-auto">
            <h3 className="font-display font-black text-clinic-blue text-lg mb-2">Have specific treatment questions?</h3>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6">Our doctor is ready to help you coordinate recovery</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/book" className="btn-primary">Book Consultation</Link>
              <a href="tel:+919899532930" className="btn-outline">Call +91 9899532930</a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
