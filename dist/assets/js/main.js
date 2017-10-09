$(document).ready(function() {

    var currentSect = 0;
    $('.js-next_1').click(function(e) {
        e.preventDefault();
        currentSect = 1;
        $('#swipe').css("transform","translate(-1920px, 0px)");
    });

    $('.js-next_2').click(function(e) {
        e.preventDefault();
        currentSect = 2;
        $('#swipe').css("transform","translate(-3840px, 0px)");
    });

    $('.js-next_3').click(function(e) {
        e.preventDefault();
        currentSect = 3;
        $('#swipe').css("transform","translate(-5760px, 0px)");
    });

    $('.js-prev_1').click(function(e) {
        e.preventDefault();
        currentSect = 0;
        $('#swipe').css("transform","translate(0px, 0px)");
    });

    $('.js-prev_2').click(function(e) {
        e.preventDefault();
        currentSect = 1;
        $('#swipe').css("transform","translate(-1920px, 0px)");
    });

    $('.js-prev_3').click(function(e) {
        e.preventDefault();
        currentSect = 2;
        $('#swipe').css("transform","translate(-3840px, 0px)");
    });

    // swipe
    function swipeStatus(event, phase, direction, distance) {
        if (phase == "move" && (direction == "left" || direction == "right")) {
            var duration = 0;

            if (direction == "left") {
                scrollSect((SECT_WIDTH * currentSect) + distance, duration);
            } else if (direction == "right") {
                scrollSect((SECT_WIDTH * currentSect) - distance, duration);
            }

        } else if (phase == "cancel") {
            scrollSect(SECT_WIDTH * currentSect, speed);
        } else if (phase == "end") {
            if (direction == "right") {
                previousSect();
            } else if (direction == "left") {
                nextSect();
            }
        }
    }

    function previousSect() {
        currentSect = Math.max(currentSect - 1, 0);
        scrollSect(SECT_WIDTH * currentSect, speed);
    }

    function nextSect() {
        currentSect = Math.min(currentSect + 1, maxSect - 1);
        scrollSect(SECT_WIDTH * currentSect, speed);
    }
    function scrollSect(distance, duration) {
        sect.css("transition-duration", (duration / 1000).toFixed(1) + "s");

        var value = (distance < 0 ? "" : "-") + Math.abs(distance).toString();
        sect.css("transform", "translate(" + value + "px,0)");
    }

    var SECT_WIDTH = 1920;
    var maxSect = 3;
    var speed = 500;

    var sect;

    var swipeOptions = {
        triggerOnTouchEnd: true,
        swipeStatus: swipeStatus,
        allowPageScroll: "vertical",
        threshold: 75
    };

    $(function () {
        sect = $("#swipe");
        sect.swipe(swipeOptions);
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


    $('.preview-wrapp a.iteam, .gallery-modern a, .albom .iteam, .header-main h1 a').click(function(e) {
        e.preventDefault();

        $(this).addClass('active');
        $('.app').addClass('active');
        $('body').addClass('ov-hidden');

        // linking delay
        var locHref = $(this).attr('href');
        setTimeout(function(){
            window.location.href = locHref; 
        },300);
    });

    $('.header-right').click(function(e){
        e.preventDefault();

        $('.app').addClass('active2');

        // linking delay
        var locHref = $(this).attr('href');
        setTimeout(function(){
            window.location.href = locHref; 
        },600);
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
        },300);
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

        // linking delay
        var locHref = $(this).attr('href');
        setTimeout(function(){
            window.location.href = locHref; 
        },600);
    });

    // back arrow
    $('a.arrow_back').click(function(e){
        e.preventDefault();

        $('.app').addClass('active');

        setTimeout(function(){
            parent.history.back();
        },600);
    });

    // video carousel
    $('.video-carousel-nav').owlCarousel({
        margin:0,
        loop:false,
        autoWidth:true,
        items:10
    });

    var features = ['prevtrack', 'playpause', 'nexttrack', 'current', 'progress', 'duration', 'speed', 'skipback', 'jumpforward',
    'markers', 'playlist', 'loop', 'shuffle', 'contextmenu', 'fullscreen'];
    $('.myVideo').mediaelementplayer({
        pluginPath: "./",
        features: features,
        videoWidth: 1042,
        videoHeight: 722,
        success: function(mediaElement, originalNode, instance) {

        }
    });
    $('.video-carousel-nav .owl-item li a').click(function(e){
        e.preventDefault();

        var index = $(this).parent().parent().index();

        $('.video-carousel-nav .owl-item li a').removeClass('active');
        $(this).addClass('active');

        $('.js-video li.active').find('video')[0].pause();
        //$('.js-video li.active').find('.videoContainer').empty();
        $('.js-video li.active').removeClass('active');

        $('.js-video li').eq(index).addClass('active').find('video')[0].load();
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
    },600);
});
