
//website resource: http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/

//Prepare canvas
//However IE doesn't know what the canvas tag means, 
//and if we used that in our markup.
//Instead create a canvas element in JavaScript and append it to our div
// called canvasDiv.

var canvasDiv = document.getElementById('canvasDiv');
canvas = document.createElement('canvas');
canvas.setAttribute('width', canvasWidth);
canvas.setAttribute('height', canvasHeight);
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
if(typeof G_vmlCanvasManager != 'undefined') {
	canvas = G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");

// dynamically drawing on an HTML5 canvas. 
//It will consist of 4 mouse events and two functions: addClick to record mouse 
//data and redraw which will draw that data.

//Mouse Down Event: When the user clicks on canvas we record the position in an 
//array via the addClick function. We set the boolean paint to true (we will see
// why in a sec). Finally we update the canvas with the function redraw.

$('#canvas').mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
		
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});

//Mouse Move Event: 
//The boolean paint will let us know if the virtual marker is pressing 
//down on the paper or not. If paint is true, then we record the value.

$('#canvas').mousemove(function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});



$('#canvas').mouseleave(function(e){
  paint = false;
});

//Here is the addClick function that will save the click position:

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

//The redraw function is where the magic happens. Each time the function is 
//called the canvas is cleared and everything is redrawn. We could be more
// efficient and redraw only certain aspects that have been changed,
// but let's keep it simple.

// set a few stroke properties for the color, shape, and width. 
//Then for every time we recorded as a marker on paper going to draw a line.

function redraw(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  
  context.strokeStyle = "#df4b26";
  context.lineJoin = "round";
  context.lineWidth = 5;
			
  for(var i=0; i < clickX.length; i++) {		
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.stroke();
  }
}


