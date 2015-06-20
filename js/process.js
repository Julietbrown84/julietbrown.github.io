$(document).ready(function() {
  $('button').click(function() {
      var toAdd = $("input[name=message]").val();
      $('#messages').append("<p>" + toAdd+ "</p>");
    });
  });

	$('nav').hover(
        function(){
            $(this).addClass('active');
        },
        function(){
            $(this).removeClass('active')
        }
     );
});
