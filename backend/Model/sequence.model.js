const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    seq: { type: Number, default: 1 }
});

const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;
