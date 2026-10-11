export type Tour = {
  id: string;
  title: string;
  slug: string;
  destination: string;
  description: string;
  overview: string;
  duration: number;
  price: number;
  category: 'Culture' | 'Adventure' | 'Food' | 'Nature' | 'Beach' | 'Family';
  images: string[];
  included: string[];
  excluded: string[];
  rating: number;
  featured: boolean;
  active: boolean;
  itinerary: { day: number; title: string; description: string }[];
  meetingPoint: string;
  faqs: { question: string; answer: string }[];
};

export const tours: Tour[] = [
  {
    id: 'angkor-wat-sunrise',
    title: 'Angkor Wat Sunrise & Temples',
    slug: 'angkor-wat-sunrise-temples',
    destination: 'Siem Reap',
    description: 'Witness the golden glow of Angkor Wat at dawn and explore the sacred temples of the Khmer Empire with a local historian.',
    overview: 'A deeply cinematic two-day immersion into Cambodia’s ancient heart, blending sunrise rituals, temple walks, and cultural storytelling.',
    duration: 2,
    price: 180,
    category: 'Culture',
    images: [
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    ],
    included: ['Hotel pickup and drop-off', 'Entry tickets', 'English-speaking guide', 'Private transport', 'Water and snacks'],
    excluded: ['Flights', 'Personal expenses', 'Travel insurance'],
    rating: 4.9,
    featured: true,
    active: true,
    itinerary: [
      { day: 1, title: 'Sunrise over Angkor', description: 'Begin before dawn at Angkor Wat for sunrise, then visit Ta Prohm, Bayon, and Banteay Srei.' },
      { day: 2, title: 'Temple trails and local life', description: 'Visit lesser-known temples and enjoy a Khmer lunch with a family in a village outside Siem Reap.' },
    ],
    meetingPoint: 'Hotel lobby in Siem Reap at 4:30 AM.',
    faqs: [
      { question: 'Is this suitable for families?', answer: 'Yes, with a moderate walking pace and a guide who adjusts to group comfort.' },
      { question: 'What should I bring?', answer: 'Comfortable shoes, sunscreen, light layers, and a refillable water bottle.' },
    ],
  },
  {
    id: 'phnom-penh-history',
    title: 'Phnom Penh History & Street Food',
    slug: 'phnom-penh-history-street-food',
    destination: 'Phnom Penh',
    description: 'Trace Cambodia’s modern story through museums, riverside landmarks, and a vibrant street food tasting trail.',
    overview: 'A one-day urban exploration blending heritage, taste, and contemporary city life.',
    duration: 1,
    price: 95,
    category: 'Food',
    images: [
      'https://images.unsplash.com/photo-1508009603885-50cf7c579a4a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80',
    ],
    included: ['Guide', 'Food tastings', 'Transport', 'Local insights'],
    excluded: ['Alcoholic drinks', 'Optional shopping'],
    rating: 4.8,
    featured: true,
    active: true,
    itinerary: [
      { day: 1, title: 'City stories', description: 'Visit Tuol Sleng, the Royal Palace area, and the riverside for local context and architecture.' },
    ],
    meetingPoint: 'The National Museum entrance at 9:00 AM.',
    faqs: [
      { question: 'Can vegetarians join?', answer: 'Absolutely — we can adapt the street food route to vegetarian and vegan preferences.' },
    ],
  },
  {
    id: 'kampot-pepper',
    title: 'Kampot Pepper Farms & River Sunset',
    slug: 'kampot-pepper-farms-river-sunset',
    destination: 'Kampot & Kep',
    description: 'Follow Cambodia’s pepper heritage through riverside farms, scenic roads, and a golden-hour sunset by the Gulf of Thailand.',
    overview: 'A sensory two-day journey through Cambodia’s southern charm, culinary traditions, and leisurely river views.',
    duration: 2,
    price: 140,
    category: 'Nature',
    images: [
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    included: ['Transport', 'Farm tour', 'Sunset viewpoint', 'Lunch', 'Local guide'],
    excluded: ['Hotel stays', 'Optional seafood dinner'],
    rating: 4.7,
    featured: true,
    active: true,
    itinerary: [
      { day: 1, title: 'Pepper country', description: 'Drive through pepper plantations, stop at a family-run farm, and enjoy a leisurely lunch by the river.' },
      { day: 2, title: 'Kep & golden hour', description: 'Visit Kep crab market and enjoy a sunset along the coast with a seafood dinner.' },
    ],
    meetingPoint: 'Hotel pickup in Kampot at 8:30 AM.',
    faqs: [
      { question: 'Are there easy walking routes?', answer: 'Yes, the route is easy and scenic, with plenty of rests and viewpoints.' },
    ],
  },
  {
    id: 'tonle-sap-floating',
    title: 'Tonle Sap Floating Villages',
    slug: 'tonle-sap-floating-villages',
    destination: 'Siem Reap',
    description: 'Cruise the vast Tonle Sap Lake and learn how floating communities live in balance with water, seasons, and tradition.',
    overview: 'A half-day immersion into a distinctive water-based culture and one of Cambodia’s most unusual landscapes.',
    duration: 0.5,
    price: 65,
    category: 'Nature',
    images: [
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1200&q=80',
    ],
    included: ['Boat transfer', 'Guide', 'Refreshments'],
    excluded: ['Lunch', 'Tips'],
    rating: 4.6,
    featured: true,
    active: true,
    itinerary: [
      { day: 1, title: 'Lake journey', description: 'Cruise through floating houses, schools, and markets while learning about daily life on the lake.' },
    ],
    meetingPoint: 'Siem Reap central pickup point.',
    faqs: [
      { question: 'Is this good for photography?', answer: 'It is excellent for wide-angle shots of the lake and floating communities.' },
    ],
  },
  {
    id: 'koh-rong-island',
    title: 'Koh Rong Island Escape',
    slug: 'koh-rong-island-escape',
    destination: 'Koh Rong',
    description: 'Swap into island rhythm with crystal waters, beach sunsets, and a laid-back tropical retreat off Cambodia’s coast.',
    overview: 'A three-day coastal escape designed for rest, snorkel adventures, and sunset dinners by the water.',
    duration: 3,
    price: 220,
    category: 'Beach',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493558103817-58b2924b5713?auto=format&fit=crop&w=1200&q=80',
    ],
    included: ['Return ferry', 'Beach resort stay', 'Snorkel gear', 'Breakfast'],
    excluded: ['Marine park fees', 'Spa services'],
    rating: 4.9,
    featured: true,
    active: true,
    itinerary: [
      { day: 1, title: 'Arrival by sea', description: 'Ferry across from Sihanoukville and settle into a beachfront retreat.' },
      { day: 2, title: 'Island adventure', description: 'Snorkel and walk to hidden coves, then enjoy a beach barbeque under the stars.' },
      { day: 3, title: 'Sunrise departure', description: 'Relax, enjoy a final swim, and return to the mainland.' },
    ],
    meetingPoint: 'Sihanoukville ferry port at 8:00 AM.',
    faqs: [
      { question: 'Is snorkeling included?', answer: 'Yes, snorkel gear is included for the island excursion.' },
    ],
  },
  {
    id: 'mondulkiri-elephant',
    title: 'Mondulkiri Elephant Sanctuary & Waterfalls',
    slug: 'mondulkiri-elephant-sanctuary-waterfalls',
    destination: 'Mondulkiri',
    description: 'Explore the forested uplands of eastern Cambodia with elephants, jungle trails, and hidden waterfall swims.',
    overview: 'A meaningful two-day ecotourism experience bringing travelers closer to nature and conservation work.',
    duration: 2,
    price: 170,
    category: 'Adventure',
    images: [
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    ],
    included: ['Local transport', 'Elephant sanctuary visit', 'Guide', 'Waterfall access'],
    excluded: ['Flights to destination', 'Lunch on arrival'],
    rating: 4.8,
    featured: false,
    active: true,
    itinerary: [
      { day: 1, title: 'Forest sanctuary', description: 'Visit the elephant sanctuary, learn about conservation, and walk through forest trails.' },
      { day: 2, title: 'Waterfall day', description: 'Swim in jungle waterfalls and relax in a village homestay after a scenic transfer.' },
    ],
    meetingPoint: 'Sen Monorom hotel pickup at 8:00 AM.',
    faqs: [
      { question: 'Are there age restrictions?', answer: 'No, though some trails can be uneven. Comfortable shoes are recommended.' },
    ],
  },
];

