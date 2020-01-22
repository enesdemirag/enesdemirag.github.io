$(document).ready(function () {
    $('.item').each(function (index, value) { 
        setInterval(function () {
            $(value).css('margin-top', '8px');
        }, 80 * index);
    });
});
