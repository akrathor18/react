import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counterSlice";
function App() {
  // const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <div className="">{count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount())}>Decrement</button>
    </>
  );
}

export default App;
