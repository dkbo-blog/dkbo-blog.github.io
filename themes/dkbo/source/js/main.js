var t_on = false,
    t_menu = false,
    t, c_t, _stocklist = '{"init_c":"tse","init_id":"3481","list":[{"id":"3481","c":"tse","date":""},{"id":"2002","c":"tse","date":""}]}',
    _load = "<div class='loading'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";

jQuery(window).load(function() {
    (function($) {
        if ($.trim(localStorage.init) === "" || isNaN(localStorage.init)) {
            localStorage.init = 2;
        }
        if (!localStorage.stockinfo || $.trim(localStorage.stockinfo) == "") {
            localStorage.stockinfo = _stocklist;
        }

        var _view = localStorage.init;
        $(".view[data-view^='" + _view + "']").fadeIn(500);
        $(".box").eq(_view - 1).find("span").addClass("click");
        $(".box").on("click", function() {
            var $this = $(this),
                data = $this.data("view");
            if (_view != data) {
                $(".box").eq(_view - 1).find("span").removeClass("click");
                $this.find("span").addClass("click");
                $(".view[data-view^='" + _view + "']").css("display", "none");
                var _viewbox = $(".view[data-view^='" + data + "']");
                _viewbox.fadeIn(500);
                _view = data;
                localStorage.init = _view;
            }
        });
        $(".xbox").on("click", function() {
            var $this = $(this),
                data = $this.data("view");
            if (_view != data) {
                $(".box").eq(_view - 1).find("span").removeClass("click");
                $(".box").eq(data - 1).find("span").addClass("click");
                $(".view[data-view^='" + _view + "']").css("display", "none");
                var _viewbox = $(".view[data-view^='" + data + "']");
                _viewbox.fadeIn(500);
                _view = data;
                localStorage.init = _view;
                $("html,body").animate({
                    scrollTop: 0
                }, 400)
            }
        });
        $("#menubuttonicon").on("click", function() {
            if (!t_menu) {
                $(this).addClass("fa-remove").removeClass("fa-navicon");
                $(".x-bar").addClass("x-bar-show");
                t_menu =
                    true
            } else {
                $(this).addClass("fa-navicon").removeClass("fa-remove");
                $(".x-bar").removeClass("x-bar-show");
                t_menu = false
            }
        });
        var _sidebar = 1;
        $("#sidetag li.tag").on("click", function() {
            var $this = $(this),
                data = $(this).data("view");
            if (_sidebar != data) {
                $this.addClass("click").siblings(".click").removeClass("click");
                $("#sidebar-" + _sidebar).css("display", "none");
                $("#sidebar-" + data).fadeIn(500);
                _sidebar = data
            }
        });
    })(jQuery)
});
