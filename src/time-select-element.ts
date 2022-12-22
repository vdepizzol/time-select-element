/**
 * An example Custom Element. This documentation ends up in the
 * README so describe how this elements works here.
 *
 * You can event add examples on the element is used with Markdown.
 *
 * ```
 * <time-select></time-select>
 * ```
 */
class TimeSelectElement extends HTMLElement {
  connectedCallback(): void {
    this.textContent = ':wave:'
  }
}

declare global {
  interface Window {
    TimeSelectElement: typeof TimeSelectElement
  }
}

export default TimeSelectElement

if (!window.customElements.get('time-select')) {
  window.TimeSelectElement = TimeSelectElement
  window.customElements.define('time-select', TimeSelectElement)
}
