document.getElementById("testme").addEventListener("click", () => {
	fetch('/resources', {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			"name": "Glenn",
			"pass": "slit"
		})
	}).then((response) => {
		console.log(response);
	});
});

// Get the modal
var signModal = document.getElementById('signupModal');
var logModal = document.getElementById('loginModal');

document.getElementById("signup").addEventListener("click", () => {
	signModal.style.display = "block";
})

document.getElementById("login").addEventListener("click", () => {
	logModal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0].onclick = function() {
    signModal.style.display = "none";
    //logModal.style.display = "none";
}

document.getElementsByClassName("close")[1].onclick = function() {
    logModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if ((event.target == signModal) || (event.target == logModal)) {
        signModal.style.display = "none";
        logModal.style.display = "none";
    }
}