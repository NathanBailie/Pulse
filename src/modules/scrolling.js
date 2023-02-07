'use strict'

	; (function () {
		let upChevron = document.querySelector('.chevronUp');
		let clientHeight = document.documentElement.clientHeight;

		upChevron.addEventListener('click', function () {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		});

		window.addEventListener('scroll', function () {
			if (document.documentElement.scrollTop > clientHeight) {
				upChevron.style.display = 'flex';
			} else {
				upChevron.style.display = 'none';

			};
		});
	})();