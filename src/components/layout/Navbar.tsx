import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  Bell, 
  Search,
  Sparkles
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Meditation', path: '/meditation' },
    { name: 'Astrology', path: '/astrology' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-spiritual-deep/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <Sparkles className="text-spiritual-dark" size={24} />
          </div>
          <span className="text-2xl font-bold font-['Playfair_Display'] tracking-tight">
            Astryx
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-spiritual-gold",
                location.pathname === link.path ? "text-spiritual-gold" : "text-gray-400"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <Link to="/cart" className="p-2 text-gray-400 hover:text-white transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-spiritual-saffron text-[10px] flex items-center justify-center rounded-full text-white font-bold">
              0
            </span>
          </Link>
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Bell size={20} />
          </button>
          
          <div className="h-6 w-[1px] bg-white/10 mx-2 hidden sm:block" />

          {isAuthenticated ? (
            <Link to="/dashboard" className="flex items-center gap-2 p-1 pl-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <span className="text-sm font-medium hidden sm:block">{user?.name}</span>
              <div className="w-8 h-8 rounded-full bg-spiritual-accent flex items-center justify-center">
                <User size={16} />
              </div>
            </Link>
          ) : (
            <Link to="/login" className="btn-primary py-2 px-6 text-sm">
              Sign In
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-spiritual-deep border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium",
                    location.pathname === link.path ? "text-spiritual-gold" : "text-gray-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/login"
                className="btn-primary text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
