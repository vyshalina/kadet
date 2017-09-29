$(document).ready(function() {

    var previewCount = 0;
    $('.js-next_1').click(function(e) {
        e.preventDefault();
        previewCount = 1;
        $('.preview').animate({
            'right' : "1920px"
        });
    });

    $('.js-next_2').click(function(e) {
        e.preventDefault();
        previewCount = 2;
        $('.preview').animate({
            'right' : "3840px"
        });
    });

    $('.js-next_3').click(function(e) {
        e.preventDefault();
        previewCount = 3;
        $('.preview').animate({
            'right' : "5760px"
        });
    });

    $('.js-prev_1').click(function(e) {
        e.preventDefault();
        previewCount = 0;
        $('.preview').animate({
            'right' : "0"
        });
    });

    $('.js-prev_2').click(function(e) {
        e.preventDefault();
        previewCount = 1;
        $('.preview').animate({
            'right' : "1920px"
        });
    });

    $('.js-prev_3').click(function(e) {
        e.preventDefault();
        previewCount = 2;
        $('.preview').animate({
            'right' : "3840px"
        });
    });
    $('.preview').swipe({
        swipe: function (event, direction) {
            if (direction === 'left' && previewCount == 0) {
                $('.preview').animate({
                    'right' : "1920px"
                });
                previewCount++;
            } else if (direction === 'left' && previewCount == 1) {
                $('.preview').animate({
                    'right' : "3840px"
                });
                previewCount++;
            // } else if (direction === 'left' && previewCount == 2) {
            //     $('.preview').animate({
            //         'right' : "5760px"
            //     });
            //     previewCount++;
            } else if (direction === 'right' && previewCount == 3) {
                $('.preview').animate({
                    'right' : "3840px"
                });
                previewCount--;
            } else if (direction === 'right' && previewCount == 2) {
                $('.preview').animate({
                    'right' : "1920px"
                });
                previewCount--;
            } else if (direction === 'right' && previewCount == 1) {
                $('.preview').animate({
                    'right' : "0px"
                });
                previewCount--;
            }
        }
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


    $('.preview-wrapp a.iteam, .gallery-modern .iteam a, .albom .iteam').click(function(e) {
        e.preventDefault();

        $(this).addClass('active');
        $('.app').addClass('active');
        $('body').addClass('ov-hidden');

        // linking delay
        var locHref = $(this).attr('href');
        setTimeout(function(){
            window.location.href = locHref; 
        },600);
    });

    $('.header-right').click(function(e){
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
    $('.sidebar-menu ul li a').click(function(e){
        e.preventDefault();

        $('.sidebar-menu').removeClass('active');
        $('.app').addClass('active');

        // linking delay
        var locHref = $(this).attr('href');
        setTimeout(function(){
            window.location.href = locHref; 
        },600);
    });

    // gallery item fade
    var galleryLength = $('.gallery .iteam').length,
        albomLength = $('.albom .iteam').length;
    for(i=0;i<galleryLength;i++) {
        $('.gallery .iteam').eq(i).css('transition-delay', i/10 + 's');
    }
    for(i=0;i<albomLength;i++) {
        $('.albom .iteam').eq(i).css('transition-delay', i/10 + 's');
    }

    // bottom preview
    $('.js-bottom-preview').click(function(e){
        e.preventDefault();

        $('.app').addClass('active2');
        $('body').addClass('ov-hidden');

        // linking delay
        var locHref = $(this).attr('href');
        setTimeout(function(){
            window.location.href = locHref; 
        },1200);
    });

    // back arrow
    $('a.arrow_back').click(function(e){
        e.preventDefault();

        $('.app').addClass('active');

        setTimeout(function(){
            parent.history.back();
        },600);
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