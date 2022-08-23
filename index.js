
const button = document.getElementById("button");

function addingEventListener() {
	button.addEventListener("click", function () {
        return alert("Hello World");
	});
}

addingEventListener();