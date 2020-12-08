
function test() {
	document.getElementById("review").style.display = "block";
	var sub = document.getElementsByClassName("submit");
	sub[0].style.display = "none";
	sub[1].style.display = "none";
	document.getElementById("review").innerHTML = "<strong> Review: </strong>" + document.getElementById("review1").value;	
}