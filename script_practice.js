
let numbersOfFilms;
function start() {
    numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 0);
    while (numbersOfFilms == null || numbersOfFilms == undefined || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 0);
    }
}
function setMovieInfo() {
    let lastMovie, lastPoint;
    for (let i = 0; i <= 1;) {
        lastMovie = prompt("Один из последних просмотренных фильмов?");
        lastPoint = prompt("На сколько оцените фильм?");
        if (lastMovie === null || lastPoint === null || lastMovie === "" || lastPoint === "" || lastMovie.length > 50 || lastMovie.length == 0)
            continue;
        personalMovieDB.movies[lastMovie] = lastPoint;
        i++;
    }
}
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено доволи мало фильмов...');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель...');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман...');
    };
}
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
function writeYourGennres(arrayGenres) {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        arrayGenres.push(genre);
    }
    console.log(personalMovieDB);

}
start();
let personalMovieDB = {
    count: numbersOfFilms,
    movies: [],
    actors: [],
    genres: [],
    privat: false
};
setMovieInfo();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);
writeYourGennres(personalMovieDB.genres);

