import SEOHead from './SEOHead';
import { getBreadcrumbSchema, getLocalClinicSchema } from '../utils/schemaGenerator';
import Contact from './Contact';

export default function ContactPage() {
  const fullUrl = 'https://nirmalkaya.online/contact';
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nirmalkaya.online/' },
    { name: 'Contact', url: fullUrl }
  ]);
  const clinicSchema = getLocalClinicSchema();

  return (
    <>
      <SEOHead
        title="Contact Nirmal Kaya Physiotherapy Clinic Patna"
        description="Find our address, clinic phone numbers, and working hours in Rajendra Nagar, Patna. Fill out our contact form or chat on WhatsApp to schedule consultations."
        canonicalUrl={fullUrl}
        schemas={[breadcrumbSchema, clinicSchema]}
      />

      <section className="bg-slate-50 pt-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center max-w-3xl mx-auto mb-10">
          <span className="bg-clinic-red/15 text-clinic-red text-[10px] px-3 py-1 bg-red-100 rounded-full font-black tracking-widest uppercase mb-4 inline-block">Location & Timing</span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-clinic-blue leading-tight mb-4">
            Visit Our Clinic Center
          </h1>
          <p className="text-slate-500 font-medium text-xs md:text-sm max-w-lg mx-auto">
            Our state-of-the-art clinic is conveniently located in Rajendra Nagar, Patna. Reach us easily via call, WhatsApp, or the booking scheduler.
          </p>
        </div>

        {/* Reuse the Contact component for full directions, mapping, and active form booking */}
        <Contact />
      </section>
    </>
  );
}
