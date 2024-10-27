const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    reviews: [{ type: String }], // Resenhas dos livros
    genres: { type: [String], default: [] }, // Gêneros do livro
});

module.exports = mongoose.model('Book', bookSchema);
