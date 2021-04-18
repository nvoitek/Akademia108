$("#count-sum").click(function(){
  var sum = 0;
  $(".salary").each(function(){
    sum += +this.innerText;
  });
  $("#sum").text(sum);
});
