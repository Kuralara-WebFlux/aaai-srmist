const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    type: String,
    title: String,
    date: String,
    venue: String,
    status: String,
    content: String,  // Allows rich text/HTML event recaps
    images: [String]  // Allows arrays of image URLs for the gallery
});

module.exports = mongoose.model('Event', eventSchema);