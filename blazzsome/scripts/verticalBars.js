$(function () {
    for (var bar = 0; bar < $(".missionary .data li").length; ++bar) {
        $(".missionary .bar:eq(" + j + ")").animate({
            height: $(".missionary .value:eq(" + j + ")").html()
        }, 500);
    }
});