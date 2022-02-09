import { createStore } from "redux";

const initialState = {
  price: [0, 100000],
};

function initialStore(action, state = {}) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}

const store = createStore(initialStore, initialState);
