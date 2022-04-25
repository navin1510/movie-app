const express = require('express');
const router = express.Router();

const controller = require('../controllers/movieController');

//Find all Movies
router.get('/', controller.findAllMovies);
//Find By Movie Id
router.get('/:movieId', controller.findByMovieId);

module.exports = router;