import { Loader } from "./ui/loading.js";
import { SectionObserver } from "./ui/observer.js";
import { PreFetcher } from "./ui/prefetching.js";
import { MenuToggle } from "./ui/menuToggle.js";


/**
 * Main entry point for initializing frontend UI components
 */
document.addEventListener("DOMContentLoaded", () => {
	// Initialize prefetching for SPA-like navigation
	const prefetcher = new PreFetcher();
	prefetcher.init();

	// Initialize section observer for intersection animations
	const observer = new SectionObserver({
		threshold: 0.5,
		className: "show",
	});
	observer.init();

	// Initialize menu toggle for mobile navbar
	const menu = new MenuToggle({
		menuButtonId: "menu-btn",
		menuIconId: "menu-icon",
		navItemsId: "nav-items",
		menuIconPath: "assets/images/icons/menu.svg",
		closeIconPath: "assets/images/icons/x-close.svg",
	});
	menu.init();
});

/**
 * Initialize loader on window load to ensure content is fully rendered
 */
window.addEventListener("load", () => {
	const loader = new Loader({
		delay: 4000,
		loaderId: "loader",
		contentId: "content",
	});
	loader.init();
});
