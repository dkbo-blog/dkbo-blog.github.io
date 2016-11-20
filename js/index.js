(function(){
  $(".totop").on('click',function(){
    topmenu();
    $("html, body").animate({scrollTop: 0}, 500);
  });
  function topmenu() {
      if ($(window).width() < 768) {
          var height = $("#menubutton,#singlemenubutton").height();
          $("#wrap").css({
              "padding-top": height
          });
      } else {
          $("#wrap").css({
              "padding-top": 0
          });
      }
    }
  topmenu();
  $(window).on('resize',topmenu);
})();
