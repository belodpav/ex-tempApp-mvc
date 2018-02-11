/**
 * Returns DOM element by selector
 * wrapper on querySelector
 * @param {string} selector
 * @return {Node}
 */
function _qs(selector, scope) {
  return (scope || document).querySelector(selector);
}
/**
 * Adds event listener to the element with type event
 * @param {Node} element
 * @param {string} type
 * @param {func} handler 
 */
function _on(element, type, handler) {
  element.addEventListener(type, handler);
}

export { _on, _qs };