$(document).ready(function(){
	
  $(".slider-carousel").owlCarousel({
  		loop: true,
  		nav: true,
  		items: 3,
  		center: true,
  		smartSpeed: 700,
  		navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
  		responsiveClass: true,
  		responsive: {
  			0: {
  				items: 1
  			},
  			1200: {
  				items: 1
  			}
  		}
  });
  
  jQuery('section, .s-item').addClass("hidden").viewportChecker({
	classToAdd: 'visible animated fadeInLeft',
	offset: 100
	});
});
