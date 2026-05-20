import { motion } from 'motion/react';
import { Award, GraduationCap, Briefcase, UserCheck } from 'lucide-react';

export default function About() {
  const credentials = [
    { icon: <GraduationCap />, title: 'Qualification', desc: 'BPT, MPT, MIAP (Master of Physiotherapy)' },
    { icon: <Briefcase />, title: 'Experience', desc: '20 Years of clinical practice in Delhi and Patna' },
    { icon: <Award />, title: 'Sports Association', desc: 'Senior Physiotherapist, BCCI Bihar Cricket Team' },
    { icon: <UserCheck />, title: 'Specialization', desc: 'Orthopedic Rehab, Sports Injury & Pain Management' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12"
          >
            <div className="relative">
               <img 
                 src="https://i.ibb.co/5WsBF9S3/593d8ed7-0af1-4760-ab8f-84dd0608d1d8.png" 
                 alt="Dr. Kundan Kumar" 
                 className="rounded-3xl shadow-xl w-full h-[500px] object-cover object-top"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute -bottom-6 -right-6 bg-clinic-blue text-white p-6 rounded-2xl shadow-lg">
                  <p className="text-3xl font-bold">20+</p>
                  <p className="text-sm font-semibold uppercase tracking-wider opacity-80">Years Experience</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-clinic-blue font-extrabold text-xs md:text-sm mb-4 shadow-sm hover:scale-105 transition-transform duration-300">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-clinic-blue"></span>
              </span>
              🏏 Senior Physiotherapist for BCCI Bihar Cricket Team
            </div>
            <h2 className="section-title">Meet Dr. Kundan Kumar</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Dr. Kundan Kumar is a highly skilled, compassionate, and acclaimed physiotherapist who serves as the <strong className="text-clinic-blue font-black underline decoration-clinic-yellow decoration-3">Senior Physiotherapist for the BCCI Bihar Cricket Team</strong>. He matches elite athletic-grade sports medicine with deep clinical empathy, bringing state-of-the-art rehabilitation techniques directly to everyday patients in Patna.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              With a Master&apos;s in Physiotherapy (MPT) and over two decades of experience spanning premier Delhi hospitals and prestigious sports organizations, Dr. Kumar is uniquely equipped to treat a wide array of physical conditions—from intense sports injuries to complex chronic joint disorders and neurological recovery.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentials.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 border border-gray-100 rounded-2xl hover:border-blue-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-50 text-clinic-blue rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-clinic-blue">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
