'use strict';














/* ************        ООП           *********************** */
/*
//let str = 'some';
//let strObj = new String(str);

//console.log(typeof (str));
//console.log(typeof (strObj));

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function () {
		console.log('Hello');

	}
};

const jonh = Object.create(soldier); //!!

//const jonh = {
//	health: 100
//};
//jonh.__proto__ = soldier; // Не используется!!!
Object.setPrototypeOf(jonh, soldier); //!!

//console.log(jonh.armor);
jonh.sayHello();
*/



/* ***** Передача по ссылке или по значению ************************* */

/*let a = 5,
	b = a;

b = b + 5;

const obj = {
	a: 5,
	b: 1
};

const copy = obj; //Ссылку

copy.a = 10;
console.log(copy);
console.log(obj);*/

/*function copy(mainObj) {
	let objCopy = {};
	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
}
const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;
//console.log(numbers);
//console.log(newNumbers);



const add = {
	d: 17,
	e: 20
};
//console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);
clone.d = 20;
//console.log(add);
//console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();//  !!

newArray[1] = 'oops';
console.log(newArray);
console.log(oldArray);


const video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['wordpress', 'livejournal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook'];//  !!
console.log(internet);


function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
const num = [2, 5, 7];
log(...num);


const array = ['a', 'b'];
const newAarray = [...array];

const q = {
	one: 1,
	two: 2
}
const newObj = {
	...q
};
console.log(newObj);*/


/* ********************** Массивы ************************* */

/*const arr = [2, 13, 26, 8, 10];
//arr.sort();
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
	return a - b;
};*/
//arr.pop();
//arr.push(10)
//console.log(arr);
//for (let i = 0; i < arr.length; i++) {
//	console.log(arr[i]);
//}

/*for (let value of arr) {
	console.log(value);
}*/

/*const str = prompt("", "");
const product = str.split(", ");
product.sort();
console.log(product);
console.log(product.join("; "));*/


//arr[99] = 0;
//console.log(arr.length);
//console.log(arr);

//arr.forEach(function (item, i, arr) {
//	console.log(`${i}: ${item} внутри массива ${arr}`);
//})




/* *******************    ОБЪЕКТЫ    *************** */
/*const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function () {
		console.log("Test");
	}
}
options.makeTest();
const {
	border,
	bg
} = options.colors;
console.log(border);*/

//console.log(options['colors']['border']) 
/*delete options.name;
console.log(options);*/


/*let counter = 0;
for (let key in options) {
	if (typeof (options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
		counter++;

	}
}
console.log(counter);*/


/*let counter = 0;
for (let key in options) {
	counter++;
}
console.log(counter);*/
//console.log(Object.keys(options).length); //  !!




/* ***************************************************** */

/*function learnJs(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}

function done() {
	console.log('Я прошел этот урок!');
}
learnJs('JavaScript', done);*/

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





/********				****	TOP	****			***********/






let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,

	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function () {
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
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов!');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			console.log('Вы классический зритель!');
		} else if (personalMovieDB.count > 30) {
			console.log('Вы киноман!');
		} else {
			console.log('Произошла ошибка!');
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i++}?`, '');
			personalMovieDB.genres[i - 1] = genre;
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	}

};

//personalMovieDB.showMyDB(personalMovieDB.privat);

//console.log(personalMovieDB.toggleVisibleMyDB());

//console.log();
//personalMovieDB.showMyDB(personalMovieDB.toggleVisibleMyDB);
//personalMovieDB.showMyDB(personalMovieDB.privat);



















/*let numberOfFilm;

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
writeYourGenres();*/



/*function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		let genre = prompt(`Ваш любимый жанр под номером ${++i}?`, '')
			--i;
		personalMovieDB.genres[i] = genre;
		console.log(personalMovieDB);

	}
}
writeYourGenres();*/