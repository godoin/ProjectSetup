export class PreFetcher {
	constructor({ mainSelector = "main", navSelector = ".nav-item a" } = {}) {
		this.mainSelector = mainSelector;
		this.navSelector = navSelector;
		this.cachedPages = {};
	}

	updateNavbarActive(targetUrl) {
		document.querySelectorAll(this.navSelector).forEach((item) => {
			const link = item;
			if (!link) return;
			item.classList.toggle("active", link.href === targetUrl);
		});
	}

	updateMainStyles(targetUrl) {
		const main = document.querySelector(this.mainSelector);
		const html = document.documentElement;

		const mapping = {
			"index.html": "index",
			"about.html": "about",
			"works.html": "works",
			"playground.html": "playground",
			"gallery.html": "gallery",
			"kaseakas.html": "",
		};

		main.className = ""; // reset classes
		html.classList.remove("no-scroll");

		for (const [key, className] of Object.entries(mapping)) {
			if (targetUrl.includes(key)) {
				if (className) main.classList.add(className);
				if (["playground.html", "gallery.html"].includes(key))
					html.classList.add("no-scroll");
				break;
			}
		}
	}

	async handleLinkClick(e) {
		e.preventDefault();
		const link = e.currentTarget;
		const targetUrl = link.href;
		const mainContainer = document.querySelector(this.mainSelector);

		if (this.cachedPages[targetUrl]) {
			mainContainer.innerHTML = this.cachedPages[targetUrl];
		} else {
			try {
				const res = await fetch(targetUrl);
				const html = await res.text();
				const parser = new DOMParser();
				const doc = parser.parseFromString(html, "text/html");
				const newHtml = doc.querySelector(this.mainSelector).innerHTML;
				mainContainer.innerHTML = newHtml;
				this.cachedPages[targetUrl] = newHtml;
				window.history.pushState({}, "", targetUrl);
			} catch (err) {
				console.error("Prefetch error:", err);
			}
		}

		setupSections();
		setupSectionToggle();
		this.updateMainStyles(targetUrl);
		this.updateNavbarActive(targetUrl);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	init() {
		document.querySelectorAll(this.navSelector).forEach((link) => {
			link.addEventListener("click", (e) => this.handleLinkClick(e));
		});
	}
}
