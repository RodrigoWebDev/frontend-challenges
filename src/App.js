import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  //API First test
  useEffect(() => {
    const api = "http://localhost:3001/"
    const query = `
      query{
        allSkus{
          id
        }
      }
    `

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
      })
    }

    fetch(api, options)
      .then(data => data.json())
      .then(data => console.log(data))

  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
