const numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 0);
let personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};
let lastMovie, lastPoint;
for (let i = 0; i <= 1;) {
    lastMovie = prompt("Один из последних просмотренных фильмов?");
    lastPoint = prompt("На сколько оцените фильм?");
    if (lastMovie === null || lastPoint === null || lastMovie === "" || lastPoint === "" || lastMovie.length > 50 || lastMovie.length == 0)
        continue;
    personalMovieDB.movies[lastMovie] = lastPoint;
    i++;
}
if (personalMovieDB.count < 10) {
    console.log('Просмотрено доволи мало фильмов...');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель...');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман...');
};