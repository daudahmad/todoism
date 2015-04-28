var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
  title: String,
  noteText: String
});

mongoose.model('Note', NoteSchema);