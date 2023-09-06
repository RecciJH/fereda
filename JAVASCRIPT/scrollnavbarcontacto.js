$(document).ready(function() {
    var navHeight = $('#navmain').outerHeight();
    var originalHeight = navHeight * 1.5; // guardamos la altura original del navbar
  
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
    
      if (scroll >= navHeight) {
        $("#navmain").addClass("scrolled");
        $('#navmain').removeClass('navbar-transparentContact');
        $('#navmain').addClass('navbar-solidContact');
      
      } else {
        $("#navmain").removeClass("scrolled");
        $('#navmain').addClass('navbar-transparentContact');
        $('#navmain').removeClass('navbar-solidContact');
        
      }
    });
  })
  
  
  