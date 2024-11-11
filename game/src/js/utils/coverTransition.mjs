const cover = document.querySelector(".cover");

export const startCoverTransition = (htmlFile) => {
	cover.style.animation = "firstHalfCoverAnimation 1s forwards";

	cover.addEventListener("animationend", () => {
		window.location.href = `../../public/html/${htmlFile}.html`;
	});
};

export const completeCoverTransition = () => {
	cover.style.animation = "secondHalfCoverAnimation 1s forwards";
};