//document.onclick = function() {
//	alert("you clicked somewhere in the document"); 
//}

//var myImage = document.getElementById("slideshow"); 
//myImage.onclick = function() {
//	alert("you clicked the slideshow image"); 
//}

var myImage = document.getElementById("image"); 
var imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "slideshow.jpg"]; 
var imageIndex = 0; 

function changeImage() {
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++; 
	if (imageIndex >= imageArray.length) {
		imageIndex=0; 
	}
}

var intervalHandle = setInterval(changeImage, 2000);
myImage.onclick = function() {
	clearInterval(intervalHandle); 
};  