import React, { useReducer } from "react";

const App = () => {
  let initialState = 0;

  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return (state = state + 1);
      case "dec":
        return (state = state - 1);

      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="" style={{ display: "flex", margin: 50 }}>
        <button onClick={() => { dispatch({ type: "inc" }); }} > + </button>
        <div className="" style={{ width: 50, textAlign: "center" }}>
          {state}
        </div>
        <button onClick={() => { dispatch({ type: "dec" }); }} > - </button>

      </div>
    </>
  );
};

export default App;
