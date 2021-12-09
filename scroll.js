// Seleciona menu links
const menuLinks = Array.prototype.slice.call(
	document.querySelectorAll("#menu a")
);
// remove the Contact link (last link)
menuLinks.pop();

// select btn on showcase
const equipmentLinks = document.querySelectorAll(".tag a");
// select link on showcase
const showcaseLinkEquipments = document.querySelector(
	"#showcase-link-equipments"
);
// select footer menu links
const footerLinks = Array.prototype.slice.call(
	document.querySelectorAll("#footer ul a")
);
// remove the Contact link (last link)
footerLinks.pop();

// add scroll to menu links
menuLinks.forEach((link) => {
	link.addEventListener("click", scrollToID);
});

// add scroll to equipment links
equipmentLinks.forEach((link) => {
	link.addEventListener("click", scrollToID);
});

// add scroll to footer links
footerLinks.forEach((link) => {
	link.addEventListener("click", scrollToID);
});

showcaseLinkEquipments.addEventListener("click", scrollToProjects);

// Smooth scrolling
function scrollToID(event) {
	event.preventDefault();
	const ID = event.currentTarget.getAttribute("href");
	const target = document.querySelector(ID);
	target.scrollIntoView({
		behavior: "smooth",
	});
}

function scrollToProjects(event) {
	event.preventDefault();
	const target = document.querySelector("#showcase-link-equipments");
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
