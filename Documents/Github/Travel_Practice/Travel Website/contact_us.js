var firstName = document.getElementById("firstname"); 
firstName.onfocus = function() {
	if (firstName.value =="First Name") {
		firstName.value = ""; 
	}
}; 

firstName.onblur = function() {
	if (firstName.value== "" ) {
		firstName.value = "First Name"; 
	}
}; 