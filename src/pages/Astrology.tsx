import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Sparkles, Moon, Sun, Star } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

const AstrologyChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Namaste! I am your AI Astrology Assistant. How can I guide you today? You can ask about your horoscope, Kundali, or zodiac compatibility.", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Mock AI Response
    setTimeout(() => {
      const aiMessage: Message = { 
        id: (Date.now() + 1).toString(), 
        text: "Based on the planetary positions today, Jupiter is entering a phase that favors new beginnings for you. It's a great day to start a new spiritual practice.", 
        sender: 'ai' 
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            Astro AI <Sparkles className="text-spiritual-gold" />
          </h1>
          <p className="text-gray-400 text-sm">Personalized celestial guidance</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-colors">Daily Horoscope</button>
          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-colors">Kundali Check</button>
        </div>
      </div>

      <div className="flex-grow glass-card flex flex-col overflow-hidden mb-6">
        {/* Chat Area */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6 no-scrollbar">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center ${
                  msg.sender === 'user' ? 'bg-spiritual-accent' : 'bg-gold-gradient'
                }`}>
                  {msg.sender === 'user' ? <User size={20} /> : <Star size={20} className="text-spiritual-dark" />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-white/10 rounded-tr-none' 
                    : 'bg-white/5 border border-white/10 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white/5 border-t border-white/10">
          <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything about your zodiac..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-6 pr-14 py-4 text-sm focus:outline-none focus:border-spiritual-gold transition-colors"
            />
            <button 
              onClick={handleSend}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-spiritual-gold text-spiritual-dark hover:scale-105 active:scale-95 transition-all"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ZodiacPill label="Aries" icon={<Sun size={14} />} />
        <ZodiacPill label="Leo" icon={<Moon size={14} />} />
        <ZodiacPill label="Virgo" icon={<Sun size={14} />} />
        <ZodiacPill label="Libra" icon={<Moon size={14} />} />
      </div>
    </div>
  );
};

const ZodiacPill = ({ label, icon }: { label: string, icon: React.ReactNode }) => (
  <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-spiritual-gold/10 hover:border-spiritual-gold/50 transition-all group">
    <span className="text-spiritual-gold group-hover:scale-110 transition-transform">{icon}</span>
    {label}
  </button>
);

export default AstrologyChat;
