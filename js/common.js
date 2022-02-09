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


	var nav = $('.header');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 136) {
			nav.addClass("header_scroll");
		} else {
			nav.removeClass("header_scroll");
		}
	});

let menuButton = document.querySelector('.header-burger');
let hiddenMenu = document.querySelector('.hidden-menu');
let hiddenMenuNav = document.querySelectorAll('.hidden-menu__nav a');

menuButton.addEventListener('click', function() {
	menuButton.classList.toggle('_active');
	hiddenMenu.classList.toggle('_visible');
});


hiddenMenuNav.forEach((item, i) => {
	item.addEventListener('click', () => {
			menuButton.classList.remove('_active');
			hiddenMenu.classList.remove('_visible');
	});
});





});