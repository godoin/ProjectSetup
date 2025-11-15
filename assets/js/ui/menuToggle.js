/**
 * menuToggle.js
 * MenuToggle class to handle toggling navigation menu visibility and menu icons
 */
export class MenuToggle {

	/**
	 * Returns a new MenuToggle instance
	 * @param {*} param0 
	 * @returns {MenuToggle} MenuToggle instance
	 */
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

	/**
	 * Toggles the menu icon between menu and close icons
	 * @returns {void} 
	 */
	switchIcon() {
		if (!this.menuIcon) return;

		this.menuIcon.src = this.menuIcon.src.includes("menu.svg")
			? this.closeIconPath
			: this.menuIconPath;
	}

	/**
	 * Toggles navigation menu visibility and updates the icon
	 * @param {*} e 
	 * @returns {void}

	 */
	toggleMenu = (e) => {
		if (!this.navItems || !this.menuIcon) return;

		this.navItems.classList.toggle("active");
		this.switchIcon();
	};


	/**
	 * Initializes the menu toggle by attaching the event listener to the menu button
	 * @returns {void}
	 */
	init() {
		if (!this.menuButton) {
			console.error("Menu button not found.");
			return;
		}

		this.menuButton.addEventListener(this.eventType, this.toggleMenu);
	}
}
