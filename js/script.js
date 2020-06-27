'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?',' ');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let firstFilm = prompt('Один из последних просмотренных фильмов?',' ');
let firstFilmMark = prompt('На сколько оцените его?',' ');
let secondFilm = prompt('Один из последних просмотренных фильмов?',' ');
let secondFilmMark = prompt('На сколько оцените его?',' ');

personalMovieDB.movies[firstFilm] = firstFilmMark;
personalMovieDB.movies[secondFilm] = secondFilmMark;

console.log(personalMovieDB);