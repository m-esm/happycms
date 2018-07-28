$(function () {

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200)
            $('#backToTop').removeClass('clicked');
        else
            $('#backToTop').addClass('clicked');


    });

    $('#backToTop').click(function () {

        var btn = $(this);

        btn.addClass('clicked');

        $('html, body').animate({
            scrollTop: 0
        }, 700);

    });


});
