$(document).ready(function () {

	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, 300);
	    }
	});

 $('.top').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.top').show();
        } else {
          $('.top').hide();
        }
    });

    $('.top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 400);
        return false;
    });

});