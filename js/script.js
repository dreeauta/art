$(document).ready(function() {

	// $('#fullpage').fullpage();


	// nav toggle


	$('#toggle').click(function() {
	   $(this).toggleClass('active');
	   $('#overlay').toggleClass('open');

	  });

	var categoriesTop = $(".header-title").offset().top;
	$( ".small-line" ).hide();
	$( ".medium-line" ).hide();

	$(document).scroll(function() {
	    if($(this).scrollTop() > categoriesTop ) {
	      $(".small-line").show().addClass('animated');
				$(".medium-line").show().addClass('animated');

	    }
	});

	var featured1 = $(".featured1").offset().top;
	var featured2 = $(".featured2").offset().top;
	var featured3 = $(".featured3").offset().top;
	var featured4 = $(".featured4").offset().top;


	$( ".featured1" ).hide();
	$( ".featured2" ).hide();
	$( ".featured3" ).hide();
	$( ".featured4" ).hide();

	$(document).scroll(function() {
			if($(this).scrollTop() > featured1 ) {
				$(".featured1").show().addClass('animated');
			}
			if($(this).scrollTop() > featured2 ) {
				$(".featured2").show().addClass('animated');
			}
			if($(this).scrollTop() > featured3 ) {
				$(".featured3").show().addClass('animated');
			}
			if($(this).scrollTop() > featured4 ) {
				$(".featured4").show().addClass('animated');
			}

	});

});
