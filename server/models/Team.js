const mongoose = require('mongoose');
module.exports = mongoose.model('Team', new mongoose.Schema({
    type: String, i: String, name: String, role: String, dept: String, g: String, linkedin: String, image: String
}));