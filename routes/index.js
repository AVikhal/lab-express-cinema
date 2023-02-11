const express = require('express');
const router = express.Router();
const MovieModel = require("../models/Movie.model.js")


/* GET home page */
router.get('/', (req, res, next) => { 
    
    res.render('index.hbs')

});

// GET "/movies" page.

router.get("/movies",(req, res, next) =>{

    MovieModel.find()
        .then((response) => {
            console.log(response)
            res.render("movies/movies.hbs", {
                moviesList: response
            })
        })
    
        .catch((err) =>{
            next(err)
        })
})

// GET "/movie/:id" page

router.get("/movie/:id", (req, res, next) => {
    
    const { id } = req.params

    MovieModel.findById(id)
    .then((response) => {
        console.log(response)
        res.render("movies/movieDetails.hbs", {
            oneMovie: response
        })
    })
    

    .catch((err) => {
        next(err)
    })
})


module.exports = router;
