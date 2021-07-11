$("button").click(function(){
    $("#square").animate({left: '100px', width: '100px', height: '100px'}, 3000, function(){ 
      $(this).css('backgroundColor', 'blue');
  
      $(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
      function() {
        $(this).append("<h2>Animacja skończona</h2>");
      });
    });
  });