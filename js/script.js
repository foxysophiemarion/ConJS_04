// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. 
// То есть при печати в input'е тег span также должен меняться.
const input = document.querySelector('#from'); // Получаем поле с id="from"
const span = document.querySelector('span'); // Получаем элемент span
input.addEventListener('input', () => {
	span.textContent = input.value; // выводим текст из input в span
});

// 2 При клике на кнопку с классом messageBtn необходимо элементу с классом message:
//- добавить два класса: animate_animated и animate_fadeInLeftBig
//- поставить данному элементу стиль visibility в значение 'visible'.
const messageBtn = document.querySelector('.messageBtn'); // Получаем кнопку с классом messageBtn
messageBtn.addEventListener('click', () => {
	const message = document.querySelector('.message'); // Получаем элемент с классом message
	message.classList.add('animate_animated', 'animate_fadeInLeftBig'); // добавить класс animate_animated и animate_fadeInLeftBig
	message.style.visibility = 'visible'; // меняем стиль visibility в значение 'visible'
});

//3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме.
// Если какое-либо поле не заполнено, форма не должна отправляться,
// также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям).
// Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector('form'); // Получаем форму
const formControls = document.querySelectorAll('.form-control');
// МОЕ РЕШЕНИЕ
// Проверка формы при отправке
form.addEventListener('submit', function (e) {
	let isValid = true;
	formControls.forEach(function (input) {
		if (!input.value) {
			isValid = false;
			input.classList.add('error');
		} else {
			input.classList.remove('error');
		}
	});
	if (!isValid) {
		e.preventDefault();
	}
});
// Дополнительная проверка при вводе
formControls.forEach(input => {
	input.addEventListener('input', function () {
		if (!input.value) {
			input.classList.add('error');
		} else {
			input.classList.remove('error');
		}
	}); // Запихивал это в forEach внутри 'submit', но решил избежать вложенности
});
// P.S. Обожаю JS За такую гибкость, даже если у меня получилось "МАСЛО МАСЛЯНОЕ"


// Так же попробовал воспользоваться подсказками GigaCode от Сбера и получилось так:
/*function validateInput(input) {
if (!input.value) {
input.classList.add('error'); // Подсветка при пустом поле
} else {
input.classList.remove('error'); // Убрать подсветку, если поле заполнено
}
}
// Добавляем обработчик для каждого инпута
formControls.forEach(function (input) {
input.addEventListener('input', function () {
validateInput(input);
});
});
// Проверка формы при отправке
form.addEventListener('submit', function (e) {
let isValid = true;
formControls.forEach(function (input) {
validateInput(input); // Проверяем каждое поле
if (!input.value) {
isValid = false; // Если есть пустые поля, помечаем форму как невалидную
}
});
if (!isValid) {
e.preventDefault(); // Предотварить отправку формы если есть ошибки
}
});*/