export const stickyHeader = () => {
	// console.log("la url?? ", window.location);
	let number =
		window.pageXOffset ||
		document.documentElement.scrollTop ||
		document.body.scrollTop ||
		0;
	const header = document.getElementById("headerSticky");
	if (header !== null) {
		if (number >= 100) {
			header.classList.add("header--sticky");
		} else {
			header.classList.remove("header--sticky");
		}
	}
};
