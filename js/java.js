$(document).ready(function () {

	$(".section_header").animated("fadeInUp", "fadeOutDown");
	$(".animation_1").animated("flipInY", "fadeOutDown");
	$(".animation_2").animated("zoomIn", "zoomOut");
	$(".animation_3").animated("fadeIn", "bounceOut");
	$(".animation_4").animated("fadeInDown", "slideOutUp");
	$(".animation_5").animated("fadeInUp", "slideOutUp");
	$(".animation_6").animated("fadeInLeft", "slideOutUp");
	$(".animation_7").animated("fadeInRight", "slideOutUp");

	if($(window).width() < 990 ) {
		$(".mnu-button").css("display", "block");
		$(".mnu").css("display", "none");
		$(".d1box").removeClass("d-inline-flex");
		$(".d2box").removeClass("d-inline-flex");
		$(".phone-box").css("margin-right","90px")
		$(".logo-container").css("margin","18px 5px 0px 10px")
	};



	function heightDetect() {
		$(".main-head").css("height", "100vh");
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
		widthResize();
	});

	jQuery(document).ready(function($) {
		$(window).load(function() {
			setTimeout(function() {
				$('.loader-container').fadeOut('slow', function() {});
			}, 900);
		});
	});



$(document).ready( function(){
$('.logo-container').animated('flipInY');
$('.phone-box').animated('fadeIn');
$('.maintext').animated('fadeInUp');
$('.typed-animation').animated('fadeInDown');
$('.nav-box').animated('fadeInDown');

});

$('.popup-with-zoom-anim').magnificPopup({
	type: 'inline',
	removalDelay: 300,
	mainClass: 'my-mfp-zoom-in'
});


function widthResize() {
	if($(window).width() < 990) {
		$(".mnu-button").css("display", "block");
		$(".mnu").css("display", "none");
		$(".phone-box").css("margin-right","90px")
		$(".logo-container").css("margin","18px 5px 0px 10px")
		$(".d1box").removeClass("d-inline-flex");
		$(".d2box").removeClass("d-inline-flex");
	}
	else {
		$(".mnu-button").css("display", "none");
		$(".mnu").css("display", "inline-block");
		$(".d1box").addClass("d-inline-flex");
		$(".d2box").addClass("d-inline-flex");
		$(".phone-box").css("margin-right","20px")
		$(".logo-container").css("margin","18px 30px 0px 80px")
	}
}	
function bodyoverflow() {
	$("body").css("overflow","visible");
}


jQuery(document).ready(function( $ ) {
	$('.count').counterUp({
		delay: 10,
		time: 1000
	});
});


$('#menu-toggle').click(function(){
	$(this).toggleClass("open");
});

$('.callback').click(function(){
	$(".backform").fadeIn(600);

});

$('#close-box , .submit-call').click(function(){
	$(".backform").fadeOut(600);

});

$(".top_mnu ul a").click(function() {
	$(".top_mnu").fadeOut(600);
	$("#menu-toggle").toggleClass("open");

}).append("<span>");

$("#menu-toggle").click(function() {
	if ($(".top_mnu").is(":visible")) {
		$(".top_mnu").fadeOut(600);
		$("body").css("overflow","visible");
		$(".top_mnu li a").removeClass("fadeInUp animated");
	} else {
		$(".top_mnu").fadeIn(600);
		$("body").css("overflow", "hidden");
		$(".top_mnu li a").addClass("fadeInUp animated");

	};


});

$('.mnu li a , .logo-container a ,.top_mnu ul li a , .info a' ).on('click', function (e) {

	var targetSec = $(this).attr("href");
	$('html, body').animate({
		scrollTop: $(targetSec).offset().top - 80
	}, 1000);
	$("body").css("overflow","visible");

});


	
$(document).ready(function(){
  $('.carousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  });
});



	 window.onscroll = function() {
	 	if(window.pageYOffset > 0){
	 		$('.nav-box').css("background-color", "rgba(0,0,0,.9)");
	 	}
	 	else {
	 		$('.nav-box').css("background-color", "rgba(0,0,0,0)");
	 	}
	 };
	 var typed = new Typed('#typed', {
	 	stringsElement: '#typed-strings',
	 	typeSpeed: 80,
	 	backDelay: 2000,
	 	startDelay: 500,
	 	backSpeed: 50,
	 	loop: true

	 });
	});



$('.popup-gallery').magnificPopup({
	delegate: 'a',
	closeOnContentClick: true,
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: false,
		preload: [0, 1]
	},

	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
	}
});

