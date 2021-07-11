$("#down").click(function(){
  $("p").last().insertAfter("#up");
});

$("#up").click(function(){
  $("p").first().insertBefore("#down");
});