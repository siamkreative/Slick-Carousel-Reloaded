(function ($) {
	"use strict";

	$('.wpscr_slider').each(function (index, el) {

		// Get slider parameters based on its ID
		var id = $(el).data('id');
		var options = wpscr.sliders[id];

		// Initialiaze the slider
		$(el).slick({
			slide: '.wpscr_slide',
			dots: options.dots,
			infinite: options.infinite,
			arrows: options.arrows,
			speed: options.speed,
			autoplay: options.autoplay,
			fade: options.fade,
			autoplaySpeed: options.autoplaySpeed,
			slidesToShow: options.slidesToShow,
			slidesToScroll: options.slidesToScroll,
			adaptiveHeight: options.adaptiveHeight,
			lazyLoad: options.lazyLoad
		});
	});

}(jQuery));