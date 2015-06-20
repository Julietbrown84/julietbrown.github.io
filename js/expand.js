
$(document).ready(function(){
  
  var current_h = null;
  var current_w = null;

  $('.expand').hover(
      function(){
          current_h = $(this, 'img')[0].height;
          current_w = $(this, 'img')[0].width;
          $(this).stop(true, false).animate({width: (current_w * 1), height: (current_h * 1.3)}, 300);
      },
      function(){
          $(this).stop(true, false).animate({width: current_w + 'px', height: current_h + 'px'}, 300);
      }
  );

});
