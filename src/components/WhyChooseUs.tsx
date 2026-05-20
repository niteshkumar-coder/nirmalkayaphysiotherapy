import { motion } from 'motion/react';
import { 
  Users, Target, Zap, 
  Stethoscope, ShieldCheck, Heart 
} from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    { title: 'Experienced Physiotherapist', desc: 'Managed by Dr. Kundan Kumar with 20+ years of high-level clinical experience.', icon: <Users /> },
    { title: 'Personalized Treatment', desc: 'No one-size-fits-all. Every exercise and therapy is specific to your body.', icon: <Target /> },
    { title: 'Modern Rehab Approach', desc: 'We combine traditional manual therapy with advanced exercise science.', icon: <Zap /> },
    { title: 'Patient-Friendly Care', desc: 'A comfortable, compassionate environment focused on your well-being.', icon: <Heart /> },
    { title: 'Proven Results', desc: 'Over 5000+ patients successfully treated for chronic and acute conditions.', icon: <ShieldCheck /> },
    { title: 'Sports Injury Expertise', desc: 'Specialized recovery protocols for athletes and sports professionals.', icon: <Stethoscope /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-clinic-red font-bold uppercase tracking-widest text-sm mb-4">The Nirmal Kaya Advantage</p>
          <h2 className="section-title text-clinic-blue">Why Trust Our Clinic?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-gray-100 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50 hover:border-blue-200 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-clinic-blue flex items-center justify-center mb-6 group-hover:bg-clinic-blue group-hover:text-white transition-colors">
                {point.icon}
              </div>
              <h4 className="text-xl font-bold text-clinic-blue mb-3">{point.title}</h4>
              <p className="text-gray-500 leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
