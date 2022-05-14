const numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 0);
let personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};
const firstlastMovie = prompt("Один из последних просмотренных фильмов?"),
    firstLastPoint = prompt("На сколько оцените фильм?"),
    secondlastMovie = prompt("Один из последних просмотренных фильмов?"),
    secondLastPoint = prompt("На сколько оцените фильм?")
    ;
personalMovieDB.movies[firstlastMovie] = firstLastPoint;
personalMovieDB.movies[secondlastMovie] = secondLastPoint;
console.log(personalMovieDB);