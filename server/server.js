require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Models
const Event = require('./models/Event');
const Team = require('./models/Team');
const Blog = require('./models/Blog');

const app = express();

// ==========================================
// MIDDLEWARE
// ==========================================
// This allows your Vercel frontend to request data safely
app.use(cors());
app.use(express.json());

// Prevents deprecation warnings in the Render console
mongoose.set('strictQuery', false);

// ==========================================
// DATABASE CONNECTION
// ==========================================
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('🚀 Connected to MongoDB successfully!'))
    .catch(err => console.error('❌ Database connection error:', err));


// ==========================================
// API ROUTES
// ==========================================

// 1. Health Check Route (Crucial for Render Deployment)
app.get('/', (req, res) => {
    res.status(200).send('✅ AAAI SRMIST Backend is Live and Running!');
});

// 2. Fetch Events
app.get('/api/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error fetching events' });
    }
});

// 3. Fetch Team Members
app.get('/api/team', async (req, res) => {
    try {
        const team = await Team.find();
        res.status(200).json(team);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error fetching team' });
    }
});

// 4. Fetch Blogs (Sorted newest to oldest)
app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ date: -1 });
        res.status(200).json(blogs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error fetching blogs' });
    }
});


// ==========================================
// SERVER INITIALIZATION
// ==========================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🌐 Server is running on port ${PORT}`);
});