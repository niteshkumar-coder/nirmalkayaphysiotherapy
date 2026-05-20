import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Treatments() {
  const conditions = [
    { title: 'Joint Pain (Arthritis)', category: 'Orthopedic' },
    { title: 'Muscle Pain & Strains', category: 'General' },
    { title: 'Spine-related Pain (Disc)', category: 'Neurological' },
    { title: 'Sports Injuries (ACL/MCL)', category: 'Sports' },
    { title: 'Post-Fracture Stiffness', category: 'Post-Op' },
    { title: 'Neuromuscular Weakness', category: 'Neurological' },
    { title: 'Mobility & Walking Issues', category: 'Geriatric' },
    { title: 'Facial Paralysis (Bell’s Palsy)', category: 'Neurological' },
    { title: 'Post-Stroke Recovery', category: 'Neurological' },
    { title: 'Frozen Shoulder', category: 'Orthopedic' },
    { title: 'Cervical / Lumbar Spondylosis', category: 'Orthopedic' },
    { title: 'Tingling & Numbness', category: 'Neurological' },
  ];

  return (
    <section id="treatments" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-clinic-blue rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-clinic-red/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-clinic-yellow font-bold uppercase tracking-widest text-sm mb-4">Patient-Focused Care</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Conditions We Treat</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                We use a combination of manual therapy, exercise therapy, and modern rehabilitation techniques to treat a wide variety of physical constraints.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-white">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-clinic-yellow" size={24} />
                   </div>
                   <p className="font-semibold italic">Personalized 1-on-1 assessment for every patient.</p>
                </div>
                <div className="flex items-center gap-4 text-white">
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-clinic-yellow" size={24} />
                   </div>
                   <p className="font-semibold italic">Holistic approach to pain management & mobility.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {conditions.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-clinic-yellow shrink-0" />
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-[10px] text-blue-200 uppercase tracking-tighter font-bold">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
