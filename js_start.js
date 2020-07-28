'use strict';

let numberOfFilm;

function start() {
	numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
		numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');

	}
}
start();

let personalMovieDB = {
	count: numberOfFilm,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};



function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцените его?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 10) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('eror');
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов!');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log('Вы классический зритель!');
	} else if (personalMovieDB.count > 30) {
		console.log('Вы киноман!');
	} else {
		console.log('Произошла ошибка!');
	}
}

detectPersonalLevel();


function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i++}?`, '');
		//let genre = prompt(`Ваш любимый жанр под номером ${i++}?`, '');
		personalMovieDB.genres[i - 1] = genre;
	}
}
writeYourGenres();



/*function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		let genre = prompt(`Ваш любимый жанр под номером ${++i}?`, '')
			--i;
		personalMovieDB.genres[i] = genre;
		console.log(personalMovieDB);

	}
}
writeYourGenres();*/






/* ***************************************************** */
/*let numberOfFilm;
do {
	numberOfFilm = prompt('Сколько фильмов вы уже посмотрели?', '');
} while ((numberOfFilm == "") || (numberOfFilm == null) || (numberOfFilm.length > 10));

let personalMovieDB = {
	count: numberOfFilm,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log('Вы классический зритель!');
} else if (personalMovieDB.count > 30) {
	console.log('Вы киноман!');
} else {
	console.log('Произошла ошибка!');
};
for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
		b = prompt('На сколько оцените его?', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 10) {
		personalMovieDB.movies[a] = b;
	} else {
		i--;
	}
}

console.log(personalMovieDB);*/


/*	let lastFilm;
		let lastFilmRating;

		for (let i = 0; i < 2; i++) {
			do {
				lastFilm = prompt('Один из последних просмотренных фильмов?', '');
			} while (lastFilm == "" || lastFilm == null || lastFilm.length > 5);
			lastFilmRating = prompt('На сколько оцените его?', '');

			personalMovieDB.movies[lastFilm] = lastFilmRating;
		};*/







/*let i = 0;
	for (i = 1; i < 10; i++) {
		if (i == 6) {
			console.log('continue');
			//break;
			continue;
		}
		console.log(i);
	}*/


/* ****************************************************** */
/*let counter = 0
setInterval(() => {
	console.log(++counter)
}, 1000);*/


/*let imgMassive = ["img/1.jpg", "img/2.jpg"];
let modal = document.getElementById('modalSlider');
let modalImg = document.getElementById('img01');

function openSlider(funcImg) {
	modal.style.display = 'block';
	modalImg.src = imgMassive[funcImg];
}*/


//let num = 0;
//slide = new Array();
//slide[0] = new Image();
//slide[1] = new Image();
//slide[2] = new Image();
//slide[3] = new Image();
//slide[4] = new Image();
//slide[5] = new Image();

//slide[0].src = "img/1.jpg";
//slide[1].src = "img/2.jpg";
//slide[2].src = "3.jpg";
//slide[3].src = "1p.jpg";
//slide[4].src = "2p.jpg";
//slide[5].src = "3p.jpg";

//function next(n) {
//	if (n == 1) {
//		num++
//		if (num == 6)
//			num = 0;
//	} else {
//		num--;
//		if (num == -1)
//			num = 5;
//	}
//	document.images[0].src = slide[num].src;


//};

/*	let lastFilm;
	let lastFilmRating;

	for (let i = 0; i < 2; i++) {
		do {
			lastFilm = prompt('Один из последних просмотренных фильмов?', '');
		} while (lastFilm == "" || lastFilm == null || lastFilm.length > 5);
		lastFilmRating = prompt('На сколько оцените его?', '');

		personalMovieDB.movies[lastFilm] = lastFilmRating;
	};*/