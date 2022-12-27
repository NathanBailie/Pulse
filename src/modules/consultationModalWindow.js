'use strict'

	; (function () {
		let modal = document.querySelector('.modal');
		let call = document.querySelector('.main__button1');
		let consultation = document.querySelector('.main__button2');
		let close = modal.querySelector('.modal__close');


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