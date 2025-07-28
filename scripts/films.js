function getAllDirectors(array) {
  let result = [];
  array.forEach((movie) =>
    result.some((director) => director === movie.director)
      ? null
      : result.push(movie.director)
  );
  return result;
}

function getAllMovies(array) {
  let result = [];
  array.forEach((movie) => result.push(movie.title));
  return result;
}

function getMoviesFromDirector(array, director) {
  let result = [];
  result = array.filter((movie) => movie.director === director);
  return result;
}

function moviesAverageOfDirector(array, director) {
  let result = [];
  result = array.filter((movie) => movie.director === director);
  let average =
    result.reduce((acc, movie) => acc + parseFloat(movie.score), 0) /
    result.length;
  return parseFloat(average.toFixed(2));
}

function orderAlphabetically(array) {
  let result = [];
  let copy = [...array];
  copy.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  copy.forEach((movie) => result.push(movie.title));
  return result.slice(0, 20);
}

function orderByYear(array) {
  let copy = [...array];
  copy.sort((a, b) =>
    a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title)
  );
  return copy;
}

function orderByGenre(array) {
  let result = [];
  array.forEach((movie) =>
    movie.genre.forEach((genre) =>
      !result.includes(genre) ? result.push(genre) : null
    )
  );

  return result;
}
function moviesByGenre(array, genre) {
  let result = array.filter((movie) => movie.genre.includes(genre));
  return result;
}
function moviesAverageByCategory(array, genre) {
  copy = moviesByGenre(array, genre);
  let average =
    copy.reduce((acc, movie) => acc + parseFloat(movie.score), 0) / copy.length;
  return parseFloat(average.toFixed(2));
}

function hoursToMinutes(array) {
  let result = [];
  array.map((movie) => {
    let hours = movie.duration.split('h')[0];
    let minutes;
    if (hours.length !== 2) {
      minutes = movie.duration.split('h')[1].split('min')[0];
    }
    result.push({
      ...movie,
      duration: minutes
        ? parseInt(hours * 60) + parseInt(minutes)
        : parseInt(hours) * 60
    });
  });
  return result;
}


function moviesByYear(array, year) {
  let result = array.filter((movie) => movie.year === year);
  return result;
}
function bestFilmOfYear(array, year) {
  let result = moviesByYear(array, year);
  let best = Math.max(...result.map((movie) => movie.score));
  return result.filter((movie) => movie.score === best);
}

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
    moviesByYear,
    orderByYear,
    bestFilmOfYear
  };
}
