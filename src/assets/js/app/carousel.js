var carousel = $(".carousel-slider")
carousel.slick({
  adaptiveHeight: true,
  lazyLoad:"ondemand",
  arrows:true,
  dots:true,
  speed:600,
  autoplay: true,
  autoplaySpeed:4000,
  infinite: true,
  appendArrows: $('.carousel-controls'),
  prevArrow: '<button class="slick-prev"><i class="icomoon icon-chevron-left"></i></button>',
  nextArrow: '<button class="slick-next"><i class="icomoon icon-chevron-right"></i></button>',
  cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"
});