import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { name: 'Amit Singh', role: 'Sports Professional', text: 'I had severe ACL injury. Dr. Kundan help me recover in 3 months. His knowledge about sports injury is amazing.', rating: 5 },
    { name: 'Mrs. Sharma', role: 'Home Maker', text: 'Persistent knee pain was making it hard for me to walk. After 10 sessions here, I can walk comfortably again.', rating: 5 },
    { name: 'Rahul V.', role: 'IT Professional', text: 'Excellent cervical treatment. Very patient-friendly and professional behavior. Highly recommend for any pain relief.', rating: 4 },
  ];

  return (
    <section className="py-24 bg-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
        <Quote className="absolute top-0 right-0 text-white/5 w-64 h-64 -translate-y-1/4" />
        
        <div className="text-center mb-16 relative z-10">
          <p className="text-clinic-yellow font-bold uppercase tracking-widest text-sm mb-4">Patient Success Stories</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">What Our Patients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < review.rating ? 'fill-clinic-yellow text-clinic-yellow' : 'text-white/20'} 
                  />
                ))}
              </div>
              <p className="text-blue-50 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-clinic-yellow/20 flex items-center justify-center font-bold text-clinic-yellow">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-xs text-blue-300 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
