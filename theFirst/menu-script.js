var OpenButton = document.getElementById("menu-button"),
  CloseButton = document.getElementById("menu-close"),
  CloseZone = document.getElementById("zone-close");

OpenButton.addEventListener("click", function(){
    $("#overlay-visible").addClass("content-visible");
});
CloseButton.addEventListener("click", function(){
    $("#overlay-visible").removeClass("content-visible");
});
jQuery(function($){
  $(CloseZone).mouseup(function (e){
    var div = $("#menu-content");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
    $("#overlay-visible").removeClass("content-visible");
    }
  });
});
$(document).ready(function(){
    $("zone-close").click(function(){
        $("#menu-content").toggle("slow");
    });
});

