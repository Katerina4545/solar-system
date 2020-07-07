//выполн//функция изменения фона
$(window).ready(function () {
    var window_height = $(window).height();
    $('.slide')
        .height(window_height)
        .scrollie({
            scrollOffset: -50,
            scrollingInView: function (elem) {
                var bgColor = elem.data('background');

                $('body').css('background-color', bgColor);
            }
        });
});

