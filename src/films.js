// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
let result = []
array.forEach(movie =>  result.some(director => director === movie.director) ? null : result.push(movie.director))
return result
}

function getAllMovies(array) {
  let result = []
  array.forEach(movie => result.push(movie.title))
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
  let average = result.reduce((acc, movie) => acc + parseFloat(movie.score), 0) / result.length
  return parseFloat(average.toFixed(2))
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
let result =[]
let copy =[...array]
copy.sort(function (a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
});
copy.forEach(movie => result.push(movie.title))
return result.slice(0, 20)
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
let copy = [...array]
copy.sort((a,b) =>  a.year !== b.year ? a.year - b.year :  a.title.localeCompare(b.title))
return copy
}

function orderByGenre(array) {
  let result = []
array.forEach(movie => movie.genre.forEach(genre =>  (!result.includes(genre)) ? result.push(genre) : null))

return result
}
function moviesByGenre(array, genre) {
 let result = array.filter(movie => movie.genre.includes(genre))
return result
}
// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

copy= array.filter(movie => movie.genre.includes(genre))
let average = copy.reduce((acc, movie) => acc + parseFloat(movie.score), 0) / copy.length
return parseFloat(average.toFixed(2))
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
    orderByGenre,
    moviesByGenre,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
