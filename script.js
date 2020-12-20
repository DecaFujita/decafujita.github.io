window.onscroll = () => {
	navOpacity();
};

let nav = document.querySelector(".nav-bar");
let navigationText = document.querySelector('.navigation');

let navOpacity = () => {
	if (window.pageYOffset >= 170) {
		nav.classList.remove("bgOpacityOff");
		nav.classList.add("bgOpacityOn");
		navigationText.classList.add('grayOn');
		navigationText.classList.remove('grayOff');
	} else {
		nav.classList.remove("bgOpacityOn");
		nav.classList.add("bgOpacityOff");
		navigationText.classList.remove('grayOn');
		navigationText.classList.add('grayOff');
	}
};