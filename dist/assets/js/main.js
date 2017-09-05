jQuery(window).scroll(function() { 
    var the_top = jQuery(document).scrollTop();
    if (the_top > 857) {
        jQuery('.logo').addClass('fixed');
    }
    else {
        jQuery('.logo').removeClass('fixed');
    }
});

$('.carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:4
        }
    }
});