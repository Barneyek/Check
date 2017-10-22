  $(document).ready(function () {
      var menu = $('.menu');
      var origOffsetY = menu.offset().top;

      function scroll() {
          if ($(window).scrollTop() >= origOffsetY) {
              $('.menu').addClass('sticky');
              $('.damian').addClass('menu-padding');
          } else {
              $('.menu').removeClass('sticky');
              $('.damian').removeClass('menu-padding');
          }
      }
      document.onscroll = scroll;
  });
