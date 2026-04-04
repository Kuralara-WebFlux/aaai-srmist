require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Event = require('./models/Event');
const Team = require('./models/Team');
const Blog = require('./models/Blog');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('🚀 Connected to MongoDB'))
    .catch(err => console.error('Database connection error:', err));

app.get('/api/events', async (req, res) => {
    try { res.json(await Event.find()); } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

app.get('/api/team', async (req, res) => {
    try { res.json(await Team.find()); } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

app.get('/api/blogs', async (req, res) => {
    try { res.json(await Blog.find().sort({ date: -1 })); } catch (err) { res.status(500).json({ error: 'Server error' }); }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));