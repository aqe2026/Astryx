import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Flame, 
  Award, 
  ShoppingBag, 
  Clock, 
  ChevronRight
} from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">My Spiritual Dashboard</h1>
        <p className="text-gray-400">Tracking your path to mindfulness</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <MetricCard icon={<Flame className="text-orange-500" />} label="Current Streak" value="12 Days" sub="Top 5% of users" />
        <MetricCard icon={<Trophy className="text-spiritual-gold" />} label="Karma Points" value="2,450" sub="+150 today" />
        <MetricCard icon={<Clock className="text-blue-500" />} label="Meditation Time" value="48 hrs" sub="Total lifetime" />
        <MetricCard icon={<Award className="text-purple-500" />} label="Level" value="Seeker" sub="Next: Enlightened" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Chart Placeholder */}
        <div className="lg:col-span-2 glass-card p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Activity Overview</h3>
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs focus:outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-64 flex items-end gap-2 px-2">
            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className="flex-grow bg-gold-gradient rounded-t-lg opacity-40 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-gray-500 uppercase font-bold px-2">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="glass-card p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Recent Orders</h3>
            <button className="text-xs text-spiritual-gold hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            <OrderTile name="Panchmukhi Mala" status="Shipped" date="May 12" />
            <OrderTile name="Amethyst Stone" status="Delivered" date="May 08" />
            <OrderTile name="Sandalwood Incense" status="Delivered" date="May 01" />
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-8">Guided for You</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RecommendationCard 
            title="Inner Peace Protocol" 
            desc="15 min session for anxiety relief."
            type="Meditation"
          />
          <RecommendationCard 
            title="Jupiter Transit Insight" 
            desc="How the current movement affects you."
            type="Astrology"
          />
          <RecommendationCard 
            title="Spiritual Toolkit" 
            desc="3 essential items for your altar."
            type="Marketplace"
          />
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ icon, label, value, sub }: { icon: React.ReactNode, label: string, value: string, sub: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-6 flex items-start gap-4"
  >
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{label}</p>
      <p className="text-2xl font-bold mb-1">{value}</p>
      <p className="text-[10px] text-spiritual-gold font-medium">{sub}</p>
    </div>
  </motion.div>
);

const OrderTile = ({ name, status, date }: { name: string, status: string, date: string }) => (
  <div className="flex items-center justify-between group cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
        <ShoppingBag size={18} className="text-gray-400" />
      </div>
      <div>
        <p className="text-sm font-bold group-hover:text-spiritual-gold transition-colors">{name}</p>
        <p className="text-[10px] text-gray-500">{date}</p>
      </div>
    </div>
    <div className="text-right">
      <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
        status === 'Shipped' ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'
      }`}>
        {status}
      </span>
      <ChevronRight size={14} className="ml-2 inline text-gray-600" />
    </div>
  </div>
);

const RecommendationCard = ({ title, desc, type }: { title: string, desc: string, type: string }) => (
  <div className="glass-card p-6 border-l-4 border-l-spiritual-accent hover:bg-white/10 transition-colors cursor-pointer">
    <span className="text-[10px] font-bold text-spiritual-gold uppercase tracking-widest block mb-2">{type}</span>
    <h4 className="font-bold mb-2">{title}</h4>
    <p className="text-sm text-gray-400 mb-4">{desc}</p>
    <div className="flex items-center gap-2 text-xs font-bold">
      Explore <ChevronRight size={14} />
    </div>
  </div>
);

export default Dashboard;
