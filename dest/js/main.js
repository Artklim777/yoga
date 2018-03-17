/*-------------------Navbar-toggler---------------*/

    $('.navbar-toggler').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $(target).toggleClass('collapse');
    });

/*----------Slider-------*/

 $(document).ready(function(){
  $('.slider').slick({
    arrows:  true,
    dots: false,
     dotsClass: "my-dots",
    
  });
});
 $(document).ready(function(){
  $('.slider-trener').slick({
    arrows: true,
     dots: true,
     dotsClass: "my-dots",
    
  });
});

/*--------Якоря------*/

$(document).ready(function() {
    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});


