/**
 * Event Handles Module
 * This modules centralizes all common event handling logic for the shop.
 */

export const attachEventHandlerById =(
  elementId,
  eventType,
  handlerFunction,
  ...args
) => {
  const element = document.getElementById(elementId);
  element?.addEventListener(eventType, (event) => {
    handlerFunction(event, ...args);
  });
}

export const attachMultipleEventHandlerById = (
  elementId,
  eventType,
  handlerFunction,
  ...args
) => {
  const allElements = document.querySelectorAll(elementId);
  allElements?.addEventListener(eventType, (e) => {
    handlerFunction(e, ...args);
  });
}


export const attachMultipleClickHandler = (selector, handlerFunction) => {
  const allSelectors = document.querySelectorAll(selector);

  allSelectors?.forEach((selector) => {
    selector.addEventListener("click", () => {
      handlerFunction(selector);
    });
  });
}

export const attachMultipleClickHandlerWithParent =(
  selector,
  role,
  handlerFunction
) => {
  const parent = document.getElementById(selector);
  const elements = parent?.querySelectorAll(role);

  elements?.forEach((element) => {
    element.addEventListener("click", () => {
      handlerFunction(element, parent);
    });
  });
}

/**
 * Attaches a submit event handler (usually a form) given a id.
 */
export const attachSubmitHandler = (formId, handlerFunction) => {
  const form = document.getElementById(formId);
  form?.addEventListener("submit", handlerFunction);
}
