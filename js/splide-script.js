document.addEventListener('DOMContentLoaded', function () {
    new Splide( '#image-slider', {
        type:  'loop',
        autoplay: true,
	    pauseOnHover: false,
    }).mount();
});