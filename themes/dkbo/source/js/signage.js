$(window).scroll(function() {
    var top = $(this).scrollTop(),
        foot_height = $("footer").height(),
        wrap_height = $("#wrap").height(),
        fix_height = $("aside").height();
    if ($(window).width() >= 768 && ((wrap_height - top) > (fix_height + foot_height)))
        $("#fix").css("top", top);
});
