import React from 'react';
import { motion } from 'framer-motion';

const QUOTES = [
  "Peace comes from within. Do not seek it without.",
  "The soul always knows what to do to heal itself.",
  "Spirituality is not an escape, but an entry into life.",
  "Your light is a beacon for those who seek the way.",
];

const ZenQuote: React.FC = () => {
  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full text-center py-12 px-6"
    >
      <p className="text-xl md:text-3xl font-playfair italic text-spiritual-accent/60 leading-relaxed max-w-4xl mx-auto">
        "{quote}"
      </p>
      <div className="w-16 h-[1px] bg-spiritual-gold/20 mx-auto mt-6" />
    </motion.div>
  );
};

export default ZenQuote;
