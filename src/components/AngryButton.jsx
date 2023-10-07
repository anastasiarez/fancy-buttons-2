import { useReducer } from "react";

const AngryButton = (props) => {
//useReducer takes a reducer function as its first argument. In this case, the reducer function is defined inline as an arrow function. 
//anger: This represents the current state value.
//action: This represents an action that can be dispatched to change the state.In this reducer function, it checks the current value of anger. If anger is less than 1, it increments anger by the value of the dispatched action. If anger is 1 or greater, it resets anger to 0.

  const [anger, dispatch] = useReducer((anger, action) => {
    if (anger < 1) {
      return anger + action;
    } else {
      return 0;
    }
  }, 0); // <-- The second argument passed to useReducer (0 in this case) represents the initial state of anger. 

 
  return (
    <button
      style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
      onClick={() => dispatch(0.1)}
      className="AngryButton">

      {anger < 1 && <span>Don't click me too much!</span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>

  );
};

export default AngryButton;