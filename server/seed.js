// --- YOUR EXISTING BLOGS DATA ---
const BLOGS_DATA = [
  {
    title: 'AlgoVerse: Empowering the Next Generation of AI Creators at AAAI SRMIST',
    excerpt: 'The transition from being a consumer of technology to a creator of it is a defining moment for any developer...',
    author: 'Lakshara Anand & Kurinji Eswar',
    date: new Date('2026-03-24'),
    readTime: '6 min read',
    category: 'Chapter News',
    image: '/blog/algoverse-banner.jpg',
    content: `... (your html content) ...`
  },
  // ... rest of your blogs
];

// --- YOUR UPDATED TEAM DATA ---
const TEAM_DATA = [
  {
    type: 'Faculty',
    i: 'SK',
    name: 'Dr. S Kanaga Suba Raja',
    role: 'Faculty Coordinator',
    dept: 'Professor & Associate Dean',
    g: '#E2E8F0', // Example background color
    linkedin: '#', // Leave as '#' or add his actual linkedin URL
    image: '', // Add image path if you have one
    // 👇 ADDED SPECIFIC CONTACT INFO HERE 👇
    email: 'kanagass@srmist.edu.in',
    phone: '94866 84400'
  },
  // ... rest of your team members (they don't need email/phone if you don't want them to have it)
];

// Make sure your seed function at the bottom inserts both!
// Example: await Team.insertMany(TEAM_DATA);