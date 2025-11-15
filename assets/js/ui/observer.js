// observer.js
export class SectionObserver {
	constructor({
		selector = "section, main, footer",
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

	handleIntersect(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add(this.className);
			}
		});
	}

	init() {
		const elements = document.querySelectorAll(this.selector);
		elements.forEach((el) => this.observer.observe(el));
	}
}
