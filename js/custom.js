$(function () {
	// STICKY MENU JS HERE
	$(window).scroll(function () {
		var scrollAmount = $(window).scrollTop();
	
		if (scrollAmount > 30) {
		  $(".main_menu").addClass("sticky");
		} 
		else {
		  $(".main_menu").removeClass("sticky");
		}
	  });

	// BANNER SLIDER JS HERE
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				loop:true,
				autoplay:true,
				// autoplaySpeed: 2000,
				autoplayTimeout:4000,
				smartSpeed:1000
			}
		}
	})

	// ABOUT VIDEO VENOBOX JS HERE
	$('.venobox').venobox(); 

	// ABOUT COUNTER UP JS HERE
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// TESTIMONIAL SLIDER JS HERE
	$('.test_slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed:3000,
		arrows: false,
		// centerMode: true,
		// centerPadding: '50px',
		responsive: [
		  {
			breakpoint: 991,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 577,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  });


















});