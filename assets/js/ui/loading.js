/**
 * loading.js
 * Loader class to handle showing a loader element and then revealing content
 */
export class Loader {

	/**
	 * Returns a new Loader instance
	 * @param {*} param0 
	 * @returns {Loader} Loader instance
	 */
	constructor({
		loaderId = "loader",
		contentId = "content",
		delay = 4000,
	} = {}) {
		this.loader = document.getElementById(loaderId);
		this.content = document.getElementById(contentId);
		this.delay = delay;
	}

	/**
	 * Hides the loader and displays the content element
	 * @returns {void}
	 */
	showContent() {
		if (this.loader && this.content) {
			this.loader.style.display = "none";
			this.content.style.display = "block";
		} else {
			console.error("Loader or content element not found.");
		}
	}

	/**
	 * Initializes the loader, showing content after a delay
	 * @returns {void}
	 */
	init() {
		setTimeout(() => this.showContent(), this.delay);
	}
}
