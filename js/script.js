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

});
