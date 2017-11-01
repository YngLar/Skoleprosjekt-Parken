
$(window).scroll(function() {

    if ($(this).scrollTop()> $(".parkenbilde").height()) {
    $('nav').fadeIn();
    }

    else {
    $('.scrolltop').fadeOut();
    }
 });