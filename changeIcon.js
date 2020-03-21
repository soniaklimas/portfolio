function changeIcon() {
    const scrollValue = $(window).scrollTop();
    const heightS2 = $('.s2').offset().top;
    const heightS3 = $('.s3').offset().top;
    const heightS4 = $('.s4').offset().top;
    const heightS5 = $('.s5').offset().top;

    // console.log(scrollValue.toFixed(), heightS2.toFixed(), heightS3.toFixed(), heightS4.toFixed())
    // $('nav li').removeClass('active');

    if (scrollValue < heightS2) {
        $('nav.main i').not('.icon1').removeClass('active');
        $('.icon1').addClass('active');
    } else if (scrollValue < heightS3) {
        $('nav.main i').not('.icon2').removeClass('active');
        $('.icon2').addClass('active');
    } else if (scrollValue < heightS4) {
        $('nav.main i').not('.icon3').removeClass('active');
        $('.icon3').addClass('active');
    } else if (scrollValue < heightS5) {
        $('nav.main i').not('.icon4').removeClass('active');
        $('.icon4').addClass('active');
    } else {
        $('nav.main i').not('.icon5').removeClass('active');
        $('.icon5').addClass('active');
    }
}

$(window).on("scroll", changeIcon)