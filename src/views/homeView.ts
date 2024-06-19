import checkedQuerySelector from '../lib/checkedQuerySelector';

type AppState = {
  count: number;
};

type HomeViewProps = {
  onDecrement: () => void;
  onIncrement: () => void;
};

function createHomeView(props: HomeViewProps) {
  const root = document.createElement('div');
  root.innerHTML = String.raw`
    <header class="header">
      <div class="header-content">
        <h3>Vanilla Starter</h3>
      </div>
    </header>
    <div class="content-container whiteframe">
      <h1>Counter: <span id="counter">0</span></h1>
      <button id="decrement-btn">Decrement</button>
      <button id="increment-btn">Increment</button>
    </div>`;

  const counter = checkedQuerySelector(root, '#counter');

  const decrementBtn = checkedQuerySelector(
    root,
    '#decrement-btn'
  ) as HTMLButtonElement;
  decrementBtn.addEventListener('click', props.onDecrement);

  const incrementBtn = checkedQuerySelector(
    root,
    '#increment-btn'
  ) as HTMLButtonElement;
  incrementBtn.addEventListener('click', props.onIncrement);

  const update = (state: AppState) => {
    counter.textContent = state.count.toString();
    decrementBtn.disabled = state.count <= 0;
  };

  return { root, update };
}

export default createHomeView;
