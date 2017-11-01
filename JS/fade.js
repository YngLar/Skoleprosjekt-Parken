/// Scroll fade in when 100px from the top 
$(window).scroll(function() {
    if ($(this).scrollTop()> 300) {
    $('nav').fadeIn();
    } else {
    $('.scrolltop').fadeOut();
    }
 });