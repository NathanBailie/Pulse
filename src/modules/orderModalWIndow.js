'use strict'

	; (function () {
		let modal = document.querySelector('.modal')
		let form = document.querySelector('.modal__form');
		let title = document.querySelector('.modal__window h2');
		let subTitle = document.querySelector('.modal__window h3');
		let button = document.querySelector('.modal__button');

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

		let cardButtons = document.querySelectorAll('.catalogue__card button');

		for (let cardButton of cardButtons) {
			cardButton.addEventListener('click', () => {
				modal.style.display = 'block';
				title.textContent = 'Ваш заказ:';
				subTitle.textContent = cardButton.closest('.catalogue__card').querySelector('h4').textContent;
				button.textContent = 'купить';
			})
		}
	})();