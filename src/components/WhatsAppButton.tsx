import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919899532930"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
      id="whatsapp-fab"
    >
      <MessageCircle size={32} />
      {/* Tooltip on hover */}
      <div className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
         Chat with Dr. Kundan
      </div>
    </motion.a>
  );
}
