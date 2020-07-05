import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [displayMessage, setDisplayMessage] = React.useState(false);
  const [name, setName] = React.useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <label htmlFor="name" className="item padding">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="padding"
          onChange={(event) => setName(event.currentTarget.value)}
        />
        <button onClick={() => setDisplayMessage(true)} className="padding">
          Submit
        </button>

        {displayMessage && <p className="item">{`Hello, ${name}.`}</p>}
        {!displayMessage && <p className="item">Hello.</p>}
      </div>
      <div className="App-footer padding">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
