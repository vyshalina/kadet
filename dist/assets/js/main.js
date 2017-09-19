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

    $('.js-next_3').click(function(e) {
        e.preventDefault();
        $('.preview').animate({
            'right' : "5760px"
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

    $('.js-prev_3').click(function(e) {
        e.preventDefault();
        $('.preview').animate({
            'right' : "3840px"
        });
    });


    var owl = $('.owl-carousel');

    owl.owlCarousel({
        margin:35,
        loop:true,
        autoWidth:true
    });

    $('.nav-prev').click(function() {
        owl.trigger('prev.owl.carousel');
        return false;
    });
    $('.nav-next').click(function() {
        owl.trigger('next.owl.carousel', [300]);
        return false;
    });

    $(".js-lightgallery").lightGallery({
        selector: '.js-lightgallery-item'
    }); 


    $('.preview-wrapp .iteam').click(function(e) {
        e.preventDefault();

        $(this).addClass('active');
        $('.app').addClass('active');

        // linking delay
        var locHref = $(this).attr('href');
        setTimeout(function(){
            window.location.href = locHref; 
        },600);
    });

    $('.gallery-modern .iteam a').click(function(e) {
        e.preventDefault();

        $('.app').addClass('active');

        // linking delay
        var locHref = $(this).attr('href');
        setTimeout(function(){
            window.location.href = locHref; 
        },600);
    });

    $('.albom .iteam').click(function(e) {
        e.preventDefault();

        $('.app').addClass('active');

        // linking delay
        var locHref = $(this).attr('href');
        setTimeout(function(){
            window.location.href = locHref; 
        },600);
    });

    $('.js-return').click(function(e){
        e.preventDefault();

        $('.app').removeClass('active');
        $('body').addClass('ov-hidden');

        // linking delay
        var locHref = $(this).attr('href');
        setTimeout(function(){
            window.location.href = locHref; 
        },1200);
    });

    $('.js-sidebar-menu-btn').click(function(){
        $('.sidebar-menu').addClass('active');
        return false;
    });
    $('.sidebar-menu .close').click(function(){
        $('.sidebar-menu').removeClass('active');
        return false;
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

$(window).on('load', function() {
    $('.main-article').addClass('active');

    $('.anim-preview').removeClass('active');

    setTimeout(function() {
        $('body').removeClass('ov-hidden');
    },1200);
});