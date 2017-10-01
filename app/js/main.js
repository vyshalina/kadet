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

    // video carousel
    $('.video-carousel-nav').owlCarousel({
        margin:0,
        loop:false,
        autoWidth:true,
        items:10
    });

    $('.video-carousel-nav .owl-item li a').click(function(e){
        e.preventDefault();

        var index = $(this).parent().parent().index();

        $('.video-carousel-nav .owl-item li a').removeClass('active');
        $(this).addClass('active');

        $('.js-video li.active').find('video')[0].pause();
        //$('.js-video li.active').find('.videoContainer').empty();
        $('.js-video li.active').removeClass('active');

        $('.js-video li').eq(index).addClass('active');
        var video = $('.js-video li').eq(index).find('video');
        
        //remove default control when JS loaded
        video[0].removeAttribute("controls");
        $('.js-video li').eq(index).find('.control').fadeIn(500);
        $('.js-video li').eq(index).find('.caption').fadeIn(500);
     
        //before everything get started
        video.on('loadedmetadata', function() {
                
            //set video properties
            $('.js-video li').eq(index).find('.current').text(timeFormat(0));
            $('.js-video li').eq(index).find('.duration').text(timeFormat(video[0].duration));
            updateVolume(0, 0.7);
                
            //start to get video buffering data 
            setTimeout(startBuffer, 150);
                
            //bind video events
            $('.js-video li').eq(index).find('.videoContainer')
            .hover(function() {
                $('.js-video li').eq(index).find('.control').stop().fadeIn();
                $('.js-video li').eq(index).find('.caption').stop().fadeIn();
            }, function() {
                if(!volumeDrag && !timeDrag){
                    $('.js-video li').eq(index).find('.control').stop().fadeOut();
                    $('.js-video li').eq(index).find('.caption').stop().fadeOut();
                }
            })
            .on('click', function() {
                $('.js-video li').eq(index).find('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass('icon-play');
                $(this).unbind('click');
                video[0].play();
            });
        });
        
        //display video buffering bar
        var startBuffer = function() {
            var currentBuffer = video[0].buffered.end(0);
            var maxduration = video[0].duration;
            var perc = 100 * currentBuffer / maxduration;
            $('.js-video li').eq(index).find('.bufferBar').css('width',perc+'%');
                
            if(currentBuffer < maxduration) {
                setTimeout(startBuffer, 500);
            }
        };  
        
        //display current video play time
        video.on('timeupdate', function() {
            var currentPos = video[0].currentTime;
            var maxduration = video[0].duration;
            var perc = 100 * currentPos / maxduration;
            $('.js-video li').eq(index).find('.timeBar').css('width',perc+'%');    
            $('.js-video li').eq(index).find('.current').text(timeFormat(currentPos)); 
        });
        
        //CONTROLS EVENTS
        //video screen and play button clicked
        video.on('click', function() { playpause(); } );
        $('.js-video li').eq(index).find('.btnPlay').on('click', function() { playpause(); } );
        var playpause = function() {
            if(video[0].paused || video[0].ended) {
                $('.js-video li').eq(index).find('.btnPlay').addClass('paused');
                $('.js-video li').eq(index).find('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass('icon-play');
                video[0].play();
            }
            else {
                $('.js-video li').eq(index).find('.btnPlay').removeClass('paused');
                $('.js-video li').eq(index).find('.btnPlay').find('.icon-pause').removeClass('icon-pause').addClass('icon-play');
                video[0].pause();
            }
        };

        
        //fullscreen button clicked
        $('.btnFS').on('click', function() {
            if($.isFunction(video[0].webkitEnterFullscreen)) {
                video[0].webkitEnterFullscreen();
            }   
            else if ($.isFunction(video[0].mozRequestFullScreen)) {
                video[0].mozRequestFullScreen();
            }
            else {
                alert('Your browsers doesn\'t support fullscreen');
            }
        });
        
        //sound button clicked
        $('.js-video li').eq(index).find('.sound').click(function() {
            video[0].muted = !video[0].muted;
            $(this).toggleClass('muted');
            if(video[0].muted) {
                $('.js-video li').eq(index).find('.volumeBar').css('width',0);
            }
            else{
                $('.js-video li').eq(index).find('.volumeBar').css('width', video[0].volume*100+'%');
            }
        });
        
        //VIDEO EVENTS
        //video canplay event
        video.on('canplay', function() {
            $('.js-video li').eq(index).find('.loading').fadeOut(100);
        });
        
        //video canplaythrough event
        //solve Chrome cache issue
        var completeloaded = false;
        video.on('canplaythrough', function() {
            completeloaded = true;
        });
        
        //video ended event
        video.on('ended', function() {
            $('.js-video li').eq(index).find('.btnPlay').removeClass('paused');
            video[0].pause();
        });

        //video seeking event
        video.on('seeking', function() {
            //if video fully loaded, ignore loading screen
            if(!completeloaded) { 
                $('.js-video li').eq(index).find('.loading').fadeIn(200);
            }   
        });
        
        //video seeked event
        video.on('seeked', function() { });
        
        //video waiting for more data event
        video.on('waiting', function() {
            $('.js-video li').eq(index).find('.loading').fadeIn(200);
        });
        
        //VIDEO PROGRESS BAR
        //when video timebar clicked
        var timeDrag = false;   /* check for drag event */
        $('.js-video li').eq(index).find('.progress').on('mousedown', function(e) {
            timeDrag = true;
            updatebar(e.pageX);
        });
        $(document).on('mouseup', function(e) {
            if(timeDrag) {
                timeDrag = false;
                updatebar(e.pageX);
            }
        });
        $(document).on('mousemove', function(e) {
            if(timeDrag) {
                updatebar(e.pageX);
            }
        });
        var updatebar = function(x) {
            var progress = $('.js-video li').eq(index).find('.progress');
            
            //calculate drag position
            //and update video currenttime
            //as well as progress bar
            var maxduration = video[0].duration;
            var position = x - progress.offset().left;
            var percentage = 100 * position / progress.width();
            if(percentage > 100) {
                percentage = 100;
            }
            if(percentage < 0) {
                percentage = 0;
            }
            $('.js-video li').eq(index).find('.timeBar').css('width',percentage+'%');  
            video[0].currentTime = maxduration * percentage / 100;
        };

        //VOLUME BAR
        //volume bar event
        var volumeDrag = false;
        $('.js-video li').eq(index).find('.volume').on('mousedown', function(e) {
            volumeDrag = true;
            video[0].muted = false;
            $('.sound').removeClass('muted');
            updateVolume(e.pageX);
        });
        $(document).on('mouseup', function(e) {
            if(volumeDrag) {
                volumeDrag = false;
                updateVolume(e.pageX);
            }
        });
        $(document).on('mousemove', function(e) {
            if(volumeDrag) {
                updateVolume(e.pageX);
            }
        });
        var updateVolume = function(x, vol) {
            var volume = $('.js-video li').eq(index).find('.volume');
            var percentage;
            //if only volume have specificed
            //then direct update volume
            if(vol) {
                percentage = vol * 100;
            }
            else {
                var position = x - volume.offset().left;
                percentage = 100 * position / volume.width();
            }
            
            if(percentage > 100) {
                percentage = 100;
            }
            if(percentage < 0) {
                percentage = 0;
            }
            
            //update volume bar and video volume
            $('.js-video li').eq(index).find('.volumeBar').css('width',percentage+'%');    
            video[0].volume = percentage / 100;
            
            //change sound icon based on volume
            if(video[0].volume == 0){
                $('.js-video li').eq(index).find('.sound').removeClass('sound2').addClass('muted');
            }
            else if(video[0].volume > 0.5){
                $('.js-video li').eq(index).find('.sound').removeClass('muted').addClass('sound2');
            }
            else{
                $('.js-video li').eq(index).find('.sound').removeClass('muted').removeClass('sound2');
            }
            
        };

        //Time format converter - 00:00
        var timeFormat = function(seconds){
            var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
            var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
            return m+":"+s;
        };
    });

    // video navs
    var video = $('.myVideo');
    
    //remove default control when JS loaded
    video[0].removeAttribute("controls");
    $('.control').fadeIn(500);
    $('.caption').fadeIn(500);
 
    //before everything get started
    video.on('loadedmetadata', function() {
            
        //set video properties
        $('.current').text(timeFormat(0));
        $('.duration').text(timeFormat(video[0].duration));
        updateVolume(0, 0.7);
            
        //start to get video buffering data 
        setTimeout(startBuffer, 150);
            
        //bind video events
        $('.videoContainer')
        .hover(function() {
            $('.control').stop().fadeIn();
            $('.caption').stop().fadeIn();
        }, function() {
            if(!volumeDrag && !timeDrag){
                $('.control').stop().fadeOut();
                $('.caption').stop().fadeOut();
            }
        })
        .on('click', function() {
            $('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass('icon-play');
            $(this).unbind('click');
            video[0].play();
        });
    });
    
    //display video buffering bar
    var startBuffer = function() {
        var currentBuffer = video[0].buffered.end(0);
        var maxduration = video[0].duration;
        var perc = 100 * currentBuffer / maxduration;
        $('.bufferBar').css('width',perc+'%');
            
        if(currentBuffer < maxduration) {
            setTimeout(startBuffer, 500);
        }
    };  
    
    //display current video play time
    video.on('timeupdate', function() {
        var currentPos = video[0].currentTime;
        var maxduration = video[0].duration;
        var perc = 100 * currentPos / maxduration;
        $('.timeBar').css('width',perc+'%');    
        $('.current').text(timeFormat(currentPos)); 
    });
    
    //CONTROLS EVENTS
    //video screen and play button clicked
    video.on('click', function() { playpause(); } );
    $('.btnPlay').on('click', function() { playpause(); } );
    var playpause = function() {
        if(video[0].paused || video[0].ended) {
            $('.btnPlay').addClass('paused');
            $('.btnPlay').find('.icon-play').addClass('icon-pause').removeClass('icon-play');
            video[0].play();
        }
        else {
            $('.btnPlay').removeClass('paused');
            $('.btnPlay').find('.icon-pause').removeClass('icon-pause').addClass('icon-play');
            video[0].pause();
        }
    };

    
    //fullscreen button clicked
    $('.btnFS').on('click', function() {
        if($.isFunction(video[0].webkitEnterFullscreen)) {
            video[0].webkitEnterFullscreen();
        }   
        else if ($.isFunction(video[0].mozRequestFullScreen)) {
            video[0].mozRequestFullScreen();
        }
        else {
            alert('Your browsers doesn\'t support fullscreen');
        }
    });
    
    //sound button clicked
    $('.sound').click(function() {
        video[0].muted = !video[0].muted;
        $(this).toggleClass('muted');
        if(video[0].muted) {
            $('.volumeBar').css('width',0);
        }
        else{
            $('.volumeBar').css('width', video[0].volume*100+'%');
        }
    });
    
    //VIDEO EVENTS
    //video canplay event
    video.on('canplay', function() {
        $('.loading').fadeOut(100);
    });
    
    //video canplaythrough event
    //solve Chrome cache issue
    var completeloaded = false;
    video.on('canplaythrough', function() {
        completeloaded = true;
    });
    
    //video ended event
    video.on('ended', function() {
        $('.btnPlay').removeClass('paused');
        video[0].pause();
    });

    //video seeking event
    video.on('seeking', function() {
        //if video fully loaded, ignore loading screen
        if(!completeloaded) { 
            $('.loading').fadeIn(200);
        }   
    });
    
    //video seeked event
    video.on('seeked', function() { });
    
    //video waiting for more data event
    video.on('waiting', function() {
        $('.loading').fadeIn(200);
    });
    
    //VIDEO PROGRESS BAR
    //when video timebar clicked
    var timeDrag = false;   /* check for drag event */
    $('.progress').on('mousedown', function(e) {
        timeDrag = true;
        updatebar(e.pageX);
    });
    $(document).on('mouseup', function(e) {
        if(timeDrag) {
            timeDrag = false;
            updatebar(e.pageX);
        }
    });
    $(document).on('mousemove', function(e) {
        if(timeDrag) {
            updatebar(e.pageX);
        }
    });
    var updatebar = function(x) {
        var progress = $('.progress');
        
        //calculate drag position
        //and update video currenttime
        //as well as progress bar
        var maxduration = video[0].duration;
        var position = x - progress.offset().left;
        var percentage = 100 * position / progress.width();
        if(percentage > 100) {
            percentage = 100;
        }
        if(percentage < 0) {
            percentage = 0;
        }
        $('.timeBar').css('width',percentage+'%');  
        video[0].currentTime = maxduration * percentage / 100;
    };

    //VOLUME BAR
    //volume bar event
    var volumeDrag = false;
    $('.volume').on('mousedown', function(e) {
        volumeDrag = true;
        video[0].muted = false;
        $('.sound').removeClass('muted');
        updateVolume(e.pageX);
    });
    $(document).on('mouseup', function(e) {
        if(volumeDrag) {
            volumeDrag = false;
            updateVolume(e.pageX);
        }
    });
    $(document).on('mousemove', function(e) {
        if(volumeDrag) {
            updateVolume(e.pageX);
        }
    });
    var updateVolume = function(x, vol) {
        var volume = $('.volume');
        var percentage;
        //if only volume have specificed
        //then direct update volume
        if(vol) {
            percentage = vol * 100;
        }
        else {
            var position = x - volume.offset().left;
            percentage = 100 * position / volume.width();
        }
        
        if(percentage > 100) {
            percentage = 100;
        }
        if(percentage < 0) {
            percentage = 0;
        }
        
        //update volume bar and video volume
        $('.volumeBar').css('width',percentage+'%');    
        video[0].volume = percentage / 100;
        
        //change sound icon based on volume
        if(video[0].volume == 0){
            $('.sound').removeClass('sound2').addClass('muted');
        }
        else if(video[0].volume > 0.5){
            $('.sound').removeClass('muted').addClass('sound2');
        }
        else{
            $('.sound').removeClass('muted').removeClass('sound2');
        }
        
    };

    //Time format converter - 00:00
    var timeFormat = function(seconds){
        var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
        var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
        return m+":"+s;
    };
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
