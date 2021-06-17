$(function() {
    $('#rec-slick').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      arrows: false,
      centerMode: true,
      centerPadding: '100px',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
            slidesToControll: 1,
          }
        },
      ]
    });
});

$(function() {
    $('#nav-btn').on('click', function() {
      $(this).toggleClass('-acitve');
      $('#nav').toggleClass('-acitve');
    });
});

$(function() {
  $('.js-accordion').on('click', function() {
    $(this).next().slideToggle();
  });
});


$(function () {
  new WOW().init();
});
