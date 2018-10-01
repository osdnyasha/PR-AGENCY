$(document).ready(function () { 
	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});
	$('.nav-box').css("background-color", "rgba(0,0,0,1)");
	if($(window).width() < 1136 ) {
		$(".mnu-button").css("display", "block");
		$(".mnu").css("display", "none");
		$(".d1box").removeClass("d-inline-flex");
		$(".d2box").removeClass("d-inline-flex");
		$(".phone-box").css("margin-right","90px")
		$(".logo-container").css("margin","30px 5px 0px 10px")
	};

	$('#menu-toggle').click(function(){
	$(this).toggleClass("open");
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

function heightDetect() {
		$(".main-head").css("height", "100vh");
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
		widthResize();
	});

	function widthResize() {
	if($(window).width() < 1136) {
		$(".mnu-button").css("display", "block");
		$(".mnu").css("display", "none");
		$(".phone-box").css("margin-right","90px")
		$(".logo-container").css("margin","30px 5px 0px 10px")
		$(".d1box").removeClass("d-inline-flex");
		$(".d2box").removeClass("d-inline-flex");
	}
	else {
		$(".mnu-button").css("display", "none");
		$(".mnu").css("display", "inline-block");
		$(".d1box").addClass("d-inline-flex");
		$(".d2box").addClass("d-inline-flex");
		$(".phone-box").css("margin-right","20px")
		$(".logo-container").css("margin","30px 30px 0px 80px")
	}
}	

$('.callback').click(function(){
	$(".backform").fadeIn(600);

});

$('#close-box , .submit-call').click(function(){
	$(".backform").fadeOut(600);

});


$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

		$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});
});