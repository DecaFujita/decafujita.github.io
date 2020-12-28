document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-slider' ).mount();
} );

// Auto Crop
// In most cases, source images have different dimensions. By using 'cover' option, they can be displayed in a same size without tiresome cropping work.

// document.addEventListener( 'DOMContentLoaded', function () {
// 	new Splide( '#image-slider', {
// 		'cover'      : true,
// 		'heightRatio': 0.5,
// 	} ).mount();
// } );