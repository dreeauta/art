$(document).ready(function() {

	// $('#fullpage').fullpage();


	// nav toggle


	$('#toggle').click(function() {
	   $(this).toggleClass('active');
	   $('#overlay').toggleClass('open');
	  });


var image_src = {
    topleft: "img/bg-2.png",
    topright: "img/bg3.png",
    bottomleft: "img/bg-4.png",
    bottomright: "img/bg-5.png"
};

$(document).mousemove(function(event){
    var mloc = {
        x: event.pageX,
        y: event.pageY
    };

    if(
        (mloc.x >= 0 && mloc.x <= $(document).width()/2) &&
        (mloc.y >= 0 && mloc.y <= $(document).height()/2)
    ){
        $(".tryme").attr("src", image_src.topleft);
    }else if(
        (mloc.x >= $(document).width()/2 && mloc.x <= $(document).width()) &&
        (mloc.y >= 0 && mloc.y <= $(document).height()/2)
    ){
        $(".tryme").attr("src", image_src.topright);
    }else if(
        (mloc.x >= 0 && mloc.x <= $(document).width()/2) &&
        (mloc.y >= $(document).height()/2 && mloc.y <= $(document).height())
    ){
        $(".tryme").attr("src", image_src.bottomleft);
    }else if(
        (mloc.x >= $(document).width()/2 && mloc.x <= $(document).width()) &&
        (mloc.y >= $(document).height()/2 && mloc.y <= $(document).height())
    ){
        $(".tryme").attr("src", image_src.bottomright);
    }

});

// change background color on mouse movement

// var $win = $(window),
//     w = 0,h = 0,
//     rgb = [],
//     getWidth = function() {
//         w = $win.width();
//         h = $win.height();
//     };
//
// $win.resize(getWidth).mousemove(function(e) {
//
//     rgb = [
//         Math.round(e.pageX/w * 255),
//         Math.round(e.pageY/h * 255),
//         150
//     ];
//
//     $(document.body).css('background','rgb('+rgb.join(',')+')');
//
// }).resize();

//hover category subtitle


});
