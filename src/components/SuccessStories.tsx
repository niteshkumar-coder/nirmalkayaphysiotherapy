import SEOHead from './SEOHead';
import { getBreadcrumbSchema, getReviewSchema } from '../utils/schemaGenerator';
import { Star, ShieldCheck, UserCheck, Heart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SuccessStories() {
  const fullUrl = 'https://nirmalkaya.online/success-stories';

  const reviews = [
    {
      author: 'Amit Kumar Singh',
      ratingValue: 5,
      reviewBody: 'Visited Dr. Kundan for critical sciatic radiation in my leg. I was unable to sit or stand for 10 minutes. Within 8 sessions of spine decompressions and alignment therapy, my radiating pain completely vanished. Deeply thankful to Nirmal Kaya!',
      datePublished: '2026-05-18',
      recoveryType: 'Sciatica Release'
    },
    {
      author: 'Sunita Devi',
      ratingValue: 5,
      reviewBody: 'My mother was suffering from Grade-3 Knee Osteoarthritis. Orthopedics advised knee surgery. Dr. Kundan started targeted quad strengthening and cartilage unloading therapies. She now walks independently and climbs stairs without pain.',
      datePublished: '2026-04-20',
      recoveryType: 'Knee Osteoarthritis'
    },
    {
      author: 'Vikash Ranjan Pradhan',
      ratingValue: 5,
      reviewBody: 'Spectacular recovery post ACL reconstruction surgery. Being a cricket club batsman in Patna, I wanted elite-grade rehabilitation. Dr. Kundan (BCCI Bihar Physio) calibrated my progress perfectly. Walked back onto the crease in 12 weeks!',
      datePublished: '2026-03-12',
      recoveryType: 'Post-Op ACL Rehab'
    },
    {
      author: 'Rajeshwar Mahto',
      ratingValue: 5,
      reviewBody: 'My father suffered a hemorrhagic stroke resulting in paralyzed left limbs. Nirmal Kaya home visit physiotherapists worked tirelessly with NDT and gait rehabilitation. He can sit, stand, and now walks inside the house with cane help.',
      datePublished: '2026-02-05',
      recoveryType: 'Paralysis Stroke Recovery'
    },
    {
      author: 'Nisha Sahu',
      ratingValue: 5,
      reviewBody: 'Had severe cervical spondylosis pain combined with dizziness and arm numbness. Dr. Kundan\'s manual neck traction sequence relieved the arm pain on the first session itself. Posture correction stretches cured the stiffness permanently.',
      datePublished: '2025-12-15',
      recoveryType: 'Cervical Spondylosis'
    }
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nirmalkaya.online/' },
    { name: 'Success Stories', url: fullUrl }
  ]);
  const reviewSchema = getReviewSchema(reviews);

  return (
    <>
      <SEOHead
        title="Patient Success Stories | Physiotherapy Reviews Patna"
        description="Read detailed orthopedic recovery stories, slip disc sciatica relief, stroke paralysis rehabilitation, or athletic ACL recovery reviews in Rajendra Nagar, Patna."
        canonicalUrl={fullUrl}
        schemas={[breadcrumbSchema, reviewSchema]}
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-clinic-yellow/20 text-clinic-blue text-[10px] px-3 py-1 rounded-full font-black tracking-widest uppercase mb-4 inline-block">Clinical Proof</span>
            <h1 className="text-3xl md:text-5xl font-display font-extrabold text-clinic-blue leading-tight mb-4">
              Our Patient Success Stories & Case Reviews
            </h1>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
              We live for functional recoveries. Read firsthand patient testimonials detailing how our expert orthopedic alignments and neurological care restored their mobility.
            </p>
          </div>

          {/* Aggregated ratings overview */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 mb-16 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-xs font-black text-clinic-blue uppercase tracking-widest mb-1 italic">Google Maps Rating</p>
              <div className="flex items-center gap-3">
                <span className="text-4xl md:text-5xl font-extrabold text-slate-950 font-display">4.9</span>
                <div>
                  <div className="flex gap-1 text-clinic-yellow animate-pulse">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-xs font-semibold text-slate-400 mt-1">Based on 140+ Google Patient Reviews</p>
                </div>
              </div>
            </div>

            <div className="h-px w-full md:h-12 md:w-px bg-slate-200" />

            <div className="flex gap-3 items-center text-slate-600 font-semibold text-xs md:text-sm pl-4 pr-4">
              <ShieldCheck className="text-clinic-blue shrink-0" size={32} />
              <p className="leading-snug max-w-sm">Every testimonial listed matches registered medical clinic attendance and is clinically authenticated.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reviews.map((rev, index) => (
              <div 
                key={index} 
                className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-clinic-blue/20 hover:shadow transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="bg-clinic-blue/10 text-clinic-blue text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-wider">
                      {rev.recoveryType}
                    </span>
                    <div className="flex gap-0.5 text-clinic-yellow">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-medium font-sans italic">
                    "{rev.reviewBody}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 flex-row">
                  <div className="w-10 h-10 bg-slate-100/80 text-clinic-blue rounded-full flex items-center justify-center shrink-0">
                    <User size={18} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-clinic-blue text-sm md:text-base">{rev.author}</h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Verified Patient • {rev.datePublished}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Book bottom */}
          <div className="mt-16 text-center">
            <h3 className="font-display font-extrabold text-clinic-blue text-xl mb-4">Ready to write your own recovery story?</h3>
            <Link to="/book" className="btn-primary inline-flex">Schedule Consultation Slip</Link>
          </div>

        </div>
      </section>
    </>
  );
}
