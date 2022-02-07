$(function() {

	//fancybox
    Fancybox.bind("[data-fancybox]", {
		infinite: true,
		dragToClose: false,
		trapFocus: false,
		placeFocusBack: false,
		hideScrollbar: false,
  });


		const mainSlider = new Swiper('.main-slider', {

  loop: true,
	speed: 700,
	grabCursor: true,
	observer: true,
  autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: '.main-button--next',
    prevEl: '.main-button--prev',
  },
	keyboard: {
        enabled: true,
        onlyInViewport: true,
	},

});

});