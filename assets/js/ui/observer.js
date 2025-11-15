
/**
 * observer.js
 * SectionObserver class to reveal elements on scroll using IntersectionObserver
 */
export class SectionObserver {

	/**
	 * Returns a new SectionObserver instance
	 * @param {*} param0 
	 * @returns {SectionObserver} SectionObserver instance
	 */
	constructor({
		selector = "section, main",
		threshold = 0.5,
		className = "show",
	} = {}) {
		this.selector = selector;
		this.threshold = threshold;
		this.className = className;
		this.observer = new IntersectionObserver(
			this.handleIntersect.bind(this),
			{
				root: null,
				rootMargin: "0px",
				threshold: this.threshold,
			}
		);
	}

	/**
	 * Handles intersection events and adds the class to intersecting elements
	 * @param {*} entries 
	 * @returns {void}
	 */
	handleIntersect(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add(this.className);
			}
		});
	}

	/**
	 * Initializes observation on all elements matching the selector
	 * @returns {void}
	 */
	init() {
		const elements = document.querySelectorAll(this.selector);
		elements.forEach((el) => this.observer.observe(el));
	}
}
