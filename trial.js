//Problem: User when clicking on image goes to a dead end poor user experience
//Solution: Create a overlay with the large image

var $overlay = $('<div id="overlay"></div>')
var $image = $("<img>");
//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);

//1.Capture the click event on a link to an image
$("#imageGallery a").click(funstion(event){
event.preventDefault();

var imageLocation = $(this).attr("href");
$image.attr("src", imageLocation);

//1.2 Update overlay wiht the image linked to the link
$image.attr("src", imageLocation);
//1.1 Show overlay
$overlay.show();

//1.3 Get alt attribute and set caption
var captionText = $(this).children("img").attr("alt");
$caption.text(captionText);
 //2.2 A caption
 });
 //3When overlay is clicked
$overlay.click(function(){

$overlay.hide();
 //3.1 Hide the overlay

 });



