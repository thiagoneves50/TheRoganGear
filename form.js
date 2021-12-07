const form = document.querySelector(".form");
const successMessage = document.querySelector(".form---success");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const textarea = document.querySelector(".form textarea");

// display success message on submit
form.addEventListener("submit", function (event) {
	successMessage.classList.remove("form-hidden");
	successMessage.classList.add("form-done");
});
// nameInput.value = "";
// emailInput.value = "";
// textarea.value = "";
