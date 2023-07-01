import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { ToastMsgSuc } from "./components/Toast/ToastMsg";

function App() {
  const [count, setCount] = useState(0);

  const showToast = () => ToastMsgSuc("Welcome to React");

  return (
    <>
      <div className="flex justify-around">
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-purple-500">
        Vite + React <FontAwesomeIcon icon={faAtom} />
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={showToast}>Show Toast</button>
    </>
  );
}

export default App;
