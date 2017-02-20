// HAMBURGER MENU

var clickedOn = false;

$('.menu-toggle').click(function() {

    if (!clickedOn) {
        $('.slideout-menu').fadeIn('slow');
        $('.about-text').fadeOut('slow');
        clickedOn = true;
    } else {
        $('.slideout-menu').fadeOut('slow');
        $('.about-text').fadeIn('slow');
        clickedOn = false;
    }
});

$('#menu-hide').click(function() {
    $('.slideout-menu').hide();
    clickedOn = false;
});
