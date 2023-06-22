$(function () {
    setTimeout(function () {
        // $('#modal-dialog').fadeIn();
        $('#modal-dialog').addClass('show');
    }, 2000);

    $('#modal-dialog-close').click(function () {
        // $('#modal-dialog').fadeOut();
        $('#modal-dialog').removeClass('show');
    });

    $('#modal-dialog-btn').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});