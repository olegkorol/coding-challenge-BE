import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import logo from "./logo.svg";
import "./App.css";
import ApolloClient from "./apollo";
import JobList from "./components/JobList";

function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello friend</h1>
          <JobList />
          <p>
            <code>src/App.js</code> and save to reload.
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
    </ApolloProvider>
  );
}

export default App;
