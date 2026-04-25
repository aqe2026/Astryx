import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, Code, Globe } from 'lucide-react';


import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  const handleMockLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setAuth({ id: '1', name: 'Ishaan', email: 'ishaan@example.com', role: 'user' }, 'mock-token');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-10 w-full max-w-md"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-['Playfair_Display'] mb-2">Welcome Back</h2>
          <p className="text-gray-400 text-sm">Continue your spiritual journey</p>
        </div>

        <form className="space-y-6" onSubmit={handleMockLogin}>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="email" 
                placeholder="you@example.com"
                defaultValue="ishaan@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-spiritual-gold transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                defaultValue="password123"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-spiritual-gold transition-colors"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded bg-white/10 border-white/10 text-spiritual-gold" />
              <span className="text-gray-400">Remember me</span>
            </label>
            <a href="#" className="text-spiritual-gold hover:underline">Forgot password?</a>
          </div>

          <button 
            type="submit"
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            Sign In <LogIn size={18} />
          </button>
        </form>

        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
          <span className="relative px-4 bg-spiritual-deep text-[10px] text-gray-500 uppercase font-bold tracking-widest">Or continue with</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-colors">
            <Globe size={18} /> Google
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-colors">
            <Code size={18} /> GitHub
          </button>
        </div>

        <p className="text-center mt-8 text-sm text-gray-400">
          Don't have an account? <a href="#" className="text-spiritual-gold font-bold">Sign Up</a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
