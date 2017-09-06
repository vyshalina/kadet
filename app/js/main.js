$(document).ready(function() {


    $('.js-next_1').click(function(e) {
        e.preventDefault();
        $('.preview').animate({
            'right' : "1920px"
        });
    });


    $('.js-next_2').click(function(e) {
        e.preventDefault();
        $('.preview').animate({
            'right' : "3840px"
        });
    });

    $('.js-prev_1').click(function(e) {
        e.preventDefault();
        $('.preview').animate({
            'right' : "0"
        });
    });

    $('.js-prev_2').click(function(e) {
        e.preventDefault();
        $('.preview').animate({
            'right' : "1920px"
        });
    });


    var owl = $('.owl-carousel');

    owl.owlCarousel({
        margin:35,
        loop:true,
        autoWidth:true
    });

    $('.nav-prev').click(function() {
        owl.trigger('next.owl.carousel');
        return false;
    });
    $('.nav-next').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
        return false;
    });

    $(".js-lightgallery").lightGallery({
        selector: '.js-lightgallery-item'
    }); 
});

$(window).scroll(function() { 
    var the_top = $(document).scrollTop();
    if (the_top > 860) {
        $('.logo').addClass('fixed');
    }
    else {
        $('.logo').removeClass('fixed');
    }
});
