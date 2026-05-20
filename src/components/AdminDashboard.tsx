import React, { useState, useEffect } from 'react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { Lock, FileText, Calendar, Clock, User, Phone, LogOut, Search, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Appointment {
  id: string;
  name: string;
  phone: string;
  treatment: string;
  condition: string;
  date: string;
  time: string;
  createdAt: any;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '@Nirmalkaya@') {
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
    } else {
      alert('Incorrect Password');
    }
  };

  useEffect(() => {
    const authStatus = localStorage.getItem('admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;

    const q = query(collection(db, 'appointments'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Appointment[];
      setAppointments(docs);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'appointments');
    });

    return () => unsubscribe();
  }, [isAuthenticated]);

  const filteredAppointments = appointments.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.phone.includes(searchTerm) ||
    app.treatment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
        >
          <div className="w-16 h-16 bg-clinic-red rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="text-white" size={32} />
          </div>
          <h2 className="text-2xl font-black text-clinic-blue text-center mb-2">Admin Access</h2>
          <p className="text-slate-500 text-center text-sm mb-8">Enter password to access appointment dashboard</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border-2 border-slate-100 rounded-xl px-4 py-4 text-center text-xl tracking-widest focus:border-clinic-red outline-none transition-all"
            />
            <button className="w-full bg-clinic-blue text-white font-black py-4 rounded-xl shadow-lg hover:shadow-xl transition-all uppercase tracking-widest">
              Login to Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-clinic-blue text-white py-6 px-4 md:px-8 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-3 rounded-xl border border-white/20">
              <FileText className="text-clinic-yellow" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-black uppercase tracking-tight">Admin Dashboard</h1>
              <p className="text-xs text-white/60 font-bold uppercase tracking-widest">Live Appointments Tracking</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                localStorage.removeItem('admin_auth');
                setIsAuthenticated(false);
              }}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-black transition-all border border-white/20"
            >
              <LogOut size={16} />
              SIGN OUT
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 md:px-8">
        {/* Stats & Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Total Bookings</p>
            <p className="text-4xl font-black text-clinic-blue">{appointments.length}</p>
          </div>
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search patient, phone or treatment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-clinic-blue transition-all font-bold"
              />
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <h3 className="font-black text-clinic-blue uppercase text-sm tracking-widest">Appointment List</h3>
            <span className="bg-clinic-yellow text-clinic-blue px-3 py-1 rounded-full text-[10px] font-black">{filteredAppointments.length} Results</span>
          </div>

          {loading ? (
            <div className="p-20 text-center">
              <div className="animate-spin w-10 h-10 border-4 border-clinic-blue border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-slate-400 font-bold">Synchronizing with live records...</p>
            </div>
          ) : filteredAppointments.length === 0 ? (
            <div className="p-20 text-center">
              <Search className="text-slate-200 mx-auto mb-4" size={48} />
              <p className="text-slate-400 font-bold">No appointments found matching your search.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {filteredAppointments.map((app) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={app.id} 
                  className="p-6 hover:bg-slate-50 transition-colors group"
                >
                  <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-100 text-clinic-blue rounded-xl flex items-center justify-center shrink-0 group-hover:bg-clinic-blue group-hover:text-white transition-colors">
                        <User size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-clinic-blue uppercase leading-tight">{app.name}</h4>
                        <p className="text-slate-500 font-bold text-sm flex items-center gap-2">
                          <Phone size={14} className="text-clinic-red" /> {app.phone}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 flex-1 max-w-3xl">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Treatment</p>
                        <p className="text-sm font-black text-clinic-blue bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">{app.treatment}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Preferred Date</p>
                        <p className="text-sm font-bold text-slate-600 flex items-center gap-2"><Calendar size={14} className="text-clinic-yellow" /> {app.date}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Preferred Time</p>
                        <p className="text-sm font-bold text-slate-600 flex items-center gap-2"><Clock size={14} className="text-clinic-yellow" /> {app.time}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Booked On</p>
                        <p className="text-[10px] font-bold text-slate-400">{app.createdAt?.toDate().toLocaleString() || 'N/A'}</p>
                      </div>
                    </div>

                    <div className="lg:w-64">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Condition</p>
                       <p className="text-xs text-slate-600 font-medium italic border-l-2 border-slate-200 pl-3 leading-relaxed">
                        {app.condition || 'No details provided'}
                       </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Nirmal Kaya Physiotherapy & Rehabilitation Center</p>
        </div>
      </main>
    </div>
  );
}
