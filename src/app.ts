import createHomePage from './pages/homePage.js';

function loadApp() {
  const appRoot = document.getElementById('app-root');
  if (!appRoot) {
    throw new Error('No element with id "app-root" found in the document');
  }

  const { root } = createHomePage();
  appRoot.appendChild(root);
}

export default loadApp;
