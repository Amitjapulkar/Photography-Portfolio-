$(document).ready(function(){
 //For scrolling Down Start------------------------------
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
 //For scrolling down ended------------------------>
    
      
    
  // Scrolling to top start----------------------->
    $(function(){
 
	$(document).on( 'scroll', function(){
 
		if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
 $('.scroll-top-wrapper').on('click',function(){
            $('html, body').animate({scrollTop: $(".intro").offset().top}, 2000);
 });
      
      
    //scroll to top end------------------>
    
});  
  
  
  
});
});