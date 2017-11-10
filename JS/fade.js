
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

  function åpneDag(evt, dag) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(dag).style.display = "block";
    evt.currentTarget.className += " active";
}