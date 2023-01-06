$(document).ready(function() {

    $('.ratings').click(function() {
        $('.rating').each(function() {
            if ($(this).prop('checked')) {
                $(this).addClass('selected')
                $('.choice').text($(this).attr('data-text'))
            } else {
                $(this).removeClass('selected')
            };
        });
    });

    $('.submit').click(function() {
        $('.front-face').toggleClass('hidden');
        $('.back-face').toggleClass('hidden');
    })
    $('.back-face').click(function() {
        $('.front-face').toggleClass('hidden');
        $('.back-face').toggleClass('hidden');
    })

});