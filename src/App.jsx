import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const click = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>Hello this is a naval battle </p>
      <button onClick={click}>Click me</button>
      <h1>{count}</h1>
    </>
  );
}

export default App;
