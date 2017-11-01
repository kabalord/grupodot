$(document).ready(function() {


    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        if (sc > 0) {
            $("header").addClass("header-small");
        } else {
            $("header").removeClass("header-small");
        }
    });

    $( ".form-toggle" ).click(function() {
  		$( ".form-horizontal" ).slideToggle( "slow");
	});

	$('.bxslider').bxSlider({
		  minSlides: 1,
		  maxSlides: 3,
		  slideWidth: 350,
		  slideMargin: 0
		});


});