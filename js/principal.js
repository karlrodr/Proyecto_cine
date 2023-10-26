$('.owl-carousel').owlCarousel({
  center: true,
  items:2,
  loop:true,
  margin:10,
  rtl:true,
  autoplay: true,
  autoplayTimeout: 2000,
  dots: false,
  responsive:{
      600:{
          items:4
      }
  }
});