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

	//Smooth Scroll
	$('a').smoothScroll();
	
	//AOS Animation
	AOS.init();

	
});

