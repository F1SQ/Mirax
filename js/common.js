$(function () {
  //fancybox
  Fancybox.bind("[data-fancybox]", {
    infinite: true,
    dragToClose: false,
    trapFocus: false,
    placeFocusBack: false,
    hideScrollbar: false,
  });

  const mainSlider = new Swiper(".main-slider", {
    loop: true,
    speed: 700,
    grabCursor: true,
    observer: true,
    autoHeight: true,

    // Navigation arrows
    navigation: {
      nextEl: ".main-button--next",
      prevEl: ".main-button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  const useSlider = new Swiper(".use-slider", {
    loop: true,
    speed: 700,
    grabCursor: true,
    observer: true,
    autoHeight: true,
    slidesPerView: 4,
    spaceBetween: 7,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      425: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".use-button--next",
      prevEl: ".use-button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  const partnersSlider = new Swiper(".partners-slider", {
    loop: true,
    speed: 700,
    grabCursor: true,
    observer: true,
    autoHeight: true,
    slidesPerView: 4,
    spaceBetween: 22,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      425: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".partners-slider__button--next",
      prevEl: ".partners-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  const uncosSlider = new Swiper(".uncos-slider", {
    loop: true,
    speed: 700,
    grabCursor: true,
    observer: true,
    autoHeight: true,
    slidesPerView: 1,
    // spaceBetween: 22,

    // Navigation arrows
    navigation: {
      nextEl: ".uncos-slider__button--next",
      prevEl: ".uncos-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    pagination: {
      el: ".uncos-slider__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  var nav = $(".header");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 136) {
      nav.addClass("header_scroll");
    } else {
      nav.removeClass("header_scroll");
    }
  });

  let menuButton = document.querySelector(".header-burger");
  let hiddenMenu = document.querySelector(".hidden-menu");
  // let hiddenMenuNav = document.querySelectorAll('.hidden-menu__nav a');

  menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("_active");
    hiddenMenu.classList.toggle("_visible");
  });

  // hiddenMenuNav.forEach((item, i) => {
  // 	item.addEventListener('click', () => {
  // 			menuButton.classList.remove('_active');
  // 			hiddenMenu.classList.remove('_visible');
  // 	});
  // });

  $(".hidden-menu__nav > ul > li:first-child a").click(function (e) {
    if (!$(this).hasClass("active")) {
      e.preventDefault();
      $(this).next().slideDown();
      $(this).addClass("active");
    }
  });
});
