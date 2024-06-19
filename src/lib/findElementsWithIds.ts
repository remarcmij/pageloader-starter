/**
 * This file is provided ready-made for use in your application by HackYourFuture.
 * There should be no reason to make any changes to this file.
 */


type ElementsWithIdMap = {
  [key: string]: Element;
};

const snakeToCamel = (s: string): string => {
  return s.replace(/(\-\w)/g, (m) => m[1].toUpperCase());
};

/**
 * Find all child elements that have an `id` attribute.
 */
function findElementsWithIds(root: Element): ElementsWithIdMap {
  const elements = root.querySelectorAll('[id]');
  const elementsWithIdMap: ElementsWithIdMap = {};

  for (const element of elements) {
    const camelCaseId = snakeToCamel(element.id);
    elementsWithIdMap[camelCaseId] = element;
  }

  return elementsWithIdMap;
}

export default findElementsWithIds;
