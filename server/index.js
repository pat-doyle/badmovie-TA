var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();

//Helpers
var {getMovieGenres} = require('./helpers/apiHelpers.js');
var{getMovies} = require('./helpers/apiHelpers.js');

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));


//OPTION 1: Use regular routes
app.get('/search', function(req, res) {
  // get the search genre     
  getMovies()
  .then(({data}) => {
    // console.log('data in getMovies', data);
    // data.results.forEach(movie => {
    //   console.log('movie in getMovies forEach', movie)
    //   res.send(movie);
    // })
    // console.log(data, 'data in search route');
    res.send(data.results)
  })
  .catch((error) => {
    res.send(error)
  })
  
  // https://www.themoviedb.org/account/signup

  // use this endpoint to search for movies by genres, you will need an API key

  // https://api.themoviedb.org/3/discover/movie

  // and sort them by horrible votes using the search parameters in the API
});

app.get('/genres', function(req, res) {
  // make an axios request to get the list of official genres
  getMovieGenres()
  .then(({data}) => {
    //destructured data from response. Provides better info
    res.send(data.genres);
  })
  .catch(error => {
    res.send(error);
  })
  // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list

  // send back
});

app.post('/save', function(req, res) {

});

app.post('/delete', function(req, res) {

});

//OPTION 2: Use Express Router
//IF you decide to go with this option delete OPTION 1 to continue
//Routes
const movieRoutes = require('./routes/movieRoutes.js');
//Use routes
app.use('/movies', movieRoutes);


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
