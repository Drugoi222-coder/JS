'use strict';

const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start : function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },
    rememberMyFilms : function () {
        for ( let i = 0 ; i < 2 ; i++ ) {
            let a = prompt('Один из последних просмотренных фильмов?','');
            let b = prompt('На сколько оцените его?','');
        
            if ( a != null && b != null  && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel : function (){
        if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB : function (){
        if(personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres : function (){
        for(let i=0 ; i<3;i++){
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${(i+1)}`).toLowerCase();
            if ( personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null){
                i--;
            }
        }
        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Любимый жанр ${(i+1)} - это ${item}`);
        });
    },
    toggleVisibleMyDB : function () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};


personalMovieDB.start();
personalMovieDB.rememberMyFilms(); 
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();