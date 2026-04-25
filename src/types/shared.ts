// Common interfaces for both frontend and backend
// Note: This is an internal copy of the shared types to ensure Vercel build compatibility

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'guide';
  karmaPoints: number;
  streak: number;
  lastMeditationDate?: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'rudraksha' | 'mala' | 'gemstone' | 'bracelet' | 'pendant' | 'accessory' | 'ring';
  images: string[];
  spiritualSignificance: string;
  chakraRelevance: string[];
  zodiacCompatibility: string[];
  benefits: string[];
  stock: number;
  rating: number;
  reviewsCount: number;
}

export interface Meditation {
  id: string;
  title: string;
  description: string;
  duration: number; // in seconds
  audioUrl: string;
  thumbnailUrl: string;
  type: 'guided' | 'ambient' | 'mantra';
  category: 'peace' | 'focus' | 'sleep' | 'energy';
}

export interface Order {
  id: string;
  userId: string;
  products: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'completed' | 'failed';
  createdAt: Date;
}
