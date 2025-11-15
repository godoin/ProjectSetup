// menuToggle.js
export class MenuToggle {
	constructor({
		menuButtonId = "menu-btn",
		menuIconId = "menu-icon",
		navItemsId = "nav-items",
		menuIconPath = "assets/images/icons/menu.svg",
		closeIconPath = "assets/images/icons/x-close.svg",
		eventType = "click",
	} = {}) {
		this.menuButton = document.getElementById(menuButtonId);
		this.menuIcon = document.getElementById(menuIconId);
		this.navItems = document.getElementById(navItemsId);
		this.menuIconPath = menuIconPath;
		this.closeIconPath = closeIconPath;
		this.eventType = eventType;
	}

	// Toggle the menu icon src based on current state
	switchIcon() {
		if (!this.menuIcon) return;
		this.menuIcon.src = this.menuIcon.src.includes("menu.svg")
			? this.closeIconPath
			: this.menuIconPath;
	}

	// Toggle nav visibility and update icon
	toggleMenu = (e) => {
		if (!this.navItems || !this.menuIcon) return;
		this.navItems.classList.toggle("active");
		this.switchIcon();
	};

	// Initialize event listener
	init() {
		if (!this.menuButton) {
			console.error("Menu button not found.");
			return;
		}
		this.menuButton.addEventListener(this.eventType, this.toggleMenu);
	}
}
