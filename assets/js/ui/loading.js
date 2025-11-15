// loading.js
export class Loader {
	constructor({
		loaderId = "loader",
		contentId = "content",
		delay = 4000,
	} = {}) {
		this.loader = document.getElementById(loaderId);
		this.content = document.getElementById(contentId);
		this.delay = delay;
	}

	showContent() {
		if (this.loader && this.content) {
			this.loader.style.display = "none";
			this.content.style.display = "block";
		} else {
			console.error("Loader or content element not found.");
		}
	}

	init() {
		setTimeout(() => this.showContent(), this.delay);
	}
}
