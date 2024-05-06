import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  let [warning, setWarning] = useState("");

  const addValues = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      setWarning("");
    } else {
      setWarning("The Maximum Value Reached");
    }
  };

  const decreaseValues = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setWarning("");
    } else {
      setWarning("The Minimum Value Reached");
    }
  };

  return (
    <>
      <h1>
        Hello {counter}<br/>
        {warning}
      </h1>
      <button onClick={addValues}>Add values</button>
      <button onClick={decreaseValues}>Decrease values</button>
    </>
  );
}

export default App;
