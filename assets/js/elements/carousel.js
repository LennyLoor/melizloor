$(document).ready(() => {
    $('.owl-carousel').owlCarousel({
      autoWidth: true,
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
      ],
      autoplay: true, 
      slideTransition: 'linear',
      autoplayTimeout: 1000,
      autoplaySpeed: 1000,
      autoplayHoverPause: false,
      animateOut: 'slideOutDown',
      animateIn: 'flipInX'
    })
  });
   