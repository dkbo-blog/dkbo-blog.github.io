
var t_on = false,
    t_menu = false,
    t, c_t, _stocklist = '{"init_c":"tse","init_id":"3481","list":[{"id":"3481","c":"tse","date":""},{"id":"2002","c":"tse","date":""}]}',
    _load = "<div class='loading'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";

jQuery(window).load(function() {
    (function($) {
        if ($.trim(localStorage.init) == "" || isNaN(localStorage.init)) {
            localStorage.init = 1;
        }
        if (!localStorage.stockinfo || $.trim(localStorage.stockinfo) == "") {
            localStorage.stockinfo = _stocklist;
        }

        var _view = localStorage.init;
        if (_view != 1) {
            $(".view").css("display", "none");
            $(".view[data-view^='" + _view + "']").fadeIn(500);
            $(".box").eq(_view - 1).find("span").addClass("click");
        } else {
          $(".box").eq(0).find("span").addClass("click");
        }
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
            if (_view !=
                data) {
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
        $("#contact_button,.contact_show,#contacticon").on("click",
            contact);

        $(window).scroll(function() {
            var top = $(this).scrollTop(),
                foot_height = $("footer").height(),
                wrap_height = $("#wrap").height(),
                fix_height = $("aside").height();
            if ($(window).width() >= 768 && ((wrap_height - top) > (fix_height + foot_height)))
                $("#fix").css("top", top);
        })
        topmenu();
        $(window).resize(topmenu);

    })(jQuery)
});
// 移除室內設計的 滾輪捲動
var house = document.getElementById("houseiframe");
if (house.addEventListener) // older FF
    house.addEventListener('DOMMouseScroll', preventDefault, false);
house.onwheel = preventDefault; // modern standard
house.onmousewheel = preventDefault; // older browsers, IE
house.ontouchmove  = preventDefault; // mobile

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function topmenu() {
    if ($(window).width() < 768) {
        var height = $("#menubutton,#singlemenubutton").height()
        $("#wrap").css({
            "padding-top": height
        });
    } else
        $("#wrap").css({
            "padding-top": 0
        });
}

function contact() {
    var _block = $("#contact"),
        v = _block.data("view");
    if (v == true) {
        document.getElementById("contact").style.marginLeft = "-9999px";
        $("#black_shadow").fadeOut(200);
        _block.data("view", false)
    } else {
        document.getElementById("contact").style.marginLeft = 0;
        $("#black_shadow").fadeIn(200);
        _block.data("view", true)
    }
}


function contact_tip_close() {
    $("#contact_tip p").fadeOut(500)
}
