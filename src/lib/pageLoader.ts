/**
 * This file is provided ready-made for use in your application by HackYourFuture.
 * There should be no reason to make any changes to this file.
 */

import { CreatePageFn, Page } from './router';

function pageLoader() {
  let currentPage: Page | null = null;

  return (createPageFn: CreatePageFn) => {
    // Call optional pageWillUnload lifecycle method.
    currentPage?.pageWillUnload?.();

    // Create the new page.
    currentPage = createPageFn();

    // Mount the new page, replacing any previous page.
    const appRoot = document.getElementById('app-root');
    if (!appRoot) {
      throw new Error('No element with id "app-root" found in the document');
    }
    appRoot.innerHTML = '';
    appRoot.appendChild(currentPage.root);

    // Reset scroll position to top of page
    window.scrollTo(0, 0);

    // Call optional pagDidLoad lifecycle method.
    currentPage?.pageDidLoad?.();
  };
}

export default pageLoader();
