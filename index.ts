import { createStore } from "redux";
import "./style.css";

(function(w: any) {
  let counter: any = document.getElementById("counter-input");
  counter.value = 0;

  function counterReducer(state = { value: 0 }, action: any) {
    switch (action.type) {
      case "counter/incremented":
        return { value: state.value + 1 };
      case "counter/decremented":
        return { value: state.value - 1 };
      default:
        return state;
    }
  }

  let store = createStore(counterReducer);

  function decrement() {
    store.dispatch({ type: "counter/decremented" });
  }

  function increment() {
    store.dispatch({ type: "counter/incremented" });
  }

  store.subscribe(() => {
    console.log("Current State => ", store.getState());
    const cVal = store.getState();
    counter.value = cVal.value;
  });

  w.decrement = decrement;
  w.increment = increment;
})(window);
