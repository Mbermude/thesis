$(window).scroll(function() {
    if ($(document).scrollTop() > 220) {
      $('.aboveheader').addClass('shrink');
      $('.site-header').addClass('move');
      $('.site-nav').addClass('move');
      $('#sidebar').addClass('move');
    } else {
      $('.aboveheader').removeClass('shrink');
      $('.site-header').removeClass('move');
      $('.site-nav').removeClass('move');
      $('#sidebar').removeClass('move');
    }
  });