export type Destination = {
  slug: string;
  name: string;
  blurb: string;
  bestTime: string;
  image: string;
  highlights: string[];
};

export const destinations: Destination[] = [
  { slug: 'siem-reap', name: 'Siem Reap', blurb: 'Angkor temples and warm Khmer hospitality', bestTime: 'Nov–Apr', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80', highlights: ['Angkor Wat sunrise', 'Temple trails', 'Traditional Khmer evenings'] },
  { slug: 'phnom-penh', name: 'Phnom Penh', blurb: 'Riverfront culture, cuisine, and history', bestTime: 'Nov–Feb', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579a4a?auto=format&fit=crop&w=1200&q=80', highlights: ['Royal Palace', 'Street food', 'Museums and memorials'] },
  { slug: 'kampot-kep', name: 'Kampot & Kep', blurb: 'Pepper farms, coastal cliffs, and calm evenings', bestTime: 'Dec–Apr', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80', highlights: ['Pepper workshops', 'Kep crab market', 'Sunset viewpoints'] },
  { slug: 'battambang', name: 'Battambang', blurb: 'Rural charm and artistic local culture', bestTime: 'Nov–Mar', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80', highlights: ['Bamboo train', 'Artisanal villages', 'Rice field landscapes'] },
  { slug: 'koh-rong', name: 'Koh Rong', blurb: 'Turquoise waters and easygoing island nights', bestTime: 'Nov–Apr', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', highlights: ['Snorkeling', 'Beach bars', 'Island hikes'] },
  { slug: 'mondulkiri', name: 'Mondulkiri', blurb: 'Forest trails and highland serenity', bestTime: 'Nov–Apr', image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80', highlights: ['Elephant sanctuary', 'Waterfalls', 'Rainforest trekking'] },
  { slug: 'kratie', name: 'Kratie', blurb: 'River towns, dolphins, and village rhythms', bestTime: 'Nov–Mar', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80', highlights: ['Dolphin spotting', 'Riverside cafes', 'Quiet landscape'] },
];

export const testimonials = [
  { name: 'Claire W.', origin: 'United Kingdom', comment: 'The temples felt deeply personal, not just scenic. Every stop was paced beautifully and guided with local knowledge.' },
  { name: 'Marco T.', origin: 'Italy', comment: 'From the floating villages to the street food, the experiences were authentic, smooth, and stress-free.' },
  { name: 'Anika & Sam', origin: 'Australia', comment: 'We loved the balance of adventure and comfort. The team handled every detail and made us feel truly cared for.' },
];

export const faqs = [
  { question: 'Do I need a visa to visit Cambodia?', answer: 'Many nationalities can enter visa-free or obtain an e-visa online. We recommend checking the latest requirements before departure.' },
  { question: 'What is the best time to visit?', answer: 'The most comfortable weather is typically from November to April, with the dry season offering excellent sightseeing conditions.' },
  { question: 'What is your cancellation policy?', answer: 'Cancellations made at least 14 days in advance receive a full refund, subject to specific tour terms.' },
  { question: 'Is Cambodia safe for travelers?', answer: 'Yes, Cambodia is generally very welcoming to travelers. We recommend staying alert in busy markets and following your guide’s advice.' },
];

export const siteDescription = 'An immersive digital expedition for travelers, offering curated cultural journeys, direct booking, and seamless payment for Cambodia\'s most enchanting destinations.';
