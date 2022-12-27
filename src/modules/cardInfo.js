'use strict'

	; (function () {
		window.addEventListener('click', (e) => {
			if (e.target.classList.contains('catalogue__link_more')) {
				e.target.closest('.catalogue__wraper').style.transform = 'translateX(-300px)';
			}
			if (e.target.classList.contains('catalogue__link_back')) {
				e.target.closest('.catalogue__wraper').style.transform = 'translateX(0)';
			}
		})
	})();