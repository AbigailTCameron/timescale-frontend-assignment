import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";
import SearchResults from "./components/SearchResults";
import requests from "./requests";

function App() {
  const [value, setValue] = useState("");

  const doSearch = (e) => {
    setValue(e.target.value);
  };
  console.log(value);
  return (
    <div className="app">
      <Header doSearch={doSearch} value={value} />
      {value ? (
        <SearchResults fetchSearch={`${requests.search.url}${value}`} />
      ) : (
        <Results fetchUrl={requests.fetchTrending.url} />
      )}
    </div>
  );
}

export default App;
