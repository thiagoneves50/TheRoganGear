// Seleciona links internos
const intLinks = document.querySelectorAll("#menu a");
// select btn on showcase
const btnToProjects = document.querySelector(".btn-to-projects");
// select footer menu links
const footerLinks = document.querySelectorAll("#footer ul a");

intLinks.forEach((link) => {
	link.addEventListener("click", scrollToID);
});

footerLinks.forEach((link) => {
	link.addEventListener("click", scrollToID);
});

btnToProjects.addEventListener("click", scrollToProjects);

// Smooth scrolling
function scrollToID(event) {
	event.preventDefault();
	const ID = event.currentTarget.getAttribute("href");
	const target = document.querySelector(ID);
	target.scrollIntoView({
		behavior: "smooth",
	});
	// fecha o menu
	// btnMobile.click();
}

function scrollToProjects(event) {
	event.preventDefault();
	const target = document.querySelector("#projects");
	target.scrollIntoView({
		behavior: "smooth",
	});
}

// window.addEventListener("DOMContentLoaded", (event) => {
// 	document.querySelectorAll('#menu a[href^="#"]').forEach((trigger) => {
// 		trigger.onclick = function (e) {
// 			e.preventDefault();
// 			let hash = this.getAttribute("href");
// 			let target = document.querySelector(hash);
// 			let headerOffset = 100;
// 			let elementPosition = target.offsetTop;
// 			let offsetPosition = elementPosition - headerOffset;

// 			window.scrollTo({
// 				top: offsetPosition,
// 				behavior: "smooth",
// 			});
// 		};
// 	});
// });
