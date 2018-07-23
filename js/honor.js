var galleryTop = new Swiper('.gallery-top', {
  loop: true,
  loopedSlides: 5,
  autoplay:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  loop: true,
  loopedSlides: 5,
  centeredSlides: true,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
