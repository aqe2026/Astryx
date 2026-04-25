import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles } from 'lucide-react';

const MalaCounter: React.FC = () => {
  const [counts, setCounts] = useState(0);
  const [beadPosition, setBeadPosition] = useState(0);
  const totalBeads = 108;

  const handleIncrement = () => {
    setCounts(prev => prev + 1);
    setBeadPosition(prev => (prev + 1) % 12); // Just for visual movement
    
    // Simulate haptic feedback if available (Web Vibration API)
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleReset = () => {
    setCounts(0);
    setBeadPosition(0);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Mala Visualizer */}
      <div className="relative w-64 h-64 flex items-center justify-center mb-8">
        <div className="absolute inset-0 border-[3px] border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
        
        {/* Animated Beads */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-4 h-4 rounded-full shadow-lg ${
              i === beadPosition ? 'bg-spiritual-gold scale-125' : 'bg-white/20'
            }`}
            animate={{
              x: 100 * Math.cos((i * 2 + beadPosition) * Math.PI / 6),
              y: 100 * Math.sin((i * 2 + beadPosition) * Math.PI / 6),
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}

        <div className="flex flex-col items-center z-10">
          <span className="text-5xl font-bold text-white mb-1">{counts}</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Chants</span>
        </div>
      </div>

      <div className="flex gap-6">
        <button 
          onClick={handleReset}
          className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <RotateCcw size={24} />
        </button>
        
        <button 
          onClick={handleIncrement}
          className="w-24 h-24 rounded-full bg-gold-gradient flex items-center justify-center text-spiritual-dark shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          <span className="text-xl font-black">TAP</span>
        </button>

        <button 
          className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <Volume2 size={24} />
        </button>
      </div>

      <div className="mt-8 text-spiritual-accent flex items-center gap-2 text-sm font-medium">
        <Sparkles size={16} />
        {Math.floor(counts / 108)} Malas Completed
      </div>
    </div>
  );
};

const MeditationPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => setTime(prev => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Mala Counter */}
        <div className="glass-card p-12 flex flex-col items-center justify-center min-h-[500px]">
          <h2 className="text-2xl font-bold mb-12 font-['Playfair_Display']">Virtual Jaap Mala</h2>
          <MalaCounter />
        </div>

        {/* Right Side: Ambient Player & Stats */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Daily Meditation</h1>
            <p className="text-gray-400 leading-relaxed">
              Find your center. Use the virtual mala for your morning jaap, or listen to our curated 
              ambient sounds to enhance your focus and reach deep states of awareness.
            </p>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-spiritual-gold/20 flex items-center justify-center text-spiritual-gold">
                  <Play size={24} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-bold">Om Shanti Chanting</h4>
                  <p className="text-xs text-gray-500">15:00 • High Vibration</p>
                </div>
              </div>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-2">
              <motion.div 
                className="h-full bg-gold-gradient"
                animate={{ width: isPlaying ? '60%' : '0%' }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-gray-500 font-bold">
              <span>{formatTime(time)}</span>
              <span>15:00</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Current Streak" value="5 Days" />
            <StatCard label="Karma Points" value="+450" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value }: { label: string, value: string }) => (
  <div className="glass-card p-6 border-l-4 border-l-spiritual-gold">
    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">{label}</p>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default MeditationPage;
