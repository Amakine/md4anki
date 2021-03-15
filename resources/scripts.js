function toggleClozees(hide) {
	let code  = document.getElementsByClassName("clozee");
	for (let i = 0; i < code.length; i++)  
		code[i].classList.toggle("hidden-clozee", hide);
}
toggleClozees(true);

function toggleHide(dom)  {
	console.log("toggle");
	dom.classList.toggle("hidden-clozee");
}
window.onload = function() {
	console.log("onload");
	let code  = document.getElementsByClassName("clozee");
	for (let i = 0; i < code.length; i++)
		code[i].setAttribute("onclick", "toggleHide(this)");
}

