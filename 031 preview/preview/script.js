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