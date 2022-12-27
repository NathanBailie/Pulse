'use strict'

	; (function () {
		let modal = document.querySelector('.modal');
		let title = document.querySelector('.modal__window h2');
		let subTitle = document.querySelector('.modal__window h3');
		let button = document.querySelector('.modal__window button');


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