
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });

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
    var currentIndex = 0,
      items = $('.container div'),
      itemAmt = items.length;

    function cycleItems() {
      var item = $('.container div').eq(currentIndex);
      items.hide();
      item.css('display','inline-block');
    }

    var autoSlide = setInterval(function() {
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems();
    }, 3000);

    $('.next').click(function() {
      clearInterval(autoSlide);
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems();
    });

    $('.prev').click(function() {
      clearInterval(autoSlide);
      currentIndex -= 1;
      if (currentIndex < 0) {
        currentIndex = itemAmt - 1;
      }
      cycleItems();
    });  

});