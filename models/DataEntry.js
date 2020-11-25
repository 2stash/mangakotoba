const mongoose = require("mongoose");

const MangaSchema = new mongoose.Schema({
  books: [{ title: { type: String, required: true, unique: true } }],
});

module.exports = Manga = mongoose.model("user", MangaSchema);
