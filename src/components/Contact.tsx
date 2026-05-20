import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Calendar, CheckCircle2, User } from 'lucide-react';
import { generateAppointmentSlip } from '../utils/receiptGenerator';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'Knee Pain',
    condition: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert('Please fill in all required fields (Name, Phone, Date, Time)');
      return;
    }

    setIsSubmitting(true);
    try {
      // Save to Firebase
      try {
        await addDoc(collection(db, 'appointments'), {
          ...formData,
          createdAt: serverTimestamp()
        });
      } catch (err) {
        handleFirestoreError(err, OperationType.CREATE, 'appointments');
      }

      // Generate PDF Slip
      generateAppointmentSlip(formData);

      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        treatment: 'Knee Pain',
        condition: '',
        date: '',
        time: ''
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Failed to book appointment. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-8 items-stretch">
        
        {/* Left: Contact Info & Map */}
        <div className="w-full lg:w-7/12 flex flex-col gap-6">
          {/* ... existing content ... */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-200 flex-1">
            <h3 className="text-xs font-black text-clinic-blue mb-6 uppercase tracking-[0.2em] border-b border-slate-100 pb-4">Our Location</h3>
            
            <div className="flex flex-col md:flex-row gap-10 mb-10">
               <div className="space-y-6">
                  <a 
                    href="https://maps.app.goo.gl/DB3Hrkdqznpp9UJg8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex gap-4 items-start group hover:bg-slate-50 p-2 -ml-2 rounded-lg transition-colors"
                  >
                     <span className="text-clinic-red text-xl group-hover:scale-110 transition-transform">📍</span>
                     <div>
                        <p className="font-black text-clinic-blue text-sm uppercase tracking-wider mb-1">Clinic Address</p>
                        <p className="text-slate-600 text-sm font-bold group-hover:text-clinic-blue transition-colors underline decoration-slate-200 underline-offset-4">Road No. 11D, Rajendra Nagar, Patna-16, Bihar</p>
                     </div>
                  </a>
                  <div className="flex gap-4 items-start">
                     <span className="text-clinic-blue text-xl leading-none">📞</span>
                     <div>
                        <p className="font-black text-clinic-blue text-sm uppercase tracking-wider mb-1">Direct Call</p>
                        <p className="text-slate-900 font-black text-lg">+91 9899532930</p>
                        <p className="text-slate-900 font-black text-lg">+91 8294059645</p>
                     </div>
                  </div>
               </div>

               <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                     <span className="text-clinic-yellow text-xl">🕒</span>
                     <div>
                        <p className="font-black text-clinic-blue text-sm uppercase tracking-wider mb-1">Clinic Hours</p>
                        <p className="text-slate-600 text-sm font-bold italic">Mon - Sat: 9:00 AM - 8:00 PM</p>
                        <p className="text-clinic-red text-xs font-black mt-1">SUNDAY: APPOINTMENT ONLY</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-start">
                     <span className="text-green-500 text-xl">💬</span>
                     <div>
                        <p className="font-black text-clinic-blue text-sm uppercase tracking-wider mb-1">WhatsApp Response</p>
                        <p className="text-slate-600 text-sm font-bold">Usually replies in 5 minutes</p>
                     </div>
                  </div>
               </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/DB3Hrkdqznpp9UJg8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-64 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 font-bold overflow-hidden relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="Map View"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/20 transition-all duration-500">
                 <div className="bg-white p-4 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-8 h-8 bg-clinic-red rounded-full flex items-center justify-center animate-bounce">
                       <MapPin className="text-white" size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-clinic-blue">RAJENDRA NAGAR CENTER</span>
                      <span className="text-[10px] text-clinic-red font-bold uppercase tracking-tighter">Click to View on Maps</span>
                    </div>
                 </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right: Booking Form */}
        <div className="w-full lg:w-5/12">
          <div className="bg-clinic-red text-white p-8 md:p-12 rounded-xl shadow-lg relative overflow-hidden h-full flex flex-col">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full"></div>
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Book Appointment</h3>
              <p className="text-red-100 text-sm font-bold mb-8 uppercase tracking-widest italic leading-tight">Fast-track your recovery journey</p>
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <CheckCircle2 className="text-clinic-yellow mb-4" size={64} />
                    <h4 className="text-xl font-black uppercase mb-2">Visit Scheduled!</h4>
                    <p className="text-red-100 font-bold mb-6">Your appointment slip has been downloaded. We'll see you soon!</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-white font-black uppercase text-xs tracking-widest underline underline-offset-4"
                    >
                      Book Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4" 
                    onSubmit={handleSubmit}
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-red-100 opacity-80 pl-1 italic flex items-center gap-2">
                        <User size={10} /> Patient Name
                      </span>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter full name" 
                        className="w-full bg-white/20 border border-white/30 rounded px-4 py-3 text-sm placeholder:text-white/50 outline-none focus:bg-white/30 transition-all font-bold"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-red-100 opacity-80 pl-1 italic flex items-center gap-2">
                        <Phone size={10} /> Phone Number
                      </span>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91" 
                        className="w-full bg-white/20 border border-white/30 rounded px-4 py-3 text-sm placeholder:text-white/50 outline-none focus:bg-white/30 transition-all font-bold"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-red-100 opacity-80 pl-1 italic flex items-center gap-2">
                          <Calendar size={10} /> Pick Date
                        </span>
                        <input 
                          required
                          type="date" 
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="w-full bg-white/20 border border-white/30 rounded px-4 py-3 text-sm outline-none focus:bg-white/30 transition-all font-bold"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-red-100 opacity-80 pl-1 italic flex items-center gap-2">
                          <Clock size={10} /> Pick Time
                        </span>
                        <input 
                          required
                          type="time" 
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          className="w-full bg-white/20 border border-white/30 rounded px-4 py-3 text-sm outline-none focus:bg-white/30 transition-all font-bold"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-red-100 opacity-80 pl-1 italic">Treatment Type</span>
                      <select 
                        value={formData.treatment}
                        onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                        className="w-full bg-white/20 border border-white/30 rounded px-4 py-3 text-sm outline-none focus:bg-white/30 transition-all font-bold appearance-none"
                      >
                        <option className="text-clinic-blue" value="Knee Pain">Knee Pain</option>
                        <option className="text-clinic-blue" value="Back/Spine Therapy">Back/Spine Therapy</option>
                        <option className="text-clinic-blue" value="Sports Injury">Sports Injury</option>
                        <option className="text-clinic-blue" value="Paralysis Rehab">Paralysis Rehab</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-red-100 opacity-80 pl-1 italic">Describe Condition</span>
                      <textarea 
                        value={formData.condition}
                        onChange={(e) => setFormData({...formData, condition: e.target.value})}
                        placeholder="Symptom details..." 
                        rows={2}
                        className="w-full bg-white/20 border border-white/30 rounded px-4 py-3 text-sm placeholder:text-white/50 outline-none focus:bg-white/30 transition-all resize-none font-bold"
                      ></textarea>
                    </div>
                    <button 
                      disabled={isSubmitting}
                      type="submit" 
                      className="w-full bg-clinic-yellow text-clinic-blue font-black py-4 rounded shadow-xl hover:shadow-2xl hover:translate-y-[-2px] transition-all uppercase text-sm tracking-widest disabled:opacity-50 disabled:translate-y-0"
                    >
                      {isSubmitting ? 'Processing...' : 'Schedule Visit'}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between opacity-80">
               <div className="text-[10px] font-bold uppercase tracking-widest uppercase italic">
                  Emergency call 24/7
               </div>
               <a href="tel:+919899532930" className="text-sm font-black text-white hover:text-clinic-yellow transition-colors underline decoration-clinic-yellow underline-offset-4">+91 9899532930</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

