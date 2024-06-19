function checkedQuerySelector<T extends HTMLElement>(
  parent: HTMLElement,
  selector: string
): HTMLElement {
  const element = parent.querySelector(selector);
  if (!(element && element instanceof HTMLElement)) {
    throw new Error(`No HTMLElement matching ${selector}`);
  }
  return element;
}

export default checkedQuerySelector;
