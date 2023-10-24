import logo from "./logo.svg";
import "./App.css";

function App() {
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
      </header>
    </div>
  );
}

export default App;
