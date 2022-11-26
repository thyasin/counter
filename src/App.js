import React from 'react';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, incrementByAmount, decrementByAmount} from "./app/counterSlice";

function App() {
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>+33</button>
      <button onClick={() => dispatch(decrementByAmount(11))}>-11</button>
    </div>
  );
}

export default App;
