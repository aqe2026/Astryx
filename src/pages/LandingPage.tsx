import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, ShoppingBag, MessageSquare, History, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-32 min-h-[90vh] flex flex-col items-center justify-center text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-spiritual-gold/10 border border-spiritual-gold/20 text-spiritual-gold text-xs font-bold tracking-[0.2em] uppercase mb-8"
          >
            <Sparkles size={14} />
            Ancient Wisdom, Modern Tech
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            Cultivate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spiritual-gold via-spiritual-saffron to-spiritual-gold bg-[length:200%_auto] animate-gradient-flow italic">Inner Sanctuary</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
            The world's first premium spiritual ecosystem. Synchronize your digital life with your soul's journey through authentic tools, AI insights, and mindful practices.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/meditation" className="btn-primary flex items-center gap-3 pr-6 group">
              <div className="w-10 h-10 rounded-full bg-spiritual-dark/20 flex items-center justify-center group-hover:bg-spiritual-dark/40 transition-colors">
                <Play size={18} fill="currentColor" />
              </div>
              Start Chanting
            </Link>
            <Link to="/marketplace" className="btn-outline flex items-center gap-2">
              Explore Marketplace <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* Hero Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl pointer-events-none -z-10">
           <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-spiritual-gold/10 rounded-full blur-2xl animate-float" />
           <div className="absolute bottom-[20%] right-[10%] w-48 h-48 bg-spiritual-saffron/10 rounded-full blur-3xl animate-float [animation-delay:2s]" />
        </div>
      </section>

      {/* Featured Collections Preview */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Crafted for Clarity</h2>
              <p className="text-gray-400">Discover our three core pillars designed to support your spiritual evolution.</p>
            </div>
            <Link to="/marketplace" className="text-spiritual-gold font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
              View All Collections <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShoppingBag size={28} className="text-spiritual-gold" />}
              title="Sacred Objects"
              description="Lab-certified Rudraksha, Gemstones and energised Malas selected with intention."
              link="/marketplace"
              index={0}
            />
            <FeatureCard 
              icon={<MessageSquare size={28} className="text-spiritual-gold" />}
              title="Celestial AI"
              description="Instant Kundali checks and predictive astrology powered by advanced planetary algorithms."
              link="/astrology"
              index={1}
            />
             <FeatureCard 
              icon={<History size={28} className="text-spiritual-gold" />}
              title="Daily Sadhana"
              description="A digital sanctuary for your chanting, meditation streaks, and mindful progression."
              link="/meditation"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto glass-card p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 transform rotate-12 opacity-5">
             <Sparkles size={120} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic font-playfair tracking-normal">
            "Spirituality is not an escape from life, but an entry into it with more presence and peace."
          </h2>
          <div className="w-12 h-1 bg-spiritual-gold/30 mx-auto rounded-full mb-6" />
          <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">The Astryx Philosophy</p>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, link, index }: { icon: React.ReactNode, title: string, description: string, link: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8 }}
    whileHover={{ y: -10 }}
    className="glass-card p-10 flex flex-col min-h-[380px] group"
  >
    <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-spiritual-gold/10 transition-colors duration-500">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed mb-10">
      {description}
    </p>
    <Link to={link} className="mt-auto flex items-center gap-2 text-sm font-bold text-spiritual-accent group-hover:text-spiritual-gold transition-colors">
      Discover More <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
    </Link>
  </motion.div>
);

export default LandingPage;
