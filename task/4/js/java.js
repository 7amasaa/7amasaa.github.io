   

$(function () {
	"use strict";
    $(".load").slice(0, 2).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".load:hidden").slice(0, 2).fadeIn(500);
        if ($(".load:hidden").length === 0) {
            $("#loadMore").fadeOut(1000);
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

