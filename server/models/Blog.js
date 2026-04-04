const mongoose = require('mongoose');

module.exports = mongoose.model('Blog', new mongoose.Schema({
    title: String,
    excerpt: String,
    content: String,
    author: String,
    date: { type: Date, default: Date.now },
    readTime: String,
    category: String,
    image: String // <-- This must be exactly 'image'
}));