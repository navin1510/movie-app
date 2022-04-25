const lodash = require('lodash');
const { Op } = require('sequelize');
const { Movie } = require('../models');

const findAllMovies = async (req, res) => {
    const { title } = req.query;

    if (title) {
        const movies = await Movie.findAll({
            where: {
                title: {
                    [Op.or]: {
                        [Op.substring]: title
                    }
                }
            }
        });
        return res.json(movies);
    }
    else {
        const movies = await Movie.findAll({ raw: true });
        return res.json(movies);
    }
}

const findByMovieId = async (req, res) => {
    const { movieId } = req.params;

    //const movie = movies.filter(movie => movie.id === Number(movieId));
    const movie = await Movie.findOne({
        where: {
            id: Number(movieId)
        }
    })
    if (!movie) {
        return res.status(404).json({
            message: "Movie Id not found!"
        });
    }
    res.json(movie);
}

module.exports = {
    findAllMovies,
    findByMovieId
}