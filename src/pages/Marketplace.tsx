import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Search, Filter, ShoppingCart, Heart, Star } from 'lucide-react';
import { MOCK_PRODUCTS } from '../utils/mockData';
import ZenQuote from '../components/ui/ZenQuote';

const Marketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Mala', 'Gemstone', 'Rudraksha', 'Bracelet', 'Pendant', 'Ring', 'Accessory'];

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Spiritual Marketplace</h1>
          <p className="text-gray-400">Authentic tools for your spiritual journey</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-spiritual-gold transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors">
            <Filter size={18} /> Filter
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat 
                ? 'bg-spiritual-gold text-spiritual-dark' 
                : 'bg-white/5 border border-white/10 text-gray-400 hover:border-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Zen Ambient Section */}
      <ZenQuote />

      {/* Product Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-card group flex flex-col overflow-hidden"
          >
            <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-white/5">
              <img 
                src={product.images[0]} 
                alt={product.name}
                crossOrigin="anonymous"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <button className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20" onClick={(e) => e.preventDefault()}>
                <Heart size={18} className="text-white" />
              </button>
              {product.stock < 15 && (
                <span className="absolute top-4 left-4 px-2 py-1 bg-red-500/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider rounded">
                  Low Stock
                </span>
              )}
            </Link>
            
            <div className="p-6 flex flex-grow flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] uppercase tracking-widest text-spiritual-gold font-bold">{product.category}</span>
                <div className="flex items-center gap-1 text-spiritual-gold">
                  <Star size={12} fill="currentColor" />
                  <span className="text-xs font-bold text-white">{product.rating}</span>
                </div>
              </div>
              
              <Link to={`/product/${product.id}`}>
                <h3 className="text-lg font-bold mb-2 group-hover:text-spiritual-gold transition-colors">{product.name}</h3>
              </Link>
              <p className="text-gray-400 text-xs line-clamp-2 mb-4 leading-relaxed">
                {product.description}
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xl font-bold">₹{product.price}</span>
                <button className="p-2 rounded-lg bg-spiritual-gold/10 text-spiritual-gold hover:bg-spiritual-gold hover:text-spiritual-dark transition-all">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marketplace;
