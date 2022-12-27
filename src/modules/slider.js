'use strict'

	; (function () {

		// images src
		let src1 = 'img/sliders/first.png';
		let src2 = 'img/sliders/second.png';
		let src3 = 'img/sliders/third.png';
		let array = [src1, src2, src3];


		// navigation
		let left = document.querySelector('.slider__left');
		let right = document.querySelector('.slider__right');
		let navs = [...(document.querySelector('.slider__navigation').children)];

		let imageWraper = document.querySelector('.slider__imageWraper');

		// default image
		let image = document.createElement('img');
		image.setAttribute('src', 'img/sliders/first.png');
		imageWraper.appendChild(image);


		let count = 0;
		left.addEventListener('click', function () {
			count -= 1;
			if (count < 0) {
				count = 2;
			}

			changeClasses(count)
			changeImage();
		})
		right.addEventListener('click', function () {
			count += 1;
			if (count > 2) {
				count = 0;
			}

			changeClasses(count)
			changeImage();
		})


		navs.forEach((span, index) => {
			span.addEventListener('click', () => {

				navs.forEach((elem, id) => {
					if (id != index) {
						elem.classList.remove('slider__active');
					}
				})

				count = index;

				span.classList.add('slider__active');

				changeImage();
			})
		});


		function changeImage() {
			let newImage = document.createElement('img');
			newImage.setAttribute('src', array[count]);

			let oldImage = document.querySelector('.slider__imageWraper img');
			oldImage.remove();

			imageWraper.appendChild(newImage);
		}


		function changeClasses(count) {
			for (let nav of navs) {
				nav.classList.remove('slider__active');
			}

			navs[count].classList.add('slider__active');
		}
	})();