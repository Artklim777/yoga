$('.bxslider').bxSlider({
    slideWidth: 600,
    pager: false
});










/* Fixed navigation */
	var stickyOffset = $('#navigation').offset().top + 1;
	$(window).scroll(function() {

		if ($(window).scrollTop() >= stickyOffset) {
			$('#navigation').addClass('fixed');
			$('#about').css('margin-top', navbarHeight);
		} else {
			$('#navigation').removeClass('fixed');
			$('#about').css('margin-top', 0);
		}
	});
	/* END fixed navigation */