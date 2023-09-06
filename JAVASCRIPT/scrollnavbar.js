$(document).ready(function() {
  var navHeight = $('#navmain').outerHeight();
  var originalHeight = navHeight * 1.5; // guardamos la altura original del navbar

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
  
    if (scroll >= navHeight) {
      $("#navmain").addClass("scrolled");
      $('#navmain').removeClass('navbar-transparent');
      $('#navmain').addClass('navbar-solid');
    
    } else {
      $("#navmain").removeClass("scrolled");
      $('#navmain').addClass('navbar-transparent');
      $('#navmain').removeClass('navbar-solid');
      
    }
  });
})


