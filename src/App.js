import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";
import React from "react";
function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
}

export default App;
