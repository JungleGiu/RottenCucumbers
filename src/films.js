// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
let result = []
array.forEach(array =>  result.some(director => director === array.director) ? null : result.push(array.director))
return result
}

function getAllMovies(array) {
  let result = []
  array.forEach(movie => result.push(movie.title))
  console.log(result)
  return result
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result = []
 result = array.filter(movie => movie.director === director)
 return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result = []
  result = array.filter(movie => movie.director === director)
  let average = result.reduce((acc, movie) => acc + movie.score, 0) / result.length
  return average.toFixed(1)
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getAllMovies,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
