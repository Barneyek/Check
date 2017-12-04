 //Hover
jQuery(document).ready(function() {
            $(' .hoverPortfolio > ul > li ').each(function() {
                $(this).hoverdir();
            });
        });
//skillbar
 jQuery(document).ready(function() {
            jQuery('.skillbar').each(function() {
                jQuery(this).find('.skillbar-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 3000);
            });
        });
//navbar
 jQuery(document).ready(function() {
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
//burger
 jQuery(document).ready(function() {
            $("#hamburger").on('click', function() {
                $(this).toggleClass("open");
            });
        });