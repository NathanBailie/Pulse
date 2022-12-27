'use strict'

	; (function () {
		let modal = document.querySelector('.modal');
		let form = document.querySelector('.modal__form');
		let call = document.querySelector('.main__button1');
		let consultation = document.querySelector('.main__button2');
		let close = modal.querySelector('.modal__close');

		let name = document.querySelector('.modal__name');
		let phone = document.querySelector('.modal__phone');
		let email = document.querySelector('.modal__email');

		form.addEventListener('submit', function (e) {
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

			this.submit();
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