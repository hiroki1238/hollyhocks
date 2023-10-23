import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header bg-pastel-blue">
        <img
          src="https://iconbu.com/wp-content/uploads/2019/09/01-12.png"
          className="App-logo"
          alt="logo"
        />
        <p className="text-pastel-purple text-3xl">
          <code>WED</code> Community にようこそ！
        </p>
        <a
          className="text-pastel-red underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WED について
        </a>
        <p
          className="text-pastel-purple text-2xl bg-pastel-gray p-1 m-2 rounded-lg hover:text-4xl"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          👍{count}
        </p>
      </header>
      <img
        src="https://iconbu.com/wp-content/uploads/2019/09/01-12.png"
        className="App-logo"
        alt="logo"
      />
    </div>
  );
}

export default App;
