var routes = require('express').Router();
var db = require('../dao/db');
var authorDao = require('../dao/authorDao');

routes.get('/authors', function (req, res) {
  authorDao.getAllAuthors(function (error, result) {
    if (error) throw error;
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  });
});

routes.post('/authors', function (req, res) {
  var author = req.body;
  authorDao.addAuthor(author, function (err, author) {
    if (err) {
      res.status(400);
      res.send('Add Author Failed!');
    }
    else {
      res.status(201);
      console.log('GOT', author);
      res.json({author});
    }
  });
});

routes.put('/authors', function (req, res) {
  var author = req.body;
  authorDao.updateAuthor(author, function (err, result) {
    if (err) {
      res.status(400);
      res.send('Update Author Failed!');
    }
    else {
      res.send('Update Author Successful!');
    }
  });
});

routes.delete('/authors/:id', function (req, res) {
  authorDao.removeAuthor(req.params.id, function (err, result) {
    if (err) {
      res.status(400);
      res.send('Delete Author Failed!');
    }
    res.send('Delete Author Successful!');
  });
});

module.exports = routes;
