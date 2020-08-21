$(document).ready(function(){
	$('.single-slide-active').owlCarousel({
	    loop:true,
	    nav:false,
	    dots: false,
	    autoplay:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
	//AOS Animation
	AOS.init();

	// Counter Up
	
	$('.counter').counterUp({
		delay: 10,
		 time: 3000
	});

	
});

