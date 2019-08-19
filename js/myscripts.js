$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.fade-break').fadeOut();
    } else {
        $('.fade-break').fadeIn();
    }
});