/**
 * This file is provided ready-made for use in your application by HackYourFuture.
 * There should be no reason to make any changes to this file.
 */

type Subscriber = {
  update(state: any, prevState: any): void;
};

function createObservableState(initialState: any = {}) {
  let state = { ...initialState };

  const subscribers: Set<Subscriber> = new Set();

  const subscribe = (subscriber: Subscriber) => {
    subscribers.add(subscriber);
  };

  const unsubscribe = (subscriber: Subscriber) => {
    subscribers.delete(subscriber);
  };

  const update = (updates: any) => {
    const prevState = state;
    state = { ...prevState, ...updates };
    subscribers.forEach((subscriber) => subscriber.update(state, prevState));
    return state;
  };

  const get = () => {
    return state;
  };

  const set = (nextState: any) => {
    state = { ...nextState };
  };

  return { subscribe, unsubscribe, update, get, set };
}

export default createObservableState;
