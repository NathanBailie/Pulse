'use strict'

	; (function () {
		let tabs = [...document.querySelector('.catalogue__tabs').children];
		let cards = document.querySelectorAll('.catalogue__cards');


		tabs.forEach((elem, index) => {
			elem.addEventListener('click', () => {

				tabs.forEach((tab, id) => {
					if (id != index) {
						tab.classList.remove('catalogue__tab_active');
					}
				})

				cards.forEach((cardList, idx) => {
					if (idx != index) {
						cardList.classList.remove('catalogue__cards_active');
					} else {
						cardList.classList.add('catalogue__cards_active');
					}
				})

				elem.classList.add('catalogue__tab_active');
			})
		});
	})();