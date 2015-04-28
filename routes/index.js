var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//var Note = mongoose.model('Note');

/*var Note = mongoose.model('Note', {
  title: String,
  noteText: String
});*/


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*router.get('/notes', function(req, res, next) {
  Note.find(function(err, notes){
    if(err){ return next(err); }

    res.json(notes);
  });
});

router.post('/notes', function(req, res, next) {
  var note = new Note(req.body);

  note.save(function(err, note){
    if(err){ return next(err); }

    res.json(note);
  });
});

router.param('note', function(req, res, next, id) {
  var query = Note.findById(id);

  query.exec(function (err, note){
    if (err) { return next(err); }
    if (!note) { return next(new Error('can\'t find note')); }

    req.note = note;
    return next();
  });
});

router.get('/notes/:note', function(req, res) {
  res.json(req.note);
});*/

module.exports = router;
