const btnMobile = document.querySelector("#btn-mobile");
const nav = document.querySelector("#nav");
const closeMenuArea = document.querySelector("#close-menu-area");

const toggleMenu = (event) => {
	if (event.type === "touchstart") {
		event.preventDefault();
	}
	nav.classList.toggle("active");

	// Acessibility
	const active = nav.classList.contains("active");
	event.currentTarget.setAttribute("aria-expanded", active);
	if (active) {
		event.currentTarget.setAttribute("aria-label", "Close Menu");
	} else {
		event.currentTarget.setAttribute("aria-label", "Open Menu");
	}
};

btnMobile.addEventListener("touchstart", toggleMenu);
btnMobile.addEventListener("click", toggleMenu);

// close menu clicking outside
document.addEventListener("click", (event) => {
	if (event.target.id !== "nav" && event.target.id !== "hamburger") {
		nav.classList.remove("active");
	}
});
