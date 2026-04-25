import type { Product, Meditation } from '../../../shared';

// Using LoremFlickr for highly reliable, keyword-based spiritual imagery (Unsplash Source is deprecated and giving 503)
const getImgUrl = (query: string, seed: string) =>
  `https://loremflickr.com/800/600/${query}?lock=${seed}`;

const createMockProduct = (id: string, name: string, category: Product['category'], lock: string): Product => {
  const queryMap: Record<string, string> = {
    rudraksha: 'meditation,beads',
    mala: 'mala,spiritual',
    gemstone: 'crystal,gemstone',
    bracelet: 'bracelet,quartz',
    pendant: 'pendant,jewelry',
    ring: 'ring,jewelry',
    accessory: 'incense,yoga'
  };

  return {
    id,
    name,
    description: `Experience the divine energy of this authentic ${name}. Handcrafted and spiritually energized for your wellness journey. Crafted with the highest attention to sacred geometry and traditional proportions.`,
    price: Math.floor(Math.random() * (5000 - 500) + 500),
    category,
    images: [getImgUrl(queryMap[category] || 'spiritual', lock)],
    spiritualSignificance: 'Enhances cosmic connection and provides protection.',
    chakraRelevance: ['Root', 'Heart'],
    zodiacCompatibility: ['All Signs'],
    benefits: ['Stability', 'Peace', 'Clarity'],
    stock: Math.floor(Math.random() * 50),
    rating: 4.5 + Math.random() * 0.5,
    reviewsCount: Math.floor(Math.random() * 200)
  };
};

export const MOCK_PRODUCTS: Product[] = [
  // Rudraksha (6)
  createMockProduct('r1', 'Himalayan 5-Mukhi Rudraksha', 'rudraksha', '10'),
  createMockProduct('r2', 'Ganesh Rudraksha Pendant', 'rudraksha', '11'),
  createMockProduct('r3', '1-Mukhi Surya Rudraksha', 'rudraksha', '12'),
  createMockProduct('r4', 'Collector Grade 7-Mukhi', 'rudraksha', '13'),
  createMockProduct('r5', 'Small 5-Mukhi Beads Set', 'rudraksha', '14'),
  createMockProduct('r6', 'Eka Mukhi Silver Cap', 'rudraksha', '15'),

  // Malas (6)
  createMockProduct('m1', 'Red Sandalwood Mala', 'mala', '20'),
  createMockProduct('m2', 'White Tulsi Japa Mala', 'mala', '21'),
  createMockProduct('m3', 'Crystal Spatik Mala', 'mala', '22'),
  createMockProduct('m4', 'Rosewood Meditation Mala', 'mala', '23'),
  createMockProduct('m5', 'Lotus Seed Mala', 'mala', '24'),
  createMockProduct('m6', 'Black Agate Hakik Mala', 'mala', '25'),

  // Gemstones (8)
  createMockProduct('g1', 'Raw Amethyst Cluster', 'gemstone', '30'),
  createMockProduct('g2', 'Polished Rose Quartz', 'gemstone', '31'),
  createMockProduct('g3', 'Yellow Sapphire (Pukhraj)', 'gemstone', '32'),
  createMockProduct('g4', 'Natural Lapis Lazuli', 'gemstone', '33'),
  createMockProduct('g5', 'Clear Quartz Point', 'gemstone', '34'),
  createMockProduct('g6', 'Green Jade Healing Stone', 'gemstone', '35'),
  createMockProduct('g7', 'Pyrite Wealth Stone', 'gemstone', '36'),
  createMockProduct('g8', 'Tiger Eye Confidence Stone', 'gemstone', '37'),

  // Bracelets (8)
  createMockProduct('b1', 'Seven Chakra Bracelet', 'bracelet', '40'),
  createMockProduct('b2', 'Evil Eye Protection Bracelet', 'bracelet', '41'),
  createMockProduct('b3', 'Lava Stone Grounding', 'bracelet', '42'),
  createMockProduct('b4', 'Hematite Magnetic Bracelet', 'bracelet', '43'),
  createMockProduct('b5', 'Amethyst Anxiety Relief', 'bracelet', '44'),
  createMockProduct('b6', 'Citrine Wealth Multiplier', 'bracelet', '45'),
  createMockProduct('b7', 'Black Tourmaline Guard', 'bracelet', '46'),
  createMockProduct('b8', 'Moonstone Intuition Band', 'bracelet', '47'),

  // Pendants (6)
  createMockProduct('p1', 'Sri Yantra Sacred Geometry', 'pendant', '50'),
  createMockProduct('p2', 'Om Symbol Silver Pendant', 'pendant', '51'),
  createMockProduct('p3', 'Tree of Life Crystal', 'pendant', '52'),
  createMockProduct('p4', 'Metatron Cube Mystic', 'pendant', '53'),
  createMockProduct('p5', 'Goddess Lakshmi Charm', 'pendant', '54'),
  createMockProduct('p6', 'Ancient Sigil Protector', 'pendant', '55'),

  // Rings (6)
  createMockProduct('ri1', 'Navratna Royal Ring', 'ring', '60'),
  createMockProduct('ri2', 'Silver Moonstone Ring', 'ring', '61'),
  createMockProduct('ri3', 'Mercury Bead (Para) Ring', 'ring', '62'),
  createMockProduct('ri4', 'Adjustable Sun Ring', 'ring', '63'),
  createMockProduct('ri5', 'Copper Health Ring', 'ring', '64'),
  createMockProduct('ri6', 'Vedic Healing Ring', 'ring', '65'),

  // Accessories (4)
  createMockProduct('a1', 'Tibetan Singing Bowl', 'accessory', '70'),
  createMockProduct('a2', 'Natural Incense Sticks', 'accessory', '71'),
  createMockProduct('a3', 'Copper Water Pot', 'accessory', '72'),
  createMockProduct('a4', 'Meditation Zafu Cushion', 'accessory', '73')
];

export const MOCK_MEDITATIONS: Meditation[] = [
  {
    id: 'm1',
    title: 'Peaceful Morning Flow',
    description: 'Start your day with deep breaths and positive affirmations.',
    duration: 600,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    thumbnailUrl: getImgUrl('meditation,peace', 'm1'),
    type: 'guided',
    category: 'peace'
  },
  {
    id: 'm2',
    title: 'Om Chanting (108 Times)',
    description: 'Powerful reverberations for spiritual cleansing.',
    duration: 1200,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    thumbnailUrl: getImgUrl('buddha,zen', 'm2'),
    type: 'mantra',
    category: 'energy'
  }
];
