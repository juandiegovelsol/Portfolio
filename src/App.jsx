import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CustomRouter } from "./router";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomRouter />
    </div>
  );
}

export default App;
