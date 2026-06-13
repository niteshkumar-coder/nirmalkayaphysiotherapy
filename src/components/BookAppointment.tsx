import React, { useState } from 'react';
import SEOHead from './SEOHead';
import { getBreadcrumbSchema } from '../utils/schemaGenerator';
import { Calendar, Clock, User, Phone, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { generateAppointmentSlip } from '../utils/receiptGenerator';
import { Link } from 'react-router-dom';

export default function BookAppointment() {
  const fullUrl = 'https://nirmalkaya.online/book';
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nirmalkaya.online/' },
    { name: 'Book', url: fullUrl }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'Knee Pain Physiotherapy',
    condition: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert('Please fill in Name, Phone, Date, and Time slots.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Save directly to raw firebase collection (validated by security rules)
      try {
        await addDoc(collection(db, 'appointments'), {
          ...formData,
          createdAt: serverTimestamp()
        });
      } catch (err) {
        handleFirestoreError(err, OperationType.CREATE, 'appointments');
      }

      // Generate medical slip PDF
      generateAppointmentSlip(formData);

      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        treatment: 'Knee Pain Physiotherapy',
        condition: '',
        date: '',
        time: ''
      });
    } catch (e: any) {
      console.error(e);
      alert('Encountered an issue placing scheduling record. Contact clinic directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Schedule Clinic Appointment | Nirmal Kaya Patna"
        description="Schedule a physical therapy checkup or sports medicine consultation with Dr. Kundan Kumar in Patna. Instant medical slip downloads and secure slot locking."
        canonicalUrl={fullUrl}
        schemas={[breadcrumbSchema]}
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="flex flex-col lg:flex-row gap-16 items-start max-w-6xl mx-auto">
            
            {/* Left Info Column */}
            <div className="w-full lg:w-5/12 text-center lg:text-left">
              <span className="bg-clinic-blue/10 text-clinic-blue text-[10px] px-3 py-1 bg-blue-100 rounded-full font-black tracking-widest uppercase mb-4 inline-block">Fast-Track Healing</span>
              <h1 className="text-3xl md:text-5xl font-display font-extrabold text-clinic-blue leading-tight mb-4">
                Schedule Your Recovery Session
              </h1>
              <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed mb-10">
                Secure your consultation with BCCI Bihar Senior Physiotherapist Dr. Kundan Kumar. Lock your clinical assessment, capture your preferred timing, and receive a computerized recovery slip.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start text-left bg-white border border-slate-200 p-5 rounded-2xl">
                  <div className="w-10 h-10 bg-blue-50 text-clinic-blue rounded-full flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-clinic-blue text-sm md:text-base">Registered Health Practice</h3>
                    <p className="text-xs text-slate-500 font-medium leading-normal mt-1">Conforming to elite Indian Association of Physiotherapists (IAP) parameters.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start text-left bg-white border border-slate-200 p-5 rounded-2xl">
                  <div className="w-10 h-10 bg-red-50 text-clinic-red rounded-full flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-clinic-blue text-sm md:text-base">Clinic Operations</h3>
                    <p className="text-xs text-slate-500 font-medium leading-normal mt-1">Open Mon - Sat: 9:00 AM to 8:00 PM. Sunday sessions are reserved exclusively for active emergency bookings.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="w-full lg:w-7/12">
              <div className="bg-clinic-red rounded-2xl text-white p-8 md:p-12 shadow-xl relative overflow-hidden">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full" />
                
                {isSuccess ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="text-clinic-yellow mx-auto mb-6" size={64} />
                    <h2 className="text-2xl font-black uppercase mb-3">Appointment Booked!</h2>
                    <p className="text-red-100 font-bold mb-8 max-w-sm mx-auto text-sm md:text-base leading-normal">
                      Your scheduled consultation slip has been generated and downloaded. Present this on your visit!
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-white hover:text-clinic-yellow font-black uppercase text-xs tracking-widest underline underline-offset-4"
                    >
                      Schedule Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2 border-b border-white/10 pb-4">Clinical Booking Form</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-red-100 pl-1 italic flex items-center gap-1.5">
                          <User size={10} /> Full Name
                        </label>
                        <input 
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your complete name"
                          className="w-full bg-white/20 border border-white/30 rounded px-4 py-3 text-sm placeholder:text-white/50 outline-none focus:bg-white/30 transition-all font-bold"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-red-100 pl-1 italic flex items-center gap-1.5">
                          <Phone size={10} /> Mobile Phone
                        </label>
                        <input 
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 Mobile number"
                          className="w-full bg-white/20 border border-white/30 rounded px-4 py-3 text-sm placeholder:text-white/50 outline-none focus:bg-white/30 transition-all font-bold"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-red-100 pl-1 italic flex items-center gap-1.5">
                          <Calendar size={10} /> Preferred Date
                        </label>
                        <input 
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-white/20 border border-white/30 rounded px-4 py-3 text-sm outline-none focus:bg-white/30 transition-all font-bold"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase tracking-widest text-red-100 pl-1 italic flex items-center gap-1.5">
                          <Clock size={10} /> Preferred Time
                        </label>
                        <input 
                          type="time"
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full bg-white/20 border border-white/30 rounded px-4 py-3 text-sm outline-none focus:bg-white/30 transition-all font-bold"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-red-100 pl-1 italic">Treatment Category</label>
                      <select 
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full bg-white/20 border border-white/30 rounded px-4 py-3 text-sm outline-none focus:bg-white/30 transition-all font-bold appearance-none text-white cursor-pointer"
                      >
                        <option className="text-clinic-blue" value="Back Pain Physiotherapy">Back Pain Physiotherapy</option>
                        <option className="text-clinic-blue" value="Neck Pain Treatment">Neck Pain Treatment</option>
                        <option className="text-clinic-blue" value="Knee Pain Physiotherapy">Knee Pain Physiotherapy</option>
                        <option className="text-clinic-blue" value="Shoulder Pain Treatment">Shoulder Pain Treatment</option>
                        <option className="text-clinic-blue" value="Sports Injury Rehabilitation">Sports Injury Rehabilitation</option>
                        <option className="text-clinic-blue" value="Post Surgery Rehabilitation">Post Surgery Rehabilitation</option>
                        <option className="text-clinic-blue" value="Stroke Rehabilitation">Stroke Rehabilitation</option>
                        <option className="text-clinic-blue" value="Sciatica Treatment">Sciatica Treatment</option>
                        <option className="text-clinic-blue" value="Arthritis Physiotherapy">Arthritis Physiotherapy</option>
                        <option className="text-clinic-blue" value="Home Physiotherapy Services">Home Physiotherapy Services</option>
                        <option className="text-clinic-blue" value="Manual Therapy">Manual Therapy</option>
                        <option className="text-clinic-blue" value="Posture Correction Therapy">Posture Correction Therapy</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-red-100 pl-1 italic">Diagnostic/Symptom Notes</label>
                      <textarea 
                        value={formData.condition}
                        onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                        placeholder="Briefly decribe pain severity, duration, or diagnostic histories..."
                        rows={3}
                        className="w-full bg-white/20 border border-white/30 rounded px-4 py-3 text-sm placeholder:text-white/50 outline-none focus:bg-white/30 transition-all resize-none font-bold"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-clinic-yellow text-clinic-blue font-black py-4 rounded shadow-xl hover:shadow-2xl hover:translate-y-[-2px] transition-all uppercase text-xs md:text-sm tracking-widest disabled:opacity-50 disabled:translate-y-0"
                    >
                      {isSubmitting ? 'Confirming...' : 'Lock Slot & Get Receipt'}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
