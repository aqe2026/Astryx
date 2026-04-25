import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  Star, 
  ShoppingBag, 
  Heart, 
  ShieldCheck, 
  Zap, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../utils/mockData';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/marketplace" className="text-spiritual-gold flex items-center justify-center gap-2">
          <ChevronLeft size={18} /> Back to Marketplace
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <Link 
        to="/marketplace" 
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors text-sm font-medium"
      >
        <ChevronLeft size={16} /> Back to Marketplace
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Product Images */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="aspect-square glass-card overflow-hidden">
            <img 
              src={product.images[0]} 
              alt={product.name}
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* Mocking additional images */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square glass-card overflow-hidden cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                <img src={product.images[0]} alt="" crossOrigin="anonymous" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           className="flex flex-col"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-spiritual-gold font-bold mb-3">
            {product.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-1 text-spiritual-gold">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} fill={s <= Math.floor(product.rating) ? "currentColor" : "none"} />
              ))}
              <span className="text-sm font-bold text-white ml-2">{product.rating}</span>
            </div>
            <span className="text-gray-500 text-sm">{product.reviewsCount} verified reviews</span>
          </div>

          <p className="text-xl font-bold text-spiritual-gold mb-6 text-3xl">₹{product.price}</p>
          
          <p className="text-gray-400 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button className="btn-primary flex-grow md:flex-grow-0 flex items-center justify-center gap-2 px-12">
              Add to Cart <ShoppingBag size={18} />
            </button>
            <button className="btn-outline p-4">
              <Heart size={20} />
            </button>
          </div>

          {/* Spiritual Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoBox 
              icon={<ShieldCheck className="text-spiritual-gold" />} 
              label="Spiritual Significance" 
              value={product.spiritualSignificance} 
            />
            <InfoBox 
              icon={<Zap className="text-spiritual-gold" />} 
              label="Chakra Relevance" 
              value={product.chakraRelevance.join(', ')} 
            />
            <InfoBox 
              icon={<Compass className="text-spiritual-gold" />} 
              label="Zodiac Compatibility" 
              value={product.zodiacCompatibility.join(', ')} 
            />
            <div className="glass-card p-6 border-l-4 border-l-spiritual-accent">
              <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-3">Benefits</p>
              <ul className="space-y-2">
                {product.benefits.map((b: string, i: number) => (
                  <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                    <ArrowRight size={10} className="text-spiritual-gold" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const InfoBox = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="glass-card p-6 border-l-4 border-l-spiritual-accent">
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <p className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{label}</p>
    </div>
    <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">{value}</p>
  </div>
);

export default ProductDetail;
