import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.js';

export function initSlider() {
  document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;

    if (isMobile) {
      $('.image-wrapper').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
      });
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    $('.slider').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.custom-prev'),
      nextArrow: $('.custom-next'),
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
}
