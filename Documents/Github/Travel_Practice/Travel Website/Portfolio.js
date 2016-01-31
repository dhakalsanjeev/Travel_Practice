document.querySelector('.grid').addEventListener('click', function(e) {
if (e.target.tagName=== "IMG") {
	var howmany = this.querySelectorAll("li").length; 
	if (howmany > 1) {
		var removeTarget = e.target.parentNode; 
removeTarget.parentNode.removeChild(removeTarget);
} else {
	var photoTitle = e.target.alt; 
	document.querySelector("#art p").innerHTML = "<p> your best picture is:" + " " + photoTitle + "</p>"; 
}
}	

}, false);