import state from '../../../lib/observableState.js';

function createErrorPage() {
  const { error } = state.get();
  const message = error ? error.message : 'Unknown error';

  const root = document.createElement('div');
  root.className = 'dialog-container whiteframe';
  root.innerHTML = String.raw`
    <h4>Oops... Something went wrong</h4>
    <p>${message}</p>
    <a href="#home">Home</button>
  `;

  return { root };
}

export default createErrorPage;
