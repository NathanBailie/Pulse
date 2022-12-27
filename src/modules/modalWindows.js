'use strict'

function onValidate(e, prefix) {
	let name = document.querySelector(`.${prefix}__name`);
	let phone = document.querySelector(`.${prefix}__phone`);
	let email = document.querySelector(`.${prefix}__email`);

	e.preventDefault();
	if (!/^[а-яё]|[a-z]|\s+$/.test(name.value)) {
		alert('Поле "имя" заполнено некорректно');
		return;
	}

	if (!/^\+?\d+$/.test(phone.value)) {
		alert('Поле "телефон" заполнено некорректно');
		return;
	}
	if (!/^[a-z\-\.]+@[a-z]+\.[a-z\-\.]+$/.test(email.value)) {
		alert('Поле "email" заполнено некорректно');
		return;
	}

	return true;
};


// Call modal window
; (function () {
	let modal = document.querySelector('.modal');
	let form = document.querySelector('.modal__form');
	let call = document.querySelector('.main__button1');
	let consultation = document.querySelector('.main__button2');
	let close = modal.querySelector('.modal__close');

	form.addEventListener('submit', function (e) {
		if (onValidate(e, 'modal')) {
			this.submit();
		};
	});

	call.addEventListener('click', () => {
		modal.style.display = 'block';
		button.textContent = 'Заказать звонок';
	});

	consultation.addEventListener('click', () => {
		modal.style.display = 'block';
		button.textContent = 'Заказать консультацию';
	});

	close.addEventListener('click', () => {
		modal.style.display = 'none';
	});
})();


// Consultation modal window
; (function () {
	let form = document.querySelector('.consultation__form');

	form.addEventListener('submit', function (e) {
		if (onValidate(e, 'consultation')) {
			this.submit();
		};
	});
})();


// Order modal window
; (function () {
	let modal = document.querySelector('.modal')
	let form = document.querySelector('.modal__form');
	let title = document.querySelector('.modal__window h2');
	let subTitle = document.querySelector('.modal__window h3');
	let button = document.querySelector('.modal__button');
	let cardButtons = document.querySelectorAll('.catalogue__card button');

	form.addEventListener('submit', function (e) {
		if (onValidate(e, 'modal')) {
			this.submit();
		};
	});

	for (let cardButton of cardButtons) {
		cardButton.addEventListener('click', () => {
			modal.style.display = 'block';
			title.textContent = 'Ваш заказ:';
			subTitle.textContent = cardButton.closest('.catalogue__card').querySelector('h4').textContent;
			button.textContent = 'купить';
		})
	}
})();