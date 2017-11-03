
$(window).scroll(function() {

    if ($(this).scrollTop()> $(".parkenbilde").height()) {
    $('nav').fadeIn();
    }

    else {
    $('.scrolltop').fadeOut();
    }
 });
 $(window).scroll(function(){
    $("#coverbilde").css("opacity", 1 - $(window).scrollTop() / $(".parkenbilde").height());
  });