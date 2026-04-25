import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-spiritual-deep flex flex-col relative overflow-hidden">
      {/* Dynamic Background elements for "Inner Peace" vibe */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-spiritual-gold/5 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 60, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[50%] bg-spiritual-saffron/5 rounded-full blur-[100px]"
        />
      </div>

      <Navbar />
      
      <motion.main 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-grow pt-20 relative z-10"
      >
        {children}
      </motion.main>
      
      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/5 py-16 px-6 relative z-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold font-playfair mb-4 text-spiritual-gold">Astryx</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your modern gateway to spiritual wellness, authentic products, and ancient wisdom for a balanced life.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a href="#" className="hover:text-spiritual-gold transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-spiritual-gold transition-colors">Meditation</a></li>
              <li><a href="#" className="hover:text-spiritual-gold transition-colors">Astro AI</a></li>
              <li><a href="#" className="hover:text-spiritual-gold transition-colors">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Authenticity Check</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Return Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">Inner Circle</h4>
            <p className="text-gray-400 text-sm mb-6">Receive spiritual insights and exclusive early access.</p>
            <div className="flex gap-2 p-1.5 bg-white/5 rounded-full border border-white/10">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent px-4 py-2 text-sm flex-grow focus:outline-none"
              />
              <button className="bg-spiritual-gold text-spiritual-dark px-6 py-2 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
            © 2026 Astryx Spiritual Tech. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-500">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
