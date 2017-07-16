var OpenButton = document.getElementById("menu-button"),
  CloseButton = document.getElementById("menu-close"),
  CloseZone = document.getElementById("zone-close");

$(document).ready(function(){
  $(OpenButton).click(function(){
    $("#overlay-visible").fadeIn(300);
  });
  $(CloseButton).click(function(){
    $('#overlay-visible').fadeOut(300);
  });
   jQuery(function($){
    $(CloseZone).click(function (e){
      var div = $("#menu-content");
      if (!div.is(e.target) && div.has(e.target).length === 0) {
      $("#overlay-visible").fadeOut(300);
      }
    });
  });
});

