$(document).ready(function(){
  // hamburger menu
  $('.nav-burger').click(function(event){
      $('.nav-burger, .nav-menu').toggleClass('active');
      $('body').toggleClass('lock');
      $('.nav-list').click(function(event) {
          $('.nav-burger,.nav-menu').removeClass('active');
          $('body').removeClass('lock');
      });
  });
// hamburger menu end 
// skills 
    let $developmentWrapper = $('.development-wrapper');
    let developmentIsVisible = false;

  $(window).scroll( function(){

    let bottom_of_window = $(window).scrollTop() + $(window).height();
    let middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;

    if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){

      $('.skills-bar-container li').each( function(){

        let $barContainer = $(this).find('.bar-container');
        let dataPercent = parseInt($barContainer.data('percent'));
        let elem = $(this).find('.progressbar');
        let percent = $(this).find('.percent');
        let width = 0;

        let id = setInterval(frame, 15);

        function frame() {
          if (width >= dataPercent) {
              clearInterval(id);
          } else {
            width++;
            elem.css("width", width+"%");
            percent.html(width+" %");
          }
        }
      });
      developmentIsVisible = true;
    }
  });
  //skills end
  //	top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 700) {
          $('.top-btn').fadeIn()
      } else {
          $('.top-btn').fadeOut()
      }
  });
  $('.top-btn').click(function () {
      $('html, body').animate({
          scrollTop: 0
      }, 800)
  });
});
// top button end


