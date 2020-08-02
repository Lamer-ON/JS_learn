'use strict';




//!! 33 Практика._События на странице_____***


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
		for (let i = 1; i < 2; i++) {
			//for (let i = 1; i <= 3; i++) {
			//let genre = prompt(`Ваш любимый жанр под номером ${i}?`, '');
			//if (genre === '' || genre == null) {
			//	console.log('Вы ввели некорректные данные');
			//	i--;
			//} else {
			//	personalMovieDB.genres[i - 1] = genre;
			//}

			let genre = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

			if (genre === '' || genre == null) {
				console.log('Вы ввели некорректные данные');
				i--;
			} else {
				personalMovieDB.genres = genre.split(', ');
				personalMovieDB.genres.sort();
			}

		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр №${i+1} это ${item}`);
		});

	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	}

}

let input = prompt('Добавьте свой фильм');
personalMovieDB.movies[0] = input;
console.log(personalMovieDB);

//personalMovieDB.writeYourGenres();
//console.log(personalMovieDB);

//personalMovieDB.showMyDB(personalMovieDB.privat);
//console.log(personalMovieDB.toggleVisibleMyDB());



//!! 32 Навигация по DOM-эл-там data-атрибуты		****
document.addEventListener('DOMContentLoaded', () => {});

/*console.log(document.head);
console.log(document.documentElement);
console.log(document.body.childNodes);
console.log(document.body.firstChild); // Node
console.log(document.body.firstElementChild); // элемент
console.log(document.body.lastChild);
console.log(document.body.lastElementChild);


document.querySelector('#current').parentNode.parentNode; // родитель.родитель
document.querySelector('#current').parentNode;
document.querySelector('#current').parentElement; //!! Получаем эл-т

document.querySelector('[data-current="3"]').previousSibling;

document.querySelector('[data-current="3"]').nextElementSibling; //!! Получаем эл-т а не Node
document.querySelector('[data-current="3"]').previousSibling;

for (let node of document.body.childNodes) {
	if (node.nodeName == '#text') { //!!		.nodeName 
		continue;
	}
	console.log(node);
}*/




/************* События и их обработчики ******************/
/*const overlay = document.querySelector('.overlay'),
	btns = document.querySelectorAll('button'),
	btn = overlay.querySelector('button');

//btn.onclick = function () {
//	alert('Click');
//};  //!!		Не вариант

//btn.addEventListener('click', () => {
//	alert('Click');
//});

//btn.addEventListener('click', () => {
//	alert('Second click');
//});

//btn.addEventListener('mouseenter', () => {
//	console.log('Hover');
//});

//btn.addEventListener('mouseenter', (event) => {
//console.log(event);
//	console.log(event.target); //!! доступ к эл-ту события
//	event.target.remove();
//console.log('Hover');
//}); 

//let i = 0;
//const deleteElement = (event) => {
//	console.log(event.target);
//	i++;
//	if (i == 1) {
//		btn.removeEventListener('click', deleteElement);
//	}
//};
//btn.addEventListener('click', deleteElement);

const deleteElement = (event) => {
	console.log(event.currentTarget);
	console.log(event.type);
	//!! Всплытие событий. Обработчик сначала срабатывает на самом вложеном, затем на родителе и выше
};
//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);


//btns.forEach(item => { //!! item это каждая кнопка внутри btns
//	item.addEventListener('click', deleteElement);
//!! {once:true}  срабатывани етолько 1 раз !!!!
//	item.addEventListener('click', deleteElement, {once:true});
//});
//!! 2-й вариант с   for..of
//for (let item of btns) {
//	item.addEventListener('click', deleteElement);
//};


const link = document.querySelector('a');
link.addEventListener('click', (event) => {
	event.preventDefault(); //!! Отмена стандартного поведения
	console.log(event.target);
});*/



/**********  Задание Действие с эл-тами страницы  ****/
/*
const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};

const adv = document.querySelectorAll('.promo__adv img'),
	poster = document.querySelector('.promo__bg'),
	genre = poster.querySelector('.promo__genre'),
	movieList = document.querySelector('.promo__interactive-list');


adv.forEach(item => {
	item.remove();
});

//adv.forEach(function (item) {
//	item.remove();
//});

genre.textContent = 'драма';
poster.style.backgroundImage = "url('img/bg.jpg')";
//poster.style.background = "url(img/bg.jpg)";

movieList.innerHTML = ''; //!!

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
	movieList.innerHTML += `
	<li class="promo__interactive-item">${i+1} ${film}
	<div class="delete"></div>
   </li>
	`
});
//console.log(poster.innerHTML); //!! получение информации о poster. Редко

movielist = document.querySelectorAll('.promo__interactive-list');
movielist.forEach(item => {
	item.remove();
});
*/



/*************  Действие с эл-тами страницы  ******************/
/*const box = document.getElementById('box'),
	btns = document.getElementsByTagName('button'),
	circles = document.getElementsByClassName('circle'),
	wrapper = document.querySelector('.wrapper'),
	hearts = document.querySelectorAll('.heart'), //!!		forEach
	oneHeart = document.querySelector('.heart');

	//const hearts = wrapper.querySelectorAll('.heart'); //!! т.к. hearts внутри  div с классом "wrapper"

box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.cssText = 'background-color:blue; width:500px';
box.style.cssText = `background-color: blue; width: ${num}px`;//!!   cssText

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

for (let i = 0; i < hearts.length; i++) {
	hearts[i].style.backgroundColor = 'blue';
}

heart.forEach(item => {
	item.style.backgroundColor = 'blue';
});

const text = document.createTextNode('Тут был я'); // редко использ.

const div = document.createElement('div'); // этот div есть только в JS
div.classList.add('class-black');//!!---classList

document.body.append(div); //вставили div в конец body
document.querySelector('.wrapper').append(div); //вставили div в конец div.wrapper

wrapper.append(div);
wrapper.appendChild(div);

wrapper.prepend(div);//вставили div в начало div.wrapper

hearts[0].before(div); //перед первым hearts появился div
wrapper.insertBefore(div, hearts[0]); //перед первым hearts появился div

hearts[0].after(div); //после первого hearts появился div

circles[0].remove(); //  Удален первый  circles из документа
wrapper.removeChild(hearts[0]);

hearts[0].replaceWith(circles[0]); // замена hearts на circles
wrapper.replaceChild(circles[0], hearts[0]);*/


//const div = document.getElementsByTagName('div');
//const div = document.querySelector('div');
//console.log(div);

//div.textContent = 'HeLLo';
//div.innerHTML = "<h1>Hello World</h1>"; //!!

//div.insertAdjacentHTML("beforebegin", '<h2> Hellooo </h2>');
//div.insertAdjacentHTML("beforeend", '<h2> Hellooo </h2>');

//div.insertAdjacentHTML("afterbegin", '<h2> Hellooo </h2>');
//div.insertAdjacentHTML("afterend", '<h2> Hellooo </h2>'); //!!




/*************  Получение эл-тов страницы  ******************/
/*const box = document.getElementById('box_id');

const btns = document.getElementsByTagName('button'); //псевдо--массив
const btns = document.getElementsByTagName('button')[1];

const circles = document.getElementsByClassName('circle');

const hearts = document.querySelectorAll('.heart'); //!!		forEach
hearts.forEach(item => {
	console.log(item);
})

const oneHeart = document.querySelector('.heart'); //первый элемент с .heart
const oneHeart = document.querySelector('p');
console.log(oneHeart);*/


/* ************  Динамическая типизация  *********************** */
/*
// To String
console.log(typeof (String(null)));
console.log(typeof (String(4)));

//Конкатенация
console.log(typeof (5 + ''));
console.log(typeof (null + ''));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number
//  1)
console.log(typeof (Number('4')));

//   2)   Унарный плюс
console.log(typeof (+'4'));

// 3)
console.log(typeof (parseInt('15px', 10)));

let answ = +prompt('Hello', '');

// To boolean
//  0, '', null, undefined, NaN;  //!! FALSE
//  1)
let switcher = null;
if (switcher) {
	console.log('Working..')
}


switcher = 1;
if (switcher) {
	console.log('Working..good')
}
//  2)
console.log(typeof (Boolean('4')));
//  3)
console.log(typeof (!!'44444')); //!! редкость

*/


/* *********************************** */

/*
const arr = [2, 13, 26, 8, 10],
	sorted = arr.sort(compareNum);

function compareNum(a, b) { //						!!
	return a - b;
};*/

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






/********				****	TOP	****			***********/
/*
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
		for (let i = 1; i < 2; i++) {
			//for (let i = 1; i <= 3; i++) {
			//let genre = prompt(`Ваш любимый жанр под номером ${i}?`, '');
			//if (genre === '' || genre == null) {
			//	console.log('Вы ввели некорректные данные');
			//	i--;
			//} else {
			//	personalMovieDB.genres[i - 1] = genre;
			//}

			let genre = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

			if (genre === '' || genre == null) {
				console.log('Вы ввели некорректные данные');
				i--;
			} else {
				personalMovieDB.genres = genre.split(', ');
				personalMovieDB.genres.sort();
			}

		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр №${i+1} это ${item}`);
		});

	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	}

}

personalMovieDB.writeYourGenres();
console.log(personalMovieDB);

//personalMovieDB.showMyDB(personalMovieDB.privat);
//console.log(personalMovieDB.toggleVisibleMyDB());*/