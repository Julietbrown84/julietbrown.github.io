$(document).ready(function () {     
    var bouncetime = 200;
    var ballheight = 200;
    var ballsize = 18;
 
    $('#ball').css({'width':ballsize, 'height':ballsize, 'margin-left':-(ballsize/2),'display':'block', 'bottom':ballheight});
    $('#shadow').css({'width':ballsize*1., 'height':ballsize/1, 'margin-left':-(ballsize*0.10),'display':'block', 'opacity':0.2});
 
    ballbounce();
    ballshadow();
 
    function ballbounce() {
        $('#ball').animate({'bottom':70}, bouncetime, 'easeInQuad', function() {
            $('#ball').animate({'bottom':ballheight}, bouncetime, 'easeOutQuad', function() {
                ballbounce();
            });
        });
    }
    function ballshadow() {
        $('#shadow').animate({'width':ballsize, 'height':ballsize/2, 'margin-left':-(ballsize/1), 'opacity':1}, bouncetime, 'easeInQuad', function() {
            $('#shadow').animate({'width':ballsize*1.5, 'height':ballsize/3, 'margin-left':-(ballsize*0.10), 'opacity':0.2}, bouncetime, 'easeOutQuad', function() {
                ballshadow();
            });
        });
    }
});
