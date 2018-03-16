/*----------Slider-------*/

 $(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
     dotsClass: "my-dots",
    
  });
});
 $(document).ready(function(){
  $('.slider1').slick({
    arrows: true,
    dots: false,
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


