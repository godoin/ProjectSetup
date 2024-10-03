/**
 * Navigation Menu Toggle.
 * This script handles the visibility of the navigation items found on navbar.
 * It is handled by the menu button that is found at mobile-tablet screens.
 *
 */

import { attachEventHandlerById } from "./eventHandlers.js";

/**
 * Get new menu icon based on src from menu to x-close.
 */
const switchMenuIconSrc = (currentSrc) => {
  return currentSrc.includes("menu.svg")
    ? "assets/images/icons/x-close.svg"
    : "assets/images/icons/menu.svg";
}

/**
 * Toggles visibility of navigations and the menu button icon.
 */
const toggleMenu = (menuIcon, navItems) => {
  const newSrc = switchMenuIconSrc(menuIcon.src);
  menuIcon.src = newSrc;

  return {
    src: newSrc,
    icon: menuIcon.src,
    navigation: navItems,
  };
}

/**
 * Updates the menu state to DOM show navigation items on mobile.
 */
const updateMenuStateToDom = (state) => {
  state.navigation.classList.toggle("active");
  state.icon = state.src;
}

/**
 * Method for handling for toggling menu and updating dom state.
 */
const handleMenuToggle = (e, menuIconId, navItemsId) => {
  const menuIcon = document.getElementById(menuIconId);
  const navItems = document.getElementById(navItemsId);

  const updateState = toggleMenu(menuIcon, navItems);
  updateMenuStateToDom(updateState);
}

export const setupMenuToggle =() => {
  console.log("Menu toggling is running...")
  
  attachEventHandlerById("menu-btn", "click", handleMenuToggle, "menu-icon", "nav-items");
}