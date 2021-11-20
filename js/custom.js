$(document).ready(function(){
    $('.client-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplaySpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $navOffset=$('#header').offset().top;
            
    // navOffset ends 
        $top_offset=300;
        $('.top_to').click(function(){
            $('html,body').animate({
                scrollTop:0
            },800);
        });
        $(window).scroll(function(){
            $scrolling=$(this).scrollTop();
            
            if($scrolling > $navOffset){
                $("#header").addClass('navfixed');
            }else{
                $("#header").removeClass('navfixed');
            }
        // navOffset ends
            if($scrolling > $top_offset){
                $('.top_to').fadeIn();
            }else{
                $('.top_to').fadeOut();
            }

        });
        var typed = new Typed('.typing', {
        strings: ["Creative Frontend Developer.","Creative Frontend Developer."],
        loop:true,

        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1000,
  });
        new WOW().init();

});