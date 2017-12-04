  $(document).ready(function () {
      var menu = $('.Top_bar');
      var origOffsetY = menu.offset().top;

      function scroll() {
          if ($(window).scrollTop() >= origOffsetY) {
              $('.Top_bar').addClass('sticky');
//              $('.damian').addClass('menu-padding');
          } else {
              $('.Top_bar').removeClass('sticky');
//              $('.damian').removeClass('menu-padding');
          }
      }
      document.onscroll = scroll;
  });
