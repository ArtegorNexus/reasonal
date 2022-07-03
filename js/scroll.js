"use strict"

const animItems = document.querySelectorAll('._anim-item');

window.addEventListener('scroll', animOnScroll);
function animOnScroll() {
	for (let index = 0; index < animItems.length; index++) {
		const animItem = animItems[index];
		const animItemHeight = animItem.offsetHeight;
		const animItemOffsetTop = offset(animItem).top;
		const startIndex = 3; // как бы деление элемента на такое количество секции. Значение используется при вычислении, когда будет происходить анимация.

		let animPoint = window.innerHeight - animItemHeight / startIndex; // здесь мы высчитываем момент, когда будет производиться анимация. из высоты доступного окна браузера вычитаем высоту элемента, поделённого на стартИндекс.
		if (animItemHeight > window.innerHeight) {
			animPoint = window.innerHeight = window.innerHeight / startIndex; // в случае, если высота элемента больше видимого окна браузера, мы высчитываем именно 1/стартИндекс от экрана.
		}

		if ((pageYOffset > animItemOffsetTop - animPoint) && pageYOffset < (animItemOffsetTop + animItemHeight)) {
			animItem.classList.add('_active');
		} else {
			if (!animItem.classList.contains('_no-anim-back')) {
				animItem.classList.remove('_active');
			}
		}
	}
}

function offset(elem) {
	const rect = elem.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return {top: rect.top + scrollTop, left: rect.left + scrollLeft}; // Функция для высчитывания отступа элемента от верхней границы кроссбраузерно
}

setTimeout(() => {
	animOnScroll();
}, 500);