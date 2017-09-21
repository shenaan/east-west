$(document).ready(function (){
    standExample();
    new WOW().init();

    //   modal

    $('.modal-btn').click(function(e){
        e.preventDefault();

        var  $modal = $(this).attr('href'),
            $position = $(window).scrollTop();

        $($modal).addClass('active');
        $($modal).css('top',$position + 100);
        $('#overlay').fadeIn();
    });

    $('.modal__close,#overlay').click(function(e){
        e.preventDefault();
        $('.modal').removeClass('active');
        $('#overlay').fadeOut()
    });

    //

    $('.news-slider').on('init', function(event, slick){
        $('.news-slider__slide.slick-active').addClass('animated');
    });

    $('.news-slider').slick({
        dots: true,
        arrows: false
    });

    $('.catalog__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots:false,
        arrows:true
    });

    $('.product-modal-slider').slick({
        dots:false,
        arrows:false
    });

    $('.stand-example__slider').slick({
        dots: true,
        arrows: false
    });

    $('.design-item__holders-slider').slick({
        dots: true,
        arrows: false
    });

    $('.stand-example__slider').slick({
        dots: true,
        arrows: false
    });

    $('.clients__slider').slick({
        dots: true,
        arrows: false
    });


    function standExample(){
        $standExample = $(".di__stand-example");
        $standDetails= $('.di__stand-details');
        $slickSlide = $('.stand-example__slider');

        $('#di__stand-example1').on('click', function(){
            $standExample.removeClass('active');
            $(this).addClass('active');
            $standDetails.removeClass('active');
            $('#di__stand-details1').addClass('active');
        });

        $('#di__stand-example2').on('click', function(){
            $standExample.removeClass('active');
            $(this).addClass('active');
             $standDetails.removeClass('active');
            $('#di__stand-details2').addClass('active');

        });

        $('#di__stand-example3').on('click', function(){
            $standExample.removeClass('active');
            $(this).addClass('active');
             $standDetails.removeClass('active');
            $('#di__stand-details3').addClass('active');

        });

        $('#di__stand-example4').on('click', function(){
            $standExample.removeClass('active');
            $(this).addClass('active');
             $standDetails.removeClass('active');
            $('#di__stand-details4').addClass('active');
        });
    }

    $('.vacancies__list-link').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');

        $(".vacancy__details"+ currentAttrValue).fadeIn(400).siblings().hide();

        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

    // servicesAnimation
    if($("#services").length) {
        function servicesAnimation() {
            var $servicesOffset = $('#services').offset(),
                $scrollTop = $(window).scrollTop();

            if ($scrollTop + 300 >= $servicesOffset.top && $servicesOffset.top <= $scrollTop + 100 ) {
                $('#services').addClass('active')
            }
        }

        servicesAnimation();

        $(window).scroll(function () {
            servicesAnimation();
        });
    }


    // portfolio-tabs

    var $portfolioTab = $("#" + $('.portfolio__menu--list-link.active').data('tab'));

    $('.portfolio-tabs__cont').css('min-height',$portfolioTab.height());

    $($portfolioTab).addClass('active');

    $(".portfolio__menu--list-link").click(function(e){
        e.preventDefault();

        var $portfolioTab = $("#" + $(this).data('tab'));

        $(this).addClass('active').parents('li').siblings('li').find('a').removeClass('active');

        $($portfolioTab).addClass('in');

        $('.portfolio-tabs__cont').css('min-height',$portfolioTab.height());

        setTimeout(function () {
            $($portfolioTab).addClass('active').removeClass('in');

            $($portfolioTab).siblings('.portfolio-tab').removeClass('active');
        },1000)
    });

    // lightcase gallery
    $('a[data-rel^=lightcase]').lightcase();

    // form  styler

    $('.styler').styler();

    //
    $('#slider-time').slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [ 600, 1200 ],
        slide: function( event, ui ) {
            var hours1 = Math.floor(ui.values[0] / 60);
            var minutes1 = ui.values[0] - (hours1 * 60);

            if(hours1.length < 10) hours1= '0' + hours;
            if(minutes1.length < 10) minutes1 = '0' + minutes;

            if(minutes1 == 0) minutes1 = '00';

            var hours2 = Math.floor(ui.values[1] / 60);
            var minutes2 = ui.values[1] - (hours2 * 60);

            if(hours2.length < 10) hours2= '0' + hours;
            if(minutes2.length < 10) minutes2 = '0' + minutes;

            if(minutes2 == 0) minutes2 = '00';

            $('#amount-time-from').val(hours1+':'+minutes1);
            $('#amount-time-to').val(hours2+':'+minutes2 );
        }
    });

});